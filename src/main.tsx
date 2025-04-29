import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FontsVTBGroup, DropdownProvider } from "@admiral-ds/react-ui";
import { ThemeContextProvider } from "./ThemeContextProvider";
import App from "./App";
import Wrapper from "./components/layout/Wrapper";
import LongPolling from "./components/LongPolling";
import ServerSentEvents from "./components/ServerSentEvents";
import WebSocket from "./components/WebSocket";
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
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DropdownProvider>
        <FontsVTBGroup />
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </DropdownProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
