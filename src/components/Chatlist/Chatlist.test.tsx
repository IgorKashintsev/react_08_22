import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { Chatlist } from "./Chatlist";
import { BrowserRouter } from "react-router-dom";

describe('Chatlist', () => {
  let onAddChat: jest.Mock<any, any>;
  let onDeleteChat: jest.Mock<any, any>;
  beforeEach(() => {
    onAddChat = jest.fn();
    onDeleteChat = jest.fn();

    render(
        <Chatlist chats={[]} onAddChat={onAddChat} onDeleteChat={onDeleteChat}/>
    );
  });

  it('Chatlist length is 2', () => {
    const defaultChats = [
      {
        id: '1',
        name: 'first',
      },
      {
        id: '2',
        name: 'second',
      }
    ];

    render(
      <BrowserRouter >
        <Chatlist 
          chats={defaultChats}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </BrowserRouter>
    );

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
    
    waitFor(() => expect(onAddChat).toHaveBeenCalledTimes(1));
  });

  it('delete button click with userEvent', async () => {
    const defaultChats = [
      {
        id: '1',
        name: 'first',
      },
    ];

    render(
      <BrowserRouter >
        <Chatlist 
          chats={defaultChats}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </BrowserRouter>
    );

    const button = screen.getByTestId<HTMLInputElement>('buttonChatDel');
    await userEvent.click(button);

    await waitFor(() => expect(onDeleteChat).toHaveBeenCalledTimes(1));
  });
});