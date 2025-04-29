const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = 3012;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

// Обработка подключения клиента
io.on("connection", (socket) => {
  console.log("Новый пользователь подключен");

  // Обработка получения сообщения
  socket.on("chat message", (msg) => {
    // Отправка сообщения всем подключенным клиентам
    io.emit("chat message", msg);
  });

  // Обработка отключения клиента
  socket.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

/*
 * Запуск сервера
 */
httpServer.listen(port, () => {
  console.log(`Сервер WS доступен по адресу http://localhost:${port}`);
});
