import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  LIGHT_THEME,
  FontsVTBGroup,
  DropdownProvider,
} from "@admiral-ds/react-ui";
import App from "./App";
import Wrapper from "./components/layout/Wrapper";
import LongPolling from "./components/LongPolling";
import ServerSentEvents from "./components/ServerSentEvents";
import WebSocket from "./components/WebSocket";
import WebTransport from "./components/WebTransport";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Wrapper>
          <App />
        </Wrapper>
      ),
    },
    {
      path: "/long-polling",
      element: (
        <Wrapper>
          <LongPolling />
        </Wrapper>
      ),
    },
    {
      path: "/server-sent-events",
      element: (
        <Wrapper>
          <ServerSentEvents />
        </Wrapper>
      ),
    },
    {
      path: "/web-socket",
      element: (
        <Wrapper>
          <WebSocket />
        </Wrapper>
      ),
    },
    {
      path: "/web-transport",
      element: (
        <Wrapper>
          <WebTransport />
        </Wrapper>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
