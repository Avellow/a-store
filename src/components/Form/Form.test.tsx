import { configure, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form } from './Form';
import * as reduxHooks from '../../store';

configure({ testIdAttribute: 'data-test-id' });

const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');

describe('form component', () => {

  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockReturnValue([]);
  })

  it('should be rendered', () => {
    expect(render(<Form />)).toMatchSnapshot();
  });

  it('should render form with fields', () => {
    render(<Form />);

    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('phone-input')).toBeInTheDocument();
    expect(screen.getByTestId('address-input')).toBeInTheDocument();
    expect(screen.getByTestId('delivery-radio')).toBeInTheDocument();
    expect(screen.getByTestId('promo-input')).toBeInTheDocument();
    expect(screen.getByTestId('comment-input')).toBeInTheDocument();
    expect(screen.getByTestId('payment-radio')).toBeInTheDocument();
    expect(screen.getByTestId('submit')).toBeInTheDocument();
  });

  it('should allow symbols to be inputted', async () => {
    render(<Form />);
    const nameInput = await screen.findByTestId('name-input');
    const addressInput = await screen.findByTestId('address-input');
    const commentInput = await screen.findByTestId('comment-input');

    expect(nameInput).toHaveValue('');
    expect(addressInput).toHaveValue('');
    expect(commentInput).toHaveValue('');

    fireEvent.input(nameInput, { target: { value: 'Ivanov Ivan Ivanovich' } });
    fireEvent.input(addressInput, { target: { value: 'Moscow, Kokinaki 4/3' } });
    fireEvent.input(commentInput, { target: { value: 'after 19:00' } });

    expect(await screen.findByTestId('name-input')).toHaveValue('Ivanov Ivan Ivanovich');
    expect(await screen.findByTestId('address-input')).toHaveValue('Moscow, Kokinaki 4/3');
    expect(await screen.findByTestId('comment-input')).toHaveValue('after 19:00');
  });

  it('should allow only numbers to be inputted', async () => {
    render(<Form />);

    const phoneInput = await screen.findByTestId('phone-input');

    expect(phoneInput).toHaveValue('');

    fireEvent.input(phoneInput, { target: { value: 'ooohhfhdsakgfdhsh' } });
    fireEvent.input(phoneInput, { target: { value: 'h000t000p00l00u' } });

    expect(await screen.findByTestId('phone-input')).toHaveValue('+7 000 000-00-00');
  });

  it('should enable submit when privacy policy checked', async () => {
    render(<Form />);

    const privacyCheckbox = await screen.findByTestId('privacy-check');
    const submit = await screen.findByTestId('submit');

    expect(submit).toBeDisabled();

    fireEvent.click(privacyCheckbox);
    expect(await screen.findByTestId('submit')).toBeEnabled();
  });

  it('should show alerts if any inputs were not filled', async () => {
    render(<Form />);

    fireEvent.submit(await screen.findByTestId('submit'));
    expect(await screen.findAllByRole('alert')).toHaveLength(5);
  });
});
