// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { MessageList } from "./MessageList";

// describe('Message', () => {
//   it('render component', () => {

//     render(
//       <MessageList messageList={[]} />
//     );
//   });

//   it('messages list is empty', () => {
//     render(
//       <MessageList messageList={[]} />
//     );

//     expect(screen.queryAllByRole('li').length).toBe(0)
//   });

//   it('messages list length is 2', () => {
//     const messageList = [
//       {author: 'User', text: 'Some text 1'},
//       {author: 'User', text: 'Some text 2'},
//     ]
//     render(
//       <MessageList messageList={messageList} />
//     );
    
//     expect(screen.getAllByTestId('li').length).toBe(2);
//     expect(screen.getAllByTestId('li')[0].innerHTML).toBe('User: Some text 1');
//   });
// });