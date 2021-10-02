const { dbConfig } = require('../utils')
const { Client } = require('pg')

exports.showTable = (req, res) => {
    const id = req.query.id
    const sql = `SELECT * FROM form ${id ? `WHERE id=${id}` : ''}`;

    const dbConnection = new Client(dbConfig);

    dbConnection.connect(async (err) => {
        if (err) {
            console.log('Error: ', [err.message]);
            await dbConnection.end()
        }

        console.log(`Подключен к базе: ${dbConfig.database}`);

        dbConnection.query(sql, async (err, results) => {
            if (err) {
                console.log('Error: ', [err.message]);
    
                await dbConnection.end()
    
                res.statusCode = 500;
                return res.json({
                    status: 'error',
                    err: err.message,
                });
            }
    
            res.statusCode = 200;
            return res.json({
                status: 'ok',
                results: results.rows,
            });
        });
    })
};
