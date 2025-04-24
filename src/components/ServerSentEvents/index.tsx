import { useRef } from "react";
import { CssForm, CssFormMessages } from "./style";

const SERVER_URL = "http://localhost:3011";

const ServerSentEvents = () => {
  const ref = useRef<HTMLDivElement>(null);

  if (typeof EventSource !== "undefined") {
    const eventSource = new EventSource(`${SERVER_URL}/events`);

    eventSource.onmessage = function (event) {
      const messageElement = document.createElement("div");
      const messageData = JSON.parse(event.data);
      messageElement.textContent = `${messageData.timestamp} - ${messageData.message}`;
      ref?.current?.appendChild(messageElement);
    };
  } else {
    const messageElement = document.createElement("div");
    messageElement.textContent ="Ваш браузер не поддерживает Server-Sent Events";
    ref?.current?.appendChild(messageElement);
  }

  return (
    <>
      <p>Server-Sent Events</p>
      <CssForm>
        <CssFormMessages>
          <div ref={ref} />
        </CssFormMessages>
      </CssForm>
    </>
  );
};

export default ServerSentEvents;
