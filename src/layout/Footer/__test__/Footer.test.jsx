import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

afterEach(cleanup);
describe('Footer layout', () => {
  const className = 'className';

  test('renders correctly', () => {
    render(<Footer />);
  });

  test('renders correctly with props', () => {
    const { container } = render(<Footer className={className} />);
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('contains copyright', () => {
    const { getByText } = render(<Footer />);
    const copyright = getByText('© 2020 Chat Party, Inc.');
    expect(copyright).not.toBeNull();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Footer className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
