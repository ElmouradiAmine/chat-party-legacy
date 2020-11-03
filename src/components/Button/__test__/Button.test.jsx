import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

afterEach(cleanup);
describe('Button component', () => {
  const {
    className, label, onClick, color, disabled,
  } = {
    className: 'className',
    label: 'button',
    onClick: jest.fn(),
    color: 'red',
    disabled: false,
  };

  test('renders correctly', () => {
    render(<Button />);
  });

  test('renders correctly with props', () => {
    const { container, getByText } = render(
      <Button
        label={label}
        className={className}
        color={color}
        onClick={onClick}
        disabled={disabled}
      />,
    );
    expect(getByText(label)).toBeTruthy();
    expect(container.firstChild.classList).toContain(className);
    expect(container.firstChild.classList).toContain(`button--${color}`);
  });

  test('should get clicked', () => {
    const { container } = render(<Button onClick={onClick} />);
    userEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Button
          label={label}
          className={className}
          color={color}
          onClick={onClick}
          disabled={disabled}
        />,
      );

    expect(tree).toMatchSnapshot();
  });
});
