import { IFirstBlockLogicModel } from "./FirstBlock.logic.model";

const FirstBlockLogic = ({
  button1Label,
  button2Label,
}: IFirstBlockLogicModel) => {
  const button1OnClick = () => {
    alert(button1Label && button1Label.length > 0 ? button1Label : "");
  };
  const button2OnClick = () => {
    alert(button2Label && button2Label.length > 0 ? button1Label : "");
  };
  return {
    button1OnClick,
    button2OnClick,
  };
};

export default FirstBlockLogic;
