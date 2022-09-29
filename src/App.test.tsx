// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import { App } from "./App";
// import { MemoryRouter } from "react-router-dom";


// describe('App', () => {
//   it('render component', () => {

//     render(<App />);
//   });

//   it('wrong url', () => {
//     render(
//       <MemoryRouter initialEntries={['/wrong-url']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText(/404 page/)).toBeInTheDocument();
//   });
//   it('sent user message', () => {
//     render(<App messageList={[]} />);

//     const input = screen.getByTestId<HTMLInputElement>('input');
//     const textarea = screen.getByTestId<HTMLInputElement>('textarea');
//     fireEvent.change(input, {target: {value: 'new user'}});
//     fireEvent.change(textarea, {target: {value: 'new message'}});

//     const myForm = screen.getByRole('form');
//     fireEvent.submit(myForm);

//     expect(screen.getAllByTestId('li').length).toBe(1);
//   });

//   it('bot answer', () => {
//     render(<App messageList={[]} />);

//     const input = screen.getByTestId<HTMLInputElement>('input');
//     const textarea = screen.getByTestId<HTMLInputElement>('textarea');
//     fireEvent.change(input, {target: {value: 'new user'}});
//     fireEvent.change(textarea, {target: {value: 'new message'}});

//     const myForm = screen.getByRole('form');
//     fireEvent.submit(myForm);

//     waitFor(() => expect(screen.getByText(/Hello new user, how can I help you?/)
//     ).toBeInTheDocument(), {timeout: 1600});
//   });
// });