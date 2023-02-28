import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
import { Input, InputProps } from '@alfalab/core-components/input';
import { PhoneInput } from '@alfalab/core-components/phone-input';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Radio } from '@alfalab/core-components/radio';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Textarea } from '@alfalab/core-components/textarea';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import cn from 'classnames';

import styles from './Form.module.css';
import { FormProps } from './Form.props';
import { confirmError, deliveryTypeError, emailError, mustBeFilled, paymentMethodError, phoneNumberError } from '../../vendor/errorMessages';
import { deliveryTypes, paymentMethods, PaymentMethodsEnum, phoneRegExp, privacyPolicyAgreement } from '../../vendor/constants';
import { DeliveryEnum } from '../../page-components/Order/delivery.reducer';

const makeInputProps = (label: string, placeholder?: string): InputProps => ({
  label,
  placeholder,
  fieldClassName: styles.field,
  labelClassName: styles.label,
  clear: true,
  size: 'l',
  block: true
});

const schema = yup.object({
  name: yup.string().max(100).required(mustBeFilled),
  email: yup.string().email(emailError).required(mustBeFilled),
  phone: yup.string().matches(phoneRegExp, phoneNumberError).required(mustBeFilled),
  address: yup.string().max(100),
  delivery: yup.string().oneOf(Object.values(DeliveryEnum)).required(deliveryTypeError),
  promo: yup.string().max(100),
  privacyPolicy: yup.boolean().isTrue().required(confirmError),
  comment: yup.string().max(200),
  payment: yup.string().oneOf(Object.values(PaymentMethodsEnum)).required(paymentMethodError),

}).required();
type FormData = yup.InferType<typeof schema>;

export const Form = ({ className, onDeliveryChange }: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { isDirty, errors },
    getFieldState
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema)
  });

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const handleChangePrivacyChecked = () => setIsPrivacyChecked(!isPrivacyChecked);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(errors)
    console.log(data)
  }

  const isFieldCorrect = (fieldName: keyof FormData): boolean => {
    return getFieldState(fieldName).isDirty && !getFieldState(fieldName).error
  }

  return (
    <form className={cn(className, styles.form)} onSubmit={handleSubmit(onSubmit)} data-test-id='form'>

      <Input
        {...makeInputProps('ФИО', 'Фамилия Имя Отчество')}
        {...register('name')}

        error={errors.name?.message}
        success={isFieldCorrect('name')}

        dataTestId='name-input'
      />

      <Input
        {...makeInputProps('email', 'example@site.ru')}
        {...register('email')}

        error={errors.email?.message}
        success={isFieldCorrect('email')}

        dataTestId='email-input'
      />

      <PhoneInput
        {...makeInputProps('Номер телефона', '+7 000 000-00-00')}
        {...register('phone')}

        error={errors.phone?.message}
        success={isFieldCorrect('phone')}

        dataTestId='phone-input'
      />

      <Input
        {...makeInputProps('Адрес (если выбран самовывоз — оставьте поле пустым)', 'Индекс, город, улица, дом, квартира')}
        {...register('address')}

        success={isFieldCorrect('address')}

        dataTestId='address-input'
      />

      <Controller
        control={control}
        name='delivery'
        rules={{ required: deliveryTypeError }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          // задать вопрос, корректно ли так типизорвать
          const handleChange = (_: unknown, payload?: { value: string }) => {
            if (payload) {
              onChange(payload.value);
              onDeliveryChange && onDeliveryChange(payload.value as DeliveryEnum);
            }
          };
          return (
            <RadioGroup
              label='Доставка'
              onChange={handleChange}
              value={value}
              error={error?.message}
              className={styles.radioGroup}

              dataTestId='delivery-radio'
            >
              {
                deliveryTypes.map(({ label, radioName }) => (
                  <Radio
                    key={radioName}
                    label={label}
                    value={radioName}
                    dataTestId={`radio-${radioName}`}
                  />
                ))
              }
            </RadioGroup>
          )
        }}
      />

      <Input
        {...makeInputProps('Промокод')}
        {...register('promo')}

        dataTestId='promo-input'
      />

      <Checkbox
        label={privacyPolicyAgreement}
        checked={isPrivacyChecked}
        onChange={handleChangePrivacyChecked}
        className={styles.privacy}

        dataTestId='privacy-check'
      />

      <Textarea
        fieldClassName={styles.field}
        label='Комментарий к заказу'
        size='l'
        block
        resize={'vertical'}
        {...register('comment')}

        dataTestId='comment-input'
      />

      <Typography.Text view='primary-small' className={styles.paymentHint}>
        Выберите способ оплаты «Промокод», если ваш заказ не превышает
        сумму промокода. Если больше — выберите оплату картой.
      </Typography.Text>

      <Controller
        control={control}
        name='payment'
        rules={{ required: paymentMethodError }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          const handleChange = (_: unknown, payload?: { value: string }) => {
            if (payload) {
              onChange(payload.value);
            }
          };
          return (
            <RadioGroup
              label='Способ оплаты'
              onChange={handleChange}
              value={value}
              error={error?.message}

              dataTestId='payment-radio'
            >
              {
                paymentMethods.map(({ label, radioName }) => (
                  <Radio
                    key={radioName}
                    label={label}
                    value={radioName}
                    dataTestId={`radio-${radioName}`}
                  />
                ))
              }
            </RadioGroup>
          )
        }}
      />

      <Button
        type='submit'
        block
        className={styles.button}
        disabled={!isPrivacyChecked}

        dataTestId='submit'
      >Дальше</Button>
    </form>
  );
};
