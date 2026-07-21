import type { Preview } from "@storybook/nextjs-vite";
import "../../app/globals.css";

const preview: Preview = {
  parameters: {
    a11y: { test: "todo" },
    controls: { expanded: true },
    backgrounds: {
      default: "porcelain",
      values: [
        { name: "porcelain", value: "#e9e5d8" },
        { name: "petrol", value: "#14201e" },
      ],
    },
  },
};

export default preview;
