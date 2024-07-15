/* POSTGRESQL */

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'chessmaster',
    database: 'chessgame'
});

/* WEB APPLICATION */
const express = require('express');
const app = express();
const port = 3001;
    
app.get('/', (req, res) => {
    pool.query('Select * from games',
        (error, response) => {
            if (error) {
                    console.log(error);
            } else {
                let result = [];
                for (let row of response.rows) {
                    result.push(new Game(row[0], row[1], row[2]));
                }
                res.status(200).send(result);
            }
        });
});

app.post('/', (req, res) => {
    console.log(req);
    pool.query(
        'Insert into games(winner, t1, t2 ) values (' +
        record.winner + ', ' + 
        record.t1 + ', ' + 
        record.t2 + ')',
        (error, response) => {
            if (error) {
                    console.log(error);
            }
        }
      );
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});