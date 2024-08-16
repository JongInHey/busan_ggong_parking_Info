import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Noto Serif KR", serif`,
  body: `"Noto Serif KR", serif`,
};

const { Button, Modal } = chakraTheme.components;

const components = {
  Button,
  Modal,
};

const _theme = extendBaseTheme({
  components,
  config,
  fonts,
});

export default _theme;
