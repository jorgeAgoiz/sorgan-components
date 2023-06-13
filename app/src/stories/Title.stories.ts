import type { Meta, StoryObj } from "@storybook/react";

import TitleBasic from "./Title";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Title",
  component: TitleBasic,
  tags: ["autodocs"],
} satisfies Meta<typeof TitleBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Hola ke ase",
  },
};
