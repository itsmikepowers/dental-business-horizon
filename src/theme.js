import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Bebas Neue, sans-serif",
    body: "Bebas Neue, sans-serif", // Use this if you want "Bebas Neue" to be the default for both heading and body. Otherwise, specify a different font for the body.
  },
});

export default theme;
