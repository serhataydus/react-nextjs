import { useState } from "react";
import { IFirstBlockLogicModel } from "./FirstBlock.logic.model";

const FirstBlockLogic = ({}: IFirstBlockLogicModel) => {
  const [count, setCount] = useState<number>(0);
  const countIncrease = () => {
    setCount(count + 1);
  };
  const countSubtract = () => {
    setCount(count - 1);
  };
  return {
    count,
    countIncrease,
    countSubtract,
  };
};

export default FirstBlockLogic;
