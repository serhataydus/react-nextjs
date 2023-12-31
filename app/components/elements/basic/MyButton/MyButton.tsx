import { Button } from "antd";
import React, { FC, ReactElement } from "react";
import { IMyButtonProps } from "./MyButton.props";

const MyButton: FC<IMyButtonProps> = ({
  label,
  dataTestId,
  className,
  buttonSize,
  type,
  shapes,
  icon,
  onClick,
}: IMyButtonProps): ReactElement => {
  return (
    <Button
      className={className && className.length > 0 ? className : ""}
      onClick={onClick}
      data-test-id={dataTestId}
      size={buttonSize}
      type={type}
      shape={shapes}
      icon={icon}
    >
      {label}
    </Button>
  );
};

export default MyButton;
