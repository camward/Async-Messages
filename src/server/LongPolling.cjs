const express = require("express");
const app = express();
const port = 3000;

let clients = [];
let messages = [];

app.use(require("cors")());

/*
 * Получение сообщений
 */
app.get("/poll", (req, res) => {
  // Добавляем клиента в список
  clients.push(res);

  // Удаляем клиента, если соединение закрыто
  req.on("close", () => {
    clients = clients.filter((client) => client !== res);
  });
});

/*
 * Отправка сообщений
 */
app.post("/send", express.json(), (req, res) => {
  const message = req.body.message;

  // Сохраняем сообщение
  messages.push(message);

  // Уведомляем всех клиентов о новом сообщении
  clients.forEach((client) => client.json({ message }));

  // Очищаем список клиентов после уведомления
  clients = [];

  res.sendStatus(200);
});

/*
 * Запуск сервера
 */
app.listen(port, () => {
  console.log(`Сервер доступен по адресу http://localhost:${port}`);
});
