const Pool = require("pg").Pool

const pool = new Pool(
    {
        user : "abhinavap",
        password : "op[]",
        host : "localhost",
        port : 5432,
        database : "postgres"
    }
)




module.exports = pool