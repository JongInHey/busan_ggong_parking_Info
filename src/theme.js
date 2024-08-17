import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Noto Serif KR", serif`,
  body: `"Noto Serif KR", serif`,
};

const { Button, Modal, FormControl, FormLabel, Input } = chakraTheme.components;

const components = {
  Button,
  Modal,
  FormControl,
  FormLabel: {
    baseStyle: {
      fontWeight: "medium",
      fontSize: "lg",
    },
  },
  Input,
};

const _theme = extendBaseTheme({
  components,
  config,
  fonts,
  FormLabel,
  Input,
});

export default _theme;
