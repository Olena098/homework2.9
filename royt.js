const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1488;

const router = express.Router();

router.post('/pull-request', (req, res) => {
    const { title, description, author, repository } = req.body;
    res.status(201).json({ message: '--пул-реквест успішно створено!' });
});

router.post('/custom-route', (req, res) => {

    res.status(200).json({ message: '--додатковий маршрут успішно оброблено!' });
});

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Сервер працює за адресою http://localhost:${PORT}`);
});
