import { configure, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import * as reduxHooks from '../../store';
import { SideCart } from './SideCart';
import { cartTestingItem1, cartTestingItem2 } from '../../tests/helpers/cartItems';
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider';

configure({ testIdAttribute: 'data-test-id' });

const renderComponent = () =>
  renderWithRouterAndProvider(<SideCart open={true} />);


describe('Side-cart component', () => {

  const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');
  const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

  const selectorsTestingData = {
    cartItemsSelector: [cartTestingItem1, cartTestingItem2],
    totalAmountSelector: '15595'
  }

  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockImplementation(
      selector => selectorsTestingData[selector.name as keyof typeof selectorsTestingData]
    );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be rendered', () => {
    renderComponent();
  });

  it('should render items-list', () => {
    renderComponent();
    expect(screen.getByTestId('cart-items-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('cart-item')).toHaveLength(2);
  });

  it('should render items-list even if there are no items', () => {
    mockedUseSelector.mockReturnValue([]);
    renderComponent();
    expect(screen.getByTestId('cart-items-list')).toBeInTheDocument();
    expect(screen.queryAllByTestId('cart-item')).toHaveLength(0);
  });

  it('should show total cart-price', () => {
    renderComponent();
    expect(screen.getByTestId('total-cart-price')).toHaveTextContent('Total: 15 595');
  });
});
