import React, { FC, ReactElement } from "react";
import MyButton from "../../elements/basic/MyButton/MyButton";
import { IFirstBlockProps } from "./FirstBlock.props";
import FirstBlockLogic from "./FirstBlock.logic";

const FirstBlock: FC<IFirstBlockProps> = ({
  label,
  dataTestId,
  button1Label,
  button2Label,
}: IFirstBlockProps): ReactElement => {
  const { button1OnClick, button2OnClick } = FirstBlockLogic({
    button1Label,
    button2Label,
  });
  return (
    <span data-test-id={dataTestId}>
      <h3>{label}</h3>
      <MyButton
        dataTestId={"FirtBlocPropButton1"}
        onClick={button1OnClick}
        label={button1Label}
      />
      <MyButton
        dataTestId={"FirtBlocPropButton2"}
        onClick={button2OnClick}
        label={button2Label}
      />
    </span>
  );
};

export default FirstBlock;
