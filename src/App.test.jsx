import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { App } from "./App";


describe('App', () => {
  it('render component', () => {

    render(<App />);
  });

  // it('sent user message', async () => {
  //   render(<App />);

  //   const input = screen.getByTestId<HTMLInputElement>('input');
  //   await userEvent.type(input, 'Hello');

  //   const button = screen.getByTestId('button');
  //   await userEvent.click(button);

  //   expect(screen.getByTestId('par').length).toBe(1);
  // });
});