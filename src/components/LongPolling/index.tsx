import { useEffect, useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { TextArea, Button } from "@admiral-ds/react-ui";
import { CssForm, CssFormButton, CssFormMessages } from "./style";

const SERVER_URL = "http://localhost:3000";

const LongPolling = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Функция отрисовки сообщений
  const handleIncomingMessage = (message: string) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    ref?.current?.appendChild(messageElement);
  };

  // Функция опроса
  const longPoll = () => {
    fetch(`${SERVER_URL}/poll`)
      .then((response) => response.json())
      .then((data) => {
        handleIncomingMessage(data.message);
        // Перезапускаем long poll после получения сообщения
        longPoll();
      })
      .catch((error) => {
        console.error("Custom Error:", error);
        // В случае ошибки перезапускаем long poll через 5 секунд
        setTimeout(longPoll, 5000);
      });
  };

  useEffect(() => {
    longPoll();
  }, []);

  const [localValue, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  // Обработчик отправки сообщения
  const onSendHandler = () => {
    if (localValue) {
      fetch(`${SERVER_URL}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: localValue }),
      });
      setValue("");
    }
  };

  return (
    <>
      <p>LongPolling</p>
      <CssForm>
        <CssFormMessages>
          <div ref={ref} />
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

export default LongPolling;
