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