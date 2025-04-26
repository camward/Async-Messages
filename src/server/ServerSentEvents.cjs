const express = require("express");
const dayjs = require("dayjs");
const app = express();
const port = 3011;

app.use(require("cors")());

/*
 * Получение сообщений
 */
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Функция для отправки события
  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  let count = 0;

  // Отправка события каждую секунду
  const intervalId = setInterval(() => {
    const data = {
      message: `Новое сообщение ${++count}`,
      timestamp: dayjs().format("DD.MM HH:mm:ss"),
    };
    sendEvent(data);
  }, 1000);

  // Очистка интервала при завершении соединения
  req.on("close", () => {
    clearInterval(intervalId);
    console.log("Соединение закрыто");
  });
});

/*
 * Запуск сервера
 */
app.listen(port, () => {
  console.log(`Сервер SSE доступен по адресу http://localhost:${port}`);
});
