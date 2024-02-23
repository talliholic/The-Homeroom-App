import { Router } from "express"
import pool from "../db.js"
import generateJwtToken from "../utils/generateJwtToken.js"
import authenticateUser from "../middleware/authenticateUser.js"
import bcrypt from "bcrypt"

const router = Router()

router.post("/login", async (req, res) => {
  const sql = "select id, email, password from users where email = ?"
  const { email, password } = req.body

  try {
    const [[user]] = await pool.query(sql, [email])
    if (user) {
      const passwordsMatch = await bcrypt.compare(password, user.password)
      if (passwordsMatch) return generateJwtToken(res, user.id)
    }
    return res.status(403).json({ status: 403 })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
})

router.get("/logout", authenticateUser, (req, res) => {
  res.clearCookie("jwt")
  res.json({ status: 200 })
})

router.get("/dashboard", authenticateUser, (req, res) => {
  return res.json(req.user)
})

export default router
