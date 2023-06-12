import { IBaseElementProps } from "../../base/baseElementProps";

export interface IMyButtonProps extends IBaseElementProps {
  /**
   * How primary should the button be?
   */
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  /**
   * How large should the button be?
   */
  buttonSize?: "small" | "middle" | "large" | undefined;
  /**
   * How circle should the button be?
   */
  shapes?: "default" | "circle" | "round" | undefined;
  /**
   * How icon should the button be?
   */
  icon?: React.ReactNode;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
