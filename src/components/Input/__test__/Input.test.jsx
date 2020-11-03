import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Input from '../Input';

beforeEach(cleanup);
describe('Input component', () => {
  let value = '';
  const {
    className, type, placeholder, onChange,
  } = {
    className: 'className',
    type: 'text',
    placeholder: 'placeholder',
    onChange: jest.fn((e) => {
      value = e.target.value;
    }),
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
      />,
    );
    const input = getByPlaceholderText(placeholder);
    expect(input).toHaveValue('');
    userEvent.type(input, 'test');

    expect(input).toHaveValue('test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Input className={className} />);
    expect(tree).toMatchSnapshot();
  });
});
