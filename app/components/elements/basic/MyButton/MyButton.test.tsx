import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyButton from "./MyButton";

describe("MyButton", () => {
  it("renders correctly with label", () => {
    const label = "Click me";
    const dataTestId = "TestButtonArea";
    const { getByText } = render(
      <MyButton label={label} dataTestId={dataTestId} />
    );
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("triggers onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const label = "Click me";
    const dataTestId = "TestButtonArea";
    const { getByText } = render(
      <MyButton label={label} dataTestId={dataTestId} onClick={onClickMock} />
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
