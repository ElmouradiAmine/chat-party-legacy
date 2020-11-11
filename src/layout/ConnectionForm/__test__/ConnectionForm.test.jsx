import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectionForm from '../ConnectionForm';

afterEach(cleanup);
describe('ConnectionForm component', () => {
  const className = 'className';
  const mockStore = configureStore();
  const initialState = {
    user: { user: null, error: '', status: 'idle' },
  };
  const store = mockStore(initialState);

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <ConnectionForm />
      </Provider>,
    );
  });

  test('renders correctly with props', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectionForm className={className} />
      </Provider>,
    );
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('should control the input component value', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <ConnectionForm className={className} />
      </Provider>,
    );
    const input = getByPlaceholderText('Username');
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });

  test('should control the gender cards component value', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ConnectionForm className={className} />
      </Provider>,
    );
    const genderCardMale = getByTestId('card-male');
    const genderCardFemale = getByTestId('card-female');

    expect(genderCardMale.classList).not.toContain('card--selected');
    expect(genderCardFemale.classList).not.toContain('card--selected');

    userEvent.click(genderCardMale);
    expect(genderCardMale.classList).toContain('card--selected');
    expect(genderCardFemale.classList).not.toContain('card--selected');

    userEvent.click(genderCardFemale);
    expect(genderCardMale.classList).not.toContain('card--selected');
    expect(genderCardFemale.classList).toContain('card--selected');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ConnectionForm className={className} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
