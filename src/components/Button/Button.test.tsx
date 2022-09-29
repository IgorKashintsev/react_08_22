// import { Button } from "./Button";
// import { render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

// describe('Button', () => {
//   it('render component', () => {
//     render(<Button>test</Button>);
//     screen.debug();
//   });

//   // it('render with snapshot', () => {
//   //   const {asFragment} = render(<Button label="test"/>)

//   //   expect(asFragment()).toMatchSnapshot()
//   // });

//   it('render component with test', () => {
//     render(<Button>test</Button>);

//     expect(screen.getByText(/test/)).toBeInTheDocument();
//   });

//   it('render multiply components', () => {
//     render(
//       <>
//         <Button>test1</Button>
//         <Button>test2</Button>
//       </>
//     );
//     screen.debug();

//     expect(screen.getAllByRole('button').length).toBe(2);
//   });

//   it('button is disabled', () => {
//     render(<Button disabled>test</Button>);

//     expect(screen.getByText(/test/)).toBeDisabled();
//   });

//   // it('button have style color red', () => {
//   //   render(<Button label="test" />);

//   //   expect(screen.getByText(/test/)).toHaveStyle({
//   //     color: 'red',
//   //   });
//   // });

//   it('button click with userEvent', async () => {
//     const mockHandler = jest.fn();
//     render(<Button click={mockHandler}>test</Button>);

//     await userEvent.click(screen.getByText(/test/));

//     expect(mockHandler).toHaveBeenCalledTimes(1);
//   });

//   it('button click with userEvent', async () => {
//     const mockHandler = jest.fn();
//     render(<Button click={() => setTimeout(mockHandler, 900)}>test</Button>);

//     await userEvent.click(screen.getByText(/test/));

//     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1));
//   });

//   it('button click with userEvent', async () => {
//     const mockHandler = jest.fn();
//     render(<Button click={() => setTimeout(mockHandler, 1500)}>test</Button>);

//     await userEvent.click(screen.getByText(/test/));

//     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
//       timeout: 1600,
//     });
//   });

//   it('test example', async () => {
//     const onChange = jest.fn();
//     render(<input type="checkbox" onChange={onChange}/>);

//     const checkbox = screen.getByRole('checkbox');

//     await userEvent.dblClick(checkbox);
//     expect(onChange).toHaveBeenCalledTimes(2);
//     expect(checkbox).not.toBeChecked();
//   });
// });