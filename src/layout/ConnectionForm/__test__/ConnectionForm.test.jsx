import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ConnectionForm from '../ConnectionForm';

afterEach(cleanup);
describe('ConnectionForm component', () => {
  const className = 'className';

  test('renders correctly', () => {
    render(<ConnectionForm />);
  });

  test('renders correctly with props', () => {
    const { container } = render(<ConnectionForm className={className} />);
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
  });

  test('should control the input component value', () => {
    const { getByPlaceholderText } = render(<ConnectionForm className={className} />);
    const input = getByPlaceholderText('Username');
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });

  test('should control the gender cards component value', () => {
    const { getByTestId } = render(<ConnectionForm className={className} />);
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
    const tree = renderer.create(<ConnectionForm className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
