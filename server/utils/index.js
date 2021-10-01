const { Client } = require('pg')
const config = require('config');

// Настройки бд
const dbConfig = config.get("Table.dbConfig")
const dbConnection = new Client(dbConfig);

module.exports = {
    dbConnection,
    dbConfig
}