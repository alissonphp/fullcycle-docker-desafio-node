const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT ? process.env.PORT : 3000
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
db.connect()
app.get('/', (req, res) => {
    if (req.query.name) {
        db.query(`INSERT INTO people (id, name) VALUES ('', '${req.query.name}')`, (err) => {
            if (err) throw err
        })
        console.info(`${req.query.name} inserted in database!`)
    }

    db.query(
        'SELECT id, name FROM people ORDER BY name ASC',
        (err, rows, fields) => {
            if (err) throw err
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                <ul>
                    ${mountList(rows)}
                </ul>
            `)
        }
    )
})

mountList = (rows) => {
    let list = '';
    rows.map((row) => {
        list += `<li>${row.name}</li>`
    })

    return list;
}

app.listen(port, () => {
    console.log(`Desafio 01 PFA rodando na porta em http://localhost:${port}`)
})