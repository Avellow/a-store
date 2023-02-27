import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
import { deliveryTypeError, emailError, mustBeFilled, paymentMethodError, phoneNumberError, symbolLengthError } from '../../vendor/errorMessages';
import { deliveryTypes, emailRegex, paymentMethods, privacyPolicyAgreement } from '../../vendor/constants';
import { DeliveryEnum } from '../../page-components/Order/delivery.reducer';

type InputsField = {
  name: string,
  email: string,
  phoneNumber: string,
  address: string,
  delivery: string,
  promo: string,
  comment: string,
  paymentMethod: string,
};

const makeInputProps = (label: string, placeholder?: string): InputProps => ({
  label,
  placeholder,
  fieldClassName: styles.field,
  labelClassName: styles.label,
  clear: true,
  size: 'l',
  block: true
});

export const Form = ({ className, onDeliveryChange }: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, errors },
    getFieldState
  } = useForm<InputsField>({
    mode: 'onChange'
  });

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const handleChangePrivacyChecked = () => setIsPrivacyChecked(!isPrivacyChecked);

  const onSubmit: SubmitHandler<InputsField> = (data) => {
    console.log(errors)
    console.log(data)
  }

  const isFieldCorrect = (fieldName: keyof InputsField): boolean => {
    return getFieldState(fieldName).isDirty && !getFieldState(fieldName).error
  }

  return (
    <form className={cn(className, styles.form)} onSubmit={handleSubmit(onSubmit)}>

      <Input
        {...makeInputProps('ФИО', 'Фамилия Имя Отчество')}
        {...register('name', { required: true, maxLength: 100 })}

        error={errors.name?.type === 'maxLength' && symbolLengthError('max', 100)}
        success={isFieldCorrect('name')}
      />

      <Input
        {...makeInputProps('e-mail', 'example@site.ru')}
        {...register('email', {
          required: true,
          pattern: { message: emailError, value: emailRegex }
        })}

        error={errors.email?.type === 'pattern' && emailError}
        success={isFieldCorrect('email')}
      />

      <PhoneInput
        {...makeInputProps('Номер телефона', '+7 000 000-00-00')}
        {...register('phoneNumber', { required: mustBeFilled, minLength: 16 })}

        error={errors.phoneNumber?.type === 'minLength' && phoneNumberError}
        success={isFieldCorrect('phoneNumber')}
      />

      <Input
        {...makeInputProps('Адрес (если выбран самовывоз — оставьте поле пустым)', 'Индекс, город, улица, дом, квартира')}
        {...register('address')}

        success={isFieldCorrect('address')}
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
            >
              {
                deliveryTypes.map(({ label, radioName }) => (
                  <Radio key={radioName} label={label} value={radioName} />
                ))
              }
            </RadioGroup>
          )
        }}
      />

      <Input
        {...makeInputProps('Промокод')}
        {...register('promo')}
      />

      <Checkbox
        label={privacyPolicyAgreement}
        checked={isPrivacyChecked}
        onChange={handleChangePrivacyChecked}
        className={styles.privacy}
      />

      <Textarea
        fieldClassName={styles.field}
        label='Комментарий к заказу'
        size='l'
        block
        resize={'vertical'}
        {...register('comment')}
      />

      <Typography.Text view='primary-small' className={styles.paymentHint}>
        Выберите способ оплаты «Промокод», если ваш заказ не превышает
        сумму промокода. Если больше — выберите оплату картой.
      </Typography.Text>

      <Controller
        control={control}
        name='paymentMethod'
        rules={{ required: paymentMethodError }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          const handleChange = (_: unknown, payload?: { value: string }) => {
            if (payload) {
              onChange(payload.value);
            }
          };
          return (
            <RadioGroup label='Способ оплаты' onChange={handleChange} value={value} error={error?.message}>
              {
                paymentMethods.map(({ label, radioName }) => (
                  <Radio key={radioName} label={label} value={radioName} />
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
      >Дальше</Button>
    </form>
  );
};
