import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "./FirstBlock";
import { SearchOutlined } from "@ant-design/icons";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof MyButton> = {
  title: "App/Blocks/FirstBlock",
  component: MyButton,
  args: {
    dataTestId: "firstBlock",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const DefaultStory: Story = {
  args: {
    label: "First Block",
    button1Label: "Button 1",
    button2Label: "Button 2",
  },
};
