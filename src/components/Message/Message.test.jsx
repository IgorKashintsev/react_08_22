import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {Message} from "./Message";

describe('Message', () => {
  it('render component', () => {

    render(
        <Message messageList={[]} />
    );
  });
});