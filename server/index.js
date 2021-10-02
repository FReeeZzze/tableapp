const express = require('express');
const config = require('config');

// Настройки сервера
const PORT = config.get('Table.port')

// middleware
const { header } = require('./middleware');
const router = require('./routes');
const app = express();

app.use(header);
app.use('/api', router);

const MainApp = () => {
    try {
        app.listen(PORT, () => {
          console.log(`> Сервер стартовал на порту: ${PORT}`);
        });

        app.use((req, res) => {
            res.status(404).send({
              message: 'Not Found'
            });
        });

    } catch (err) {
        console.log('Main err: ', [err.message]);
        return 1;
    }
};

MainApp();