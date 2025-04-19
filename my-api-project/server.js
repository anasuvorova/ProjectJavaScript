/*
const express = require("express"); // Импортируем Express
const axios = require("axios"); //подключаю axois для отправки НТТР запросов
require("dotenv").config(); //для загрузки переменных окуржения
const cors = require("cors");
const path = require("path");
const { log } = require("console");

const app = express(); // Создаем экземпляр приложения Express
const PORT = 3000; // Указываем порт для сервера

//разрешаю CORS
app.use(
  cors({
    origin: "*", //разрешаю все источники
    methods: ["GET", "POST"],
  })
);

// статика - путь к нтмл css js  (HTML, CSS, JS)
app.use(express.static(path.join("E:", "js", "NEW", "ProjectJavaScript")));

//app.use(cors());

// Отправляем простой ответ на запрос по корневому пути
app.get("/", (req, res) => {
  res.send("Привет, это сервер на Express!");
});

/*app.get("/", (req, res) => {
  res.send("Привет, это сервер на EXPRESS!");
});*/

//эндпоинт для работы с АПИ НАСА
app.get("/api/nasa-obg", async (req, res) => {
  try {
    //читаю АПИ ключ из переменной окружения
    const nasaApiKey = process.env.NASA_API_KEY;

    // URL и параметры на те что пердоставляет мой сервис наса
    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaApiKey}`);

    //отправляю полученные данные на клиент
    res.json(response.data);
  } catch (error) {
    console.log("ошибка при запросе к NASA");

    res.status(500).send("Ошибка при подключении к NASA");
  }
});
// Запускаем сервер на указанном порту
app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
 */