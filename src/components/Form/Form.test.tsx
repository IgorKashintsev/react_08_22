import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe('Form', () => {
  let addMessage: jest.Mock<any, any>;
  beforeEach(() => {
    addMessage = jest.fn();

    render(
        <Form addMessage={addMessage} />
    );
  });

  it('input change with fireEvent', () => {
    const input = screen.getByTestId<HTMLInputElement>('input');

    fireEvent.change(input, {target: {value: 'new value'}});
    expect(input.value).toBe('new value');
  });

  it('input change with userEvent', async () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    const textarea = screen.getByTestId<HTMLInputElement>('textarea');

    await userEvent.type(input, 'Igor');
    await userEvent.type(textarea, 'Hello World');
    expect(input.value).toBe('Igor');
    expect(textarea.value).toBe('Hello World');
  });

  it('submit with fireEvent', () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    const textarea = screen.getByTestId<HTMLInputElement>('textarea');
    fireEvent.change(input, {target: {value: 'new user'}});
    fireEvent.change(textarea, {target: {value: 'new message'}});

    const myForm = screen.getByRole('form');
    fireEvent.submit(myForm);
    
    waitFor(() => expect(addMessage).toHaveBeenCalledTimes(1));
  });
});