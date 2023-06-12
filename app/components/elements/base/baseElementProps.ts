import React from "react";

export interface IBaseElementProps extends React.HTMLProps<IBaseElementProps> {
  /**
   * Id to use for testing
   */
  dataTestId: string;

  /**
   * Classes to be used
   */
  className?: string;
}
