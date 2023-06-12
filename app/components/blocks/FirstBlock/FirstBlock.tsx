"use client";
import React, { FC, ReactElement } from "react";
import MyButton from "../../elements/basic/MyButton/MyButton";
import { IFirstBlockProps } from "./FirstBlock.props";
import FirstBlockLogic from "./FirstBlock.logic";

const FirstBlock: FC<IFirstBlockProps> = ({
  label,
  dataTestId,
  button1Label,
  button1OnClick,
  button2Label,
  button2OnClick,
}: IFirstBlockProps): ReactElement => {
  const { count, countIncrease, countSubtract } = FirstBlockLogic({});

  return (
    <span data-test-id={dataTestId}>
      <h3>{label}</h3>
      <h3>{count}</h3>
      <MyButton
        dataTestId={"FirtBlocPropButton1"}
        onClick={!button1OnClick ? countIncrease : button1OnClick}
        label={button1Label}
      />
      <MyButton
        dataTestId={"FirtBlocPropButton2"}
        onClick={!button2OnClick ? countSubtract : button2OnClick}
        label={button2Label}
      />
    </span>
  );
};

export default FirstBlock;
