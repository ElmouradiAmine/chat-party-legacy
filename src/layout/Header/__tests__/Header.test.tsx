import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header, { Props } from '../Header';

afterEach(cleanup);
describe('Header component', () => {
  const { className }: Props = {
    className: 'className',
  };
  test('renders correctly', () => {
    render(<Header />);
  });

  test('renders correctly with props', () => {
    const { container } = render(<Header className={className} />);
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Header className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
