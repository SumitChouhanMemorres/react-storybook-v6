/** @type { import('@storybook/react').Preview } */

import React from "react";
// import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     <Center>{story()}</Center>
//   </ThemeProvider>
// ));

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">{story()}</Box>
    </ThemeProvider>
  ),
];
