import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FirstBlock from "./FirstBlock";

describe("FirstBlock", () => {
  it("renders correctly with label", () => {
    const label = "First Block";
    const dataTestId = "FirstBlockArea";
    const { getByText } = render(
      <FirstBlock
        label={label}
        dataTestId={dataTestId}
        button1Label={"button 1"}
        button2Label={"button 2"}
      />
    );
    const labelElement = getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
});
