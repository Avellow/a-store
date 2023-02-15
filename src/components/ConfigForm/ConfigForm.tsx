import { Button } from '@alfalab/core-components/button';
import { BaseSelectChangePayload, OptionShape, Select, Option, OptionProps } from '@alfalab/core-components/select';
import { useEffect, useState } from 'react';
import { ConfigFormProps, SelectOptions } from './ConfigForm.props';
import styles from './ConfigForm.module.css';
import { translateColorRu } from '../../vendor/constants';
import cn from 'classnames';

type IOptions = {
  [P in keyof SelectOptions]: OptionShape[]
}

type SelectedOptions = {
  [P in keyof SelectOptions]: OptionShape
}

type ValueRendererProps = {
  selected?: OptionShape;
  selectedMultiple: OptionShape[];
};

export const ConfigForm = ({ productOptions, className }: ConfigFormProps): JSX.Element => {

  const [options, setOptions] = useState<IOptions>({});
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

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
      setSelectedOptions(prevState => ({ ...prevState, [name]: selected }))
    }
  }

  // три функции для перевода названия цвета в Select'е
  const RuColorOption = (props: OptionProps): JSX.Element => (
    <Option {...props}>
      {translateColorRu(props.option.content as string)}
    </Option>
  );

  const SelectedOption = ({ content }: OptionShape) => (
    <span>
      {translateColorRu(content as string)}
    </span>
  )

  const valueRenderer = ({ selected }: ValueRendererProps) =>
    selected ? <SelectedOption {...selected} /> : null

  return (
    <form className={cn(className, styles.configForm)} data-test-id='product-config-form'>
      {
        options.colors && (
          <Select
            className={styles.select}
            onChange={handleOptionChange}
            selected={selectedOptions.colors?.key}
            name='colors'
            label='цвет'
            placeholder='Выберете цвет'
            options={options.colors}
            Option={RuColorOption}
            valueRenderer={valueRenderer}
            dataTestId='color-select'
          />
        )
      }
      {
        options.sizes && (
          <Select
            className={styles.select}
            label='размер'
            onChange={handleOptionChange}
            selected={selectedOptions.sizes?.key}
            name='sizes'
            placeholder='Выберете размер'
            options={options.sizes}
            dataTestId='size-select'
          />
        )
      }
      {
        options.models && (
          <Select
            className={styles.select}
            label='модель'
            selected={selectedOptions.models?.key}
            onChange={handleOptionChange}
            name='models'
            placeholder='Выберете модель'
            options={options.models}
            dataTestId='model-select'
          />
        )
      }
      {
        options.stickerNumbers && (
          <Select
            className={styles.select}
            name='stickerNumbers'
            onChange={handleOptionChange}
            selected={selectedOptions.stickerNumbers?.key}
            label='стикер'
            placeholder='Номер стикера'
            options={options.stickerNumbers}
            dataTestId='sticker-select'
          />
        )
      }
      <Button view='primary' data-test-id='confirm'>
        В корзину
      </Button>
    </form>
  )
}