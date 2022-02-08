const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "sharifa",
  password: "root",
  database: "employee-task",
});

// get list

app.get("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("SELECT * from `employee-task`", (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// Get an employee by ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from `employee-task` WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// remove an employee
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from `employee-task` WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})



// Add an employee
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO `employee-task` SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the name: ${params.name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Edit an employee
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, name, salary } = req.body

        connection.query('UPDATE `employee-task` SET name = ?, salary = ? WHERE id = ?', [name, salary, id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the name: ${name} has been updated.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})




// Listen on enviroment port or 3000
app.listen(port, () => console.log(`Listen on port ${port}`));
