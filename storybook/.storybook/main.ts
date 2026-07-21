import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const projectRoot = path.resolve(__dirname, "../..");

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: { name: "@storybook/nextjs-vite", options: {} },
  staticDirs: ["../../public"],
  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": projectRoot,
    };
    return config;
  },
};

export default config;
