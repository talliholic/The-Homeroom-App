import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "homeroom",
})

export default pool
