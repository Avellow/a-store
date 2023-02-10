import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouterAndProvider } from "../../tests/helpers/renderWithRouterAndProvider";

describe('Home component', () => {
    it('Home renders', () => {
        renderWithRouterAndProvider();
    });

    it('Home snapshot', () => {
        const home = renderWithRouterAndProvider();
        expect(home).toMatchSnapshot();
    });

    it('test made-in-alfa block link', async () => {
        renderWithRouterAndProvider();
        const madeInAlfaBlock = screen.getByTestId('made-in-alfa-block-link');
        userEvent.click(madeInAlfaBlock);
        expect(screen.getByTestId('made-in-alfa-page')).toBeInTheDocument();
    });

    it('test your-design block link', async () => {
        renderWithRouterAndProvider();
        const yourDesignBlock = screen.getByTestId('your-design-block-link');
        userEvent.click(yourDesignBlock);
        expect(screen.getByTestId('your-design-page')).toBeInTheDocument();
    });
});
