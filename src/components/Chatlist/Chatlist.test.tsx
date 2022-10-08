import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { Chatlist } from "./Chatlist";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

describe('Chatlist', () => {
  let deleteChat: jest.Mock<any, any>;
  let handleSubmit: jest.Mock<any, any>;
  beforeEach(() => {
    deleteChat = jest.fn();
    handleSubmit = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Chatlist  />
        </BrowserRouter>
      </Provider>
    );
  });

  it('Chatlist length is 2', () => {
    expect(screen.getAllByTestId('li').length).toBe(2);
  });

  it('input change with fireEvent', () => {
    const input = screen.getByTestId<HTMLInputElement>('inputChat');

    fireEvent.change(input, {target: {value: 'new chat'}});
    expect(input.value).toBe('new chat');
  });

  it('submit with fireEvent', () => {
    const input = screen.getByTestId<HTMLInputElement>('inputChat');
    fireEvent.change(input, {target: {value: 'new chat'}});

    const myForm = screen.getByRole('form');
    fireEvent.submit(myForm);
    
    waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });

  // it('delete button click with userEvent', async () => {
  //   const button = screen.getAllByTestId<HTMLInputElement>('buttonChatDel');
  //   await userEvent.click(button[0]);

  //   await waitFor(() => expect(deleteChat).toHaveBeenCalledTimes(1));
  // });
});