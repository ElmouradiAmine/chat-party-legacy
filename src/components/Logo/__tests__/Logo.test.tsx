/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Logo, { Props } from '../Logo';

afterEach(cleanup);
describe('Logo component', () => {
  test('renders correctly', () => {
    render(<Logo />);
  });

  test('renders correctly with props', () => {
    const { className }:Props = {
      className: 'className',
    };
    const { container } = render(<Logo className={className} />);
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('matches snapshot', () => {
    const { className }:Props = {
      className: 'className',
    };
    const tree = renderer.create(<Logo className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
