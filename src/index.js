import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import _theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);
