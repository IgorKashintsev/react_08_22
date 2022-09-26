// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom"
// import userEvent from "@testing-library/user-event";
// import { Form } from "./Form";

// describe('Form', () => {
//   let addMessage: jest.Mock<any, any>;
//   beforeEach(() => {
//     addMessage = jest.fn();
//     const props = {
//       newMessage: {
//         author: 'User',
//         text: 'Some text',
//       }
//     };

//     render(
//         <Form messageList={[]} addMessage={addMessage} {...props} />
//     );
//   });

//   it('input change with fireEvent', () => {
//     const input = screen.getByTestId<HTMLInputElement>('input');

//     fireEvent.change(input, {target: {value: 'new value'}});
//     expect(input.value).toBe('new value');
//   });

//   it('input change with fireEvent', async () => {
//     const input = screen.getByTestId<HTMLInputElement>('input');
//     const textarea = screen.getByTestId<HTMLInputElement>('textarea');

//     await userEvent.type(input, 'Igor');
//     await userEvent.type(textarea, 'Hello World');
//     expect(input.value).toBe('Igor');
//     expect(textarea.value).toBe('Hello World');
//   });

//   it('button click with fireEvent', () => {
//     const input = screen.getByTestId<HTMLInputElement>('input');
//     fireEvent.change(input, {target: {value: 'new value'}});
//     expect(input.value).toBe('new value');

//     const myForm = screen.getByRole('form');
//     fireEvent.submit(myForm);
//     expect(addMessage).toHaveBeenCalledTimes(1);
//   });
// });