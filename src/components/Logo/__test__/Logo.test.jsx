import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Logo from '../Logo';

afterEach(cleanup);
describe('Logo component', () => {
  const  className = 'className';
  
  test('renders correctly', () => {
    render(<Logo />);
  });

  test('renders correctly with props', () => {
    const { container } = render(<Logo className={className} />);
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Logo className={className} />);
    expect(tree).toMatchSnapshot();
  });
});