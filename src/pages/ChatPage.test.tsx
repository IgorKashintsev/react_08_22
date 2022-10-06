// import { render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { ChatPage } from "./ChatPage";
// import { Provider } from "react-redux";
// import { store } from "../../src/store";

// describe('ChatPage', () => {

//   it('render ChatPage', () => {

//     render(
//     <Provider store={store}>
//       <ChatPage />
//     </Provider>
//     );
//   });

//   it('bot answer', () => {

//     // const messageList = {
//     //   '1': [{author: 'User', text: 'Hello World'}],
//     // };

//     render(
//       <Provider store={store}>
//         <ChatPage />
//       </Provider>
//       );

//     waitFor(() => expect(screen.getByText(/Hello User, how can I help you?/)
//     ).toBeInTheDocument(), {timeout: 1600});
//   });
// });