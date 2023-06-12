import { IBaseElementProps } from "../../elements/base/baseElementProps";

export interface IFirstBlockProps extends IBaseElementProps {
  /**
   * Component label
   */
  label: string;
  /**
   * Button 1 label
   */
  button1Label: string;
  /**
   * Button 1 Optional click handler
   */
  button1OnClick?: () => void;
  /**
   * Button 2 label
   */
  button2Label: string;
  /**
   * Button 2 Optional click handler
   */
  button2OnClick?: () => void;
}
