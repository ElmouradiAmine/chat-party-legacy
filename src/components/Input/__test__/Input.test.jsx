import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Input from '../Input';

beforeEach(cleanup);
describe('Input component', () => {
  const {
    className, type, placeholder, onChange, value, max, maxLength,
  } = {
    className: 'className',
    type: 'text',
    placeholder: 'placeholder',
    value: 'value',
    max: '12',
    maxLength: '12',
    onChange: jest.fn(),
  };

  test('renders correctly', () => {
    render(<Input />);
  });

  test('renders correctly with props', () => {
    const { container } = render(
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        max={max}
        maxLength={maxLength}
      />,
    );
    expect(container).not.toBeNull();
    expect(container.firstElementChild?.classList).toContain(className);
    expect(container.firstElementChild.getAttribute('type')).toEqual(type);
    expect(container.firstElementChild.getAttribute('placeholder')).toEqual(
      placeholder,
    );
    expect(container.firstElementChild.value).toEqual(value);
  });

  test('should call onChange', () => {
    const { getByPlaceholderText } = render(
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        max={max}
        maxLength={maxLength}
      />,
    );
    const input = getByPlaceholderText(placeholder);
    expect(input).toHaveValue('');
    userEvent.type(input, 'test');

    expect(input).toHaveValue('test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        max={max}
        maxLength={maxLength}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
