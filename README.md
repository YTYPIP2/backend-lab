# Лабораторная работа №1: Бэкенд на Node.js

**Вариант:** 7
**Студент:** Мовсесян Самвел Джонович
**Группа:** ПИЖ-Б-О-25-2

## 📋 Описание задания
Разработка простого веб-сервера с использованием Node.js и фреймворка Express. 
Требуется реализовать 2 эндпоинта (текстовый и JSON) и настроить автоперезапуск сервера.

## 🛠 Используемые технологии
* Node.js
* Express.js
* Nodemon (для автоматического перезапуска)

## 🚀 Как запустить
1. Установите зависимости:
   ```bash
   npm install
2. Введите команду чтобы запустить сервер:
    ```bash
   npm run dev
3. Сервер запустится по адресу: http://localhost:3000

##  :bulb: Представляю сам код
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Мой бэкенд');
});

app.get('/api/name', (req, res) => {
    const data = {
        app_name: "Lab1",
        author: "Student"
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
