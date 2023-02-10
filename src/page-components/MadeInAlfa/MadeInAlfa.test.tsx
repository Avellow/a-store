import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'
import { screen } from '@testing-library/react';
import { madeInAlfaTestProducts } from '../../tests/helpers/products';
import * as reduxHooks from '../../store';
import { cardsActions } from '../../store/cards/slice';
import '@testing-library/jest-dom/extend-expect';

const pagePath = '/made-in-alfa';
const render = () => renderWithRouterAndProvider(null, pagePath);
jest.mock('../../store');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

describe('Made in Alfa component', () => {

    it('should render product cards', () => {
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
    });

    it('should render 3 testing product cards', () => {
        mockedUseSelector.mockReturnValue(madeInAlfaTestProducts);
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.getAllByTestId('made-in-alfa-product')).toHaveLength(3);
    });

    it('should have title', () => {
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.getByText('Сделано в Альфе')).toBeInTheDocument();
    });

    it('should dispatch action', () => {
        const dispatch = jest.fn();
        mockedUseDispatch.mockReturnValue(dispatch);
        const mockedCardsRequest = jest.spyOn(cardsActions, 'request');

        render();

        expect(dispatch).toHaveBeenCalled();
        expect(mockedCardsRequest).toHaveBeenCalled();
    });

    it('should show message if there are no products', () => {
        mockedUseSelector.mockReturnValue([]);
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.queryByTestId('made-in-alfa-product')).toBeNull();
        expect(screen.getByText('Товар не найден')).toBeInTheDocument();
    });
});
