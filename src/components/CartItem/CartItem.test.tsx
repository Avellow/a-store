import { configure, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import * as reduxHooks from '../../store';
import { cartActions } from '../../store/cart';
import { cartTestingItem1, cartTestingItem2 } from '../../tests/helpers/cartItems';
import { CartItem } from './CartItem';
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider';
import { CartItemType } from '../../types/api';

configure({ testIdAttribute: 'data-test-id' });

const renderComponent = (item: CartItemType) =>
  renderWithRouterAndProvider(<CartItem item={item} />);

describe('Cart-item component view', () => {

  it('should be rendered', () => {
    renderComponent(cartTestingItem1);
    expect(renderComponent(cartTestingItem2)).toMatchSnapshot();
  });

  it('should render product-description correctly', () => {
    renderComponent(cartTestingItem1);
    expect(screen.getByTestId('img')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('color-option')).toBeInTheDocument();
    expect(screen.getByTestId('size-option')).toBeInTheDocument();
    expect(screen.getByTestId('stickerNumber-option')).toBeInTheDocument();
    expect(screen.queryByTestId('model-option')).not.toBeInTheDocument();
    expect(screen.getByTestId('quantity')).toBeInTheDocument();
    expect(screen.getByTestId('quantity')).toHaveTextContent(`${cartTestingItem1.quantity}`);
    expect(screen.getByTestId('total-price')).toHaveTextContent('3 598');
  });
});

describe('Cart-item actions', () => {

  const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(jest.fn());
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should dispatch increase action', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);

    const mockedIncreaseQuantity = jest.spyOn(cartActions, 'addItem');

    renderComponent(cartTestingItem1);

    const increaseButton = screen.getByTestId('increase-quantity');

    fireEvent.click(increaseButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedIncreaseQuantity).toHaveBeenCalled();
  });

  it('should dispatch decrease action', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);

    const mockedDecreaseQuantity = jest.spyOn(cartActions, 'decreaseQuantity');

    renderComponent(cartTestingItem2);

    const decreaseButton = screen.getByTestId('decrease-quantity');

    fireEvent.click(decreaseButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedDecreaseQuantity).toHaveBeenCalled();
  });

  it('should dispatch remove action', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);

    const mockedRemoveItem = jest.spyOn(cartActions, 'removeItem');

    renderComponent(cartTestingItem2);

    const removeButton = screen.getByTestId('remove-item');

    fireEvent.click(removeButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedRemoveItem).toHaveBeenCalled();
  });
});
