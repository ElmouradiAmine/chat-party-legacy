import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header from '../Header';

afterEach(cleanup);
describe('Header layout', () => {
  const className = 'className';

  test('renders correctly', () => {
    render(<Header />);
  });

  test('renders correctly with props', () => {
    const { container } = render(<Header className={className} />);
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('contains logo', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('logo');
    expect(logo).not.toBeNull();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Header className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
