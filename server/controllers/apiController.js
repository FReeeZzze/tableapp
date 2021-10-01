const { dbConnection } = require('../utils')

exports.showTable = (req, res) => {
    const id = req.query.id
    const sql = `SELECT * FROM form ${id ? `WHERE id=${id}` : ''}`;
    dbConnection.query(sql, (err, results) => {
        if (err) {
            console.log('Error: ', [err.message]);
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
};
