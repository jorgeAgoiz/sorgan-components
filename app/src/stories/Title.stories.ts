import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "@sorgan-components/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Hola ke ase",
  },
};
