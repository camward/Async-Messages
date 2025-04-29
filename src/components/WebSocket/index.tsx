import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import type { ChangeEvent } from "react";
import { T, TextArea, Button } from "@admiral-ds/react-ui";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { SocketMsgProps } from "./types";
import { CssForm, CssFormButton, CssFormMessages, CssFormMsg } from "./style";

const socket = io("ws://localhost:3012", {
  transports: ["websocket"],
});

const WebSocket = () => {
  const [user, setUser] = useState<string>("");
  const [messages, setMessages] = useState<SocketMsgProps[]>([]);

  useEffect(() => {
    setUser(nanoid());

    // Обработка получения сообщения
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Очистка при размонтировании компонента
    return () => {
      socket.off("chat message");
    };
  }, []);

  const [localValue, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  // Обработчик отправки сообщения
  const onSendHandler = () => {
    if (localValue) {
      socket.emit("chat message", {
        value: localValue,
        time: dayjs().format("HH:mm:ss"),
        user,
      });
      setValue("");
    }
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        WebSocket
      </T>
      <CssForm>
        <CssFormMessages>
          {messages?.map((item, idx) => (
            <CssFormMsg
              key={idx}
              position={user === item.user ? "left" : "right"}
            >
              <span>{item.time}</span>
              <span>{item.value}</span>
            </CssFormMsg>
          ))}
        </CssFormMessages>

        <TextArea
          value={localValue}
          onChange={handleChange}
          placeholder="Введите текст"
          dimension="s"
          displayClearIcon
        />

        <CssFormButton>
          <Button
            appearance="primary"
            dimension="s"
            onClick={onSendHandler}
            disabled={!localValue}
          >
            Отправить
          </Button>
        </CssFormButton>
      </CssForm>
    </>
  );
};

export default WebSocket;
