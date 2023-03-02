import { screen } from '@testing-library/react';
import { YourDesign } from './YourDesign';
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'
import '@testing-library/jest-dom/extend-expect';

import * as reduxHooks from '../../store';
import { testingGroups } from '../../tests/helpers/groups';

describe('Your-Design component', () => {

  const renderComponent = () => renderWithRouterAndProvider(<YourDesign />);

  const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');
  const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockReturnValue({ isLoading: false, groups: [] });
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
    mockedUseSelector.mockReturnValue({ isLoading: true, groups: [] });
    renderComponent();
    expect(screen.getAllByTestId('card-skeleton')).not.toHaveLength(0);
  });

  it('should show groups with products after fetching succeeded', () => {
    mockedUseSelector.mockReturnValue({ isLoading: false, groups: testingGroups });
    renderComponent();
    expect(screen.getAllByTestId('your-design-group')).not.toHaveLength(0);
  });

  it('should show message if there are no groups found', () => {
    renderComponent();
    expect(screen.getByTestId('no-groups')).toBeInTheDocument();
  });
});


describe('Your-Design PAGE with Router', () => {
  const pagePath = '/your-design';
  const renderComponent = () => renderWithRouterAndProvider(null, pagePath);

  it('should be rendered as page with router', () => {
    renderComponent();
    expect(screen.getByTestId('your-design-page')).toBeInTheDocument();
  });

  it('should render title and subtitle', () => {
    renderComponent();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getByTestId('page-subtitle')).toBeInTheDocument();
  });
});