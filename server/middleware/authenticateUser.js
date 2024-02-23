import jwt from "jsonwebtoken"
import pool from "../db.js"

const authenticateUser = async (req, res, next) => {
  const token = req.cookies?.jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const sql = "select id, name, email from users where id = ?"
      const [[user]] = await pool.query(sql, [decoded.userId])
      req.user = user
      return next()
    } catch (error) {
      return res.status(401).json(null)
    }
  }
  return res.status(401).json(null)
}

export default authenticateUser
