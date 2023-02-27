import { configure, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Order } from './Order';
import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider';

configure({ testIdAttribute: 'data-test-id' });

describe('Order component view', () => {

  const render = () => renderWithRouterAndProvider(<Order />);

  it('should be rendered', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render form, items, total price', () => {
    render();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('items')).toBeInTheDocument();
    expect(screen.getByTestId('total')).toBeInTheDocument();
  });
});
