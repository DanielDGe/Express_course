const mysql = require('mysql2/promise')

async function connectDB() {

    const connection = await mysql.createConnection({
        host: 'us-east.connect.psdb.cloud',
        user: 'o2dmwley1cikslvr30q9',
        password: 'pscale_pw_gFllZP473vA7449pSzNdgKHbACexiCF4Y5uL8cOk2uR',
        database: 'expressdb',
        ssl: {
            rejectUnauthorized: false
        }
    })

    const result = await connection.query('SELECT "Hello world" AS Result')

    console.log(result)

}

module.exports = connectDB