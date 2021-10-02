const config = require('config');

// Настройки бд
const dbConfig = config.get("Table.dbConfig")

module.exports = {
    dbConfig,
}