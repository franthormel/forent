import type { Preview } from "@storybook/react";

import "./storybook.css";

const preview: Preview = {
  args: {
    colorMode: "Dark",
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    docs: {
      toc: true,
    },
  },
};

export default preview;
