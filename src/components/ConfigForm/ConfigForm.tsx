import { Button } from '@alfalab/core-components/button';
import { BaseSelectChangePayload, OptionShape, Select, Option, OptionProps } from '@alfalab/core-components/select';
import { SyntheticEvent, useEffect, useState } from 'react';
import { ConfigFormProps, ProductConfigOptionsType } from './ConfigForm.props';
import styles from './ConfigForm.module.css';
import { singularize } from '../../vendor/constants';
import { translateToRu } from '../../vendor/engToRuDictionary';
import cn from 'classnames';
import { CartItemOptionsType } from '../../types/api';

type OptionPropsNameType = keyof ProductConfigOptionsType;

type SelectOptionsType = {
  [P in OptionPropsNameType]?: OptionShape[]
}

export type SelectedOptionsType = {
  [P in OptionPropsNameType]?: OptionShape
};

type ValueRendererProps = {
  selected?: OptionShape;
  selectedMultiple: OptionShape[];
};

export const ConfigForm = ({ productOptions, onConfirm, className }: ConfigFormProps): JSX.Element => {

  const [options, setOptions] = useState<SelectOptionsType>({});
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({});

  useEffect(() => {
    Object
      .entries(productOptions)
      .forEach(([prop, values]) => {
        if (values?.length) {
          const options = values.map((value, i) => ({ key: `${i}`, content: `${value}` }));
          setOptions(prevValue => ({ ...prevValue, [prop]: options }));
          setSelectedOptions(prevValue => ({ ...prevValue, [prop]: options[0] }));
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionChange = ({ name, selected }: BaseSelectChangePayload) => {
    if (name) {
      setSelectedOptions(prevState => ({ ...prevState, [name]: selected }));
    }
  }

  // три функции для перевода названий опций
  const translateToRuOption = (props: OptionProps): JSX.Element => (
    <Option {...props}>
      {translateToRu(props.option.content as string)}
    </Option>
  );

  const SelectedOption = ({ content }: OptionShape) => (
    <span>
      {translateToRu(content as string)}
    </span>
  )

  const valueRenderer = ({ selected }: ValueRendererProps) =>
    selected ? <SelectedOption {...selected} /> : null

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formatedOptions: CartItemOptionsType = {};

    for (let prop in selectedOptions) {
      const singlePropForm = singularize(prop);
      const value = selectedOptions[prop as keyof SelectedOptionsType];
      formatedOptions[singlePropForm] = value?.content as string | number;
    }

    onConfirm && onConfirm(formatedOptions);
  };

  const buildSelects = () => {
    return (
      <>
        {
          Object.entries(options).map(([prop, value], i) => {
            const singleFormProp = singularize(prop);
            const ruProp = translateToRu(singleFormProp)

            return (
              <Select
                key={i}
                className={styles.select}
                onChange={handleOptionChange}
                selected={selectedOptions[prop as OptionPropsNameType]?.key}
                name={prop}
                label={ruProp}
                placeholder={`Выберете ${ruProp}`}
                options={value}
                Option={translateToRuOption}
                valueRenderer={valueRenderer}
                dataTestId={`${singleFormProp}-select`}
              />
            )
          })
        }
      </>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(className, styles.configForm)}
      data-test-id='product-config-form'
    >
      {buildSelects()}
      <Button view='primary' type='submit' className={styles.submit} data-test-id='confirm'>
        В корзину
      </Button>
    </form>
  );
};
