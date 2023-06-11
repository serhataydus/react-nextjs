import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "./MyButton";
import { SearchOutlined } from '@ant-design/icons';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MyButton> = {
  title: "App/Element/Basic/MyButton",
  component: MyButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const OnclickEventButton: Story = {
  args: {
    type: "default",
    label: "Click Me",
    onClick: action('clicked'),
  },
};

export const DefaultTypeButton: Story = {
  args: {
    type: "default",
    label: "Button",
  },
};

export const PrimaryTypeButton: Story = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const DashedTypeButton: Story = {
  args: {
    type: "dashed",
    label: "Button",
  },
};

export const LinkTypeButton: Story = {
  args: {
    type: "link",
    label: "Button",
  },
};

export const TextTypeButton: Story = {
  args: {
    type: "text",
    label: "Button",
  },
};

export const GhostTypeButton: Story = {
  args: {
    type: "ghost",
    label: "Button",
  },
};

export const SmallSizeButton: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const MiddleSizeButton: Story = {
  args: {
    size: "middle",
    label: "Button",
  },
};

export const LargeSizeButton: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const DefaultShapeButton: Story = {
  args: {
    shapes: "default",
    label: "Button",
  },
};

export const CircleShapeButton: Story = {
  args: {
    shapes: "circle",
    label: "B",
  },
};

export const RoundShapeButton: Story = {
  args: {
    shapes: "round",
    label: "Button",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    icon:<SearchOutlined />,
    label: "Button",
  },
};
