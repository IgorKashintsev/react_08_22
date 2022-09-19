import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe('Form', () => {
  it('render component', () => {
    const addMessage = jest.fn();
    const props = {
      obj: {
        author: 'User',
        text: 'Some text',
      }
    };

    render(
        <Form addMessage={addMessage} {...props} />
    );
  });

  it('input change with fireEvent', () => {
    const addMessage = jest.fn();
    const setObjMes = jest.fn();

    const props = {
      obj: {
        author: 'User',
        text: 'Some text',
      }
    };

    render(
        <Form addMessage={addMessage} {...props} setObjMes={setObjMes} />
    );

    const input = screen.getByPlaceholderText('Enter your name');

    fireEvent.change(input, {target: {value: 'new value'}});

    expect(input.value).toBe('new value');
  });

});