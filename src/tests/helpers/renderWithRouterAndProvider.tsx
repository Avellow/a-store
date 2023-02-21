import { MemoryRouter } from 'react-router-dom';
import Router from "../../routes/router";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../store';

export const renderWithRouterAndProvider = (
  component: JSX.Element | null = null,
  initialRoute: string = '/'
) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        {component ? component : <Router />}
      </MemoryRouter>
    </Provider>
  );
};
