import { BaseElementProps } from "@/app/components/base/baseElementProps";

export interface IMyButtonProps extends BaseElementProps {
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
  size?: "small" | "middle" | "large" | undefined;
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
