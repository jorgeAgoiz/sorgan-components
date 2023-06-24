import type { Meta, StoryObj } from "@storybook/react";

import { ButtonBasic } from "@sorgan-components/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ButtonBasic",
  component: ButtonBasic,
  tags: ["autodocs"],
  argTypes: {
    colorVariant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    text: { control: "text" },
    variant: { control: "select", options: ["contained", "outlined", "text"] },
    title: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof ButtonBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Button Basic",
    colorVariant: "primary",
    size: "large",
  },
};

export const Secondary: Story = {
  args: {
    text: "Button Basic",
    colorVariant: "secondary",
    size: "small",
  },
};
