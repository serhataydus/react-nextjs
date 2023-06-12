import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "./MyButton";
import { SearchOutlined } from "@ant-design/icons";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof MyButton> = {
  title: "App/Element/Basic/MyButton",
  component: MyButton,
  args: {
    label: "Click Me",
    dataTestId: "mybutton",
    onClick: action("clicked"),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const OnclickEventButton: Story = {
  args: {
    type: "default",
  },
};

export const DefaultTypeButton: Story = {
  args: {
    type: "default",
  },
};

export const PrimaryTypeButton: Story = {
  args: {
    type: "primary",
  },
};

export const DashedTypeButton: Story = {
  args: {
    type: "dashed",
  },
};

export const LinkTypeButton: Story = {
  args: {
    type: "link",
  },
};

export const TextTypeButton: Story = {
  args: {
    type: "text",
  },
};

export const GhostTypeButton: Story = {
  args: {
    type: "ghost",
  },
};

export const SmallSizeButton: Story = {
  args: {
    buttonSize: "small",
  },
};

export const MiddleSizeButton: Story = {
  args: {
    buttonSize: "middle",
  },
};

export const LargeSizeButton: Story = {
  args: {
    buttonSize: "large",
  },
};

export const DefaultShapeButton: Story = {
  args: {
    shapes: "default",
  },
};

export const CircleShapeButton: Story = {
  args: {
    shapes: "circle",
    label: "C",
  },
};

export const RoundShapeButton: Story = {
  args: {
    shapes: "round",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    icon: <SearchOutlined />,
  },
};
