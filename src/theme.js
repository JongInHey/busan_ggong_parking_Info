import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { Button, Modal } = chakraTheme.components;

const components = {
  Button,
  Modal,
};

const _theme = extendBaseTheme({
  components,
  config,
});

export default _theme;
