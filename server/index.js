const express = require('express');
const config = require('config');
const { dbConnection, dbConfig } = require('./utils')

// Настройки сервера
const HOST = config.get('Table.host')
const PORT = config.get('Table.port')

// middleware
const { header } = require('./middleware');
const router = require('./routes');
const app = express();

app.use(header);
app.use('/api', router);

const MainApp = () => {
    try {
        dbConnection.connect((err) => {
          if (err) {
            console.log('Error database connection: ', [err.message]);
            return 1;
          }

          console.log(`Подключен к базе: ${dbConfig.database}`);

          app.listen(PORT, HOST, () => {
            console.log(`> Сервер стартовал: http://${HOST}:${PORT}`);
          });

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