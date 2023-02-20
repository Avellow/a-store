import { render, screen, configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ConfigForm } from './ConfigForm';
import { ConfigFormProps, ProductConfigOptionsType } from './ConfigForm.props';

configure({ testIdAttribute: 'data-test-id' });

const selectableOptions: ProductConfigOptionsType = {
  'colors': ['white', 'black'],
  'sizes': ['M', 'S', 'XXL'],
  'models': undefined,
  'stickerNumbers': [1, 3]
}

const Config = (props: ConfigFormProps): JSX.Element => {
  return (
    <ConfigForm {...props} />
  )
};

describe('Config Form', () => {
  it('should be rendered correctly', () => {
    expect(render(<Config productOptions={selectableOptions} />)).toMatchSnapshot();
  });

  it('should render selects correctly', () => {
    render(<Config productOptions={selectableOptions} />);

    expect(screen.getByTestId('color-select')).toBeInTheDocument();
    expect(screen.getByTestId('size-select')).toBeInTheDocument();
    expect(screen.getByTestId('sticker-select')).toBeInTheDocument();

    expect(screen.queryByTestId('model-select')).not.toBeInTheDocument();
  });

  it('should render button', () => {
    render(<Config productOptions={selectableOptions} />);

    expect(screen.getByTestId('confirm')).toBeInTheDocument();
  });

  it('should render button even if there are no selects', () => {
    render(<Config productOptions={{}} />);

    expect(screen.getByTestId('confirm')).toBeInTheDocument();
  });

  it('should insert the className if it was passed', () => {
    const addClassName = 'additional-class';
    render(<Config productOptions={{}} className={addClassName} />);

    expect(screen.getByTestId('product-config-form')).toHaveClass(addClassName);
  })
});