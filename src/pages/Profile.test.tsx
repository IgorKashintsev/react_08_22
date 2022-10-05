import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store";
import { Profile } from "./Profile";

describe ('Profile', () => {
  it('render', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
  });

  it('input change with fireEvent', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    const input = screen.getByTestId<HTMLInputElement>('input');
    
    fireEvent.change(input, {target: {value: 'new user'}});
    expect(input.value).toBe('new user');
  });

  // it('button click with userEvent', async () => {
  //   const changeName = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <Profile />
  //     </Provider>
  //   );

  //   const button = screen.getByTestId<HTMLInputElement>('button');
  //   await userEvent.click(button);

  //   await waitFor(() => expect(changeName).toHaveBeenCalledTimes(1));
  // });
});