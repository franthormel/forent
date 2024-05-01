import type { Preview } from "@storybook/react";

import "./storybook.css";

const preview: Preview = {
  parameters: {
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
    viewport: {
      viewports: {
        small: {
          name: "Layout Small",
          styles: {
            width: "640px",
            height: "480px",
          },
        },
        md: {
          name: "Layout Medium",
          styles: {
            width: "768px",
            height: "576px",
          },
        },
        lg: {
          name: "Layout Large",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        xl: {
          name: "Layout XL",
          styles: {
            width: "1280px",
            height: "960px",
          },
        },
        xxl: {
          name: "Layout 2XL",
          styles: {
            width: "1536px",
            height: "1152px",
          },
        },
      },
    },
  },
};

export default preview;
