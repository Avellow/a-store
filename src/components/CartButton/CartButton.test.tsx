import { render, screen, configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CartButton } from './CartButton';

configure({ testIdAttribute: 'data-test-id' });

describe('Cart button component view', () => {

  it('should be rendered', () => {
    expect(render(<CartButton goodsQuantity={11} />)).toMatchSnapshot();
  });

  it('should show cart-size correctly', () => {
    render(<CartButton goodsQuantity={11} />);
    expect(screen.getByTestId('cart-size')).toHaveTextContent('11')
  });

  it('should show `99+` if cart-size more than 99', () => {
    render(<CartButton goodsQuantity={1000} />);
    expect(screen.getByTestId('cart-size')).toHaveTextContent('99+');
  });
});
