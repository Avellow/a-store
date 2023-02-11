import { renderWithRouterAndProvider } from '../../tests/helpers/renderWithRouterAndProvider'
import { screen } from '@testing-library/react';
import { testingGroups } from '../../tests/helpers/groups';
import * as reduxHooks from '../../store';
import { groupsActions } from '../../store/products-groups/slice';
import '@testing-library/jest-dom/extend-expect';

const pagePath = '/your-design';
const render = () => renderWithRouterAndProvider(null, pagePath);
jest.mock('../../store');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

describe('Your Design component', () => {

    it('should render product groups', () => {
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
    });

    it('should render 2 testing groups', () => {
        mockedUseSelector.mockReturnValue(testingGroups);
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.getAllByTestId('your-design-group')).toHaveLength(2);
    });

    it('should have title', () => {
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.getByText('Свой дизайн')).toBeInTheDocument();
    });

    it('should dispatch action', () => {
        const dispatch = jest.fn();
        mockedUseDispatch.mockReturnValue(dispatch);
        const mockedGroupsRequest = jest.spyOn(groupsActions, 'request');

        render();

        expect(dispatch).toHaveBeenCalled();
        expect(mockedGroupsRequest).toHaveBeenCalled();
    });

    it('should show message if there are no products', () => {
        mockedUseSelector.mockReturnValue([]);
        mockedUseDispatch.mockReturnValue(jest.fn());
        render();
        expect(screen.queryByTestId('your-design-group')).toBeNull();
        expect(screen.getByText('Товар не найден')).toBeInTheDocument();
    });
});