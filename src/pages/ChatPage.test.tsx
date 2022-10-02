import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatPage } from "./ChatPage";

describe('ChatPage', () => {

  it('render ChatPage', () => {
    const onAddChat = jest.fn();
    const onAddMessage = jest.fn();
    const onDeleteChat = jest.fn();

    render(<ChatPage chats={[]}
      onAddChat={onAddChat}
      onAddMessage={onAddMessage}
      messageList={{}}
      onDeleteChat={onDeleteChat}/>
    );
  });

  it('bot answer', () => {
    const onAddChat = jest.fn();
    const onAddMessage = jest.fn();
    const onDeleteChat = jest.fn();

    const messageList = {
      '1': [{author: 'User', text: 'Hello World'}],
    };

    render(<ChatPage chats={[]}
      onAddChat={onAddChat}
      onAddMessage={onAddMessage}
      messageList={messageList}
      onDeleteChat={onDeleteChat}/>
    );

    waitFor(() => expect(screen.getByText(/Hello User, how can I help you?/)
    ).toBeInTheDocument(), {timeout: 1600});
  });
});