import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../Header';

afterEach(cleanup);
describe('Header layout', () => {
  const className = 'className';
  const initialState = {
    usersCount: {
      value: 5,
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  });

  test('renders correctly with props', () => {
    const { container } = render(
      <Provider store={store}>
        <Header className={className} />
      </Provider>,
    );
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('contains logo', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header className={className} />
      </Provider>,
    );
    const logo = getByTestId('logo');
    expect(logo).not.toBeNull();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Header className={className} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
