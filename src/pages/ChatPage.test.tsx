import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatPage } from "./ChatPage";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { BrowserRouter } from "react-router-dom";

describe('ChatPage', () => {

  it('render ChatPage', () => {

    render(
    <Provider store={store}>
      <BrowserRouter>
        <ChatPage />
      </BrowserRouter>
    </Provider>
    );
  });

  it('bot answer', () => {

    waitFor(() => expect(screen.getByText(/Hello User, how can I help you?/)
    ).toBeInTheDocument(), {timeout: 1600});
  });
});