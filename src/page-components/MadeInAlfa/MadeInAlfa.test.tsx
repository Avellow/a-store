import { screen } from '@testing-library/react';
import { MadeInAlfa } from './MadeInAlfa';
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'
import '@testing-library/jest-dom/extend-expect';

import * as reduxHooks from '../../store';
import { testingProducts } from '../../tests/helpers/products';

describe('Made-in-Alfa component', () => {

  const renderComponent = () => renderWithRouterAndProvider(<MadeInAlfa />);

  const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');
  const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockReturnValue({ isLoading: false, products: [] });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be rendered', () => {
    renderComponent();
  });

  it('should call dispatch once on mount', () => {
    renderComponent();
    expect(mockedUseDispatch).toHaveBeenCalledTimes(1);
  });

  it('should show skeleton while fetching data', () => {
    mockedUseSelector.mockReturnValue({ isLoading: true, products: [] });
    renderComponent();
    expect(screen.getAllByTestId('card-skeleton')).not.toHaveLength(0);
  });

  it('should show products after fetching succeeded', () => {
    mockedUseSelector.mockReturnValue({ isLoading: false, products: testingProducts });
    renderComponent();
    expect(screen.getAllByTestId('made-in-alfa-product')).not.toHaveLength(0);
  });

  it('should show message if there are no products found', () => {
    renderComponent();
    expect(screen.getByTestId('no-products')).toBeInTheDocument();
  });
});

describe('Made-in-Alfa PAGE with Router', () => {
  const pagePath = '/made-in-alfa';
  const renderComponent = () => renderWithRouterAndProvider(null, pagePath);

  it('should be rendered as page with router', () => {
    renderComponent();
    expect(screen.getByTestId('made-in-alfa-page')).toBeInTheDocument();
  });

  it('should render title and subtitle', () => {
    renderComponent();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getByTestId('page-subtitle')).toBeInTheDocument();
  });
});
