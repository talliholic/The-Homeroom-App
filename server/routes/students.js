import { Router } from "express"
import pool from "../db.js"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const [students] = await pool.query(
      "select * from students where user_id = ?",
      [req.user.id]
    )
    if (!students) return res.sendStatus(404)
    res.json(students)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.param("studentId", (req, res, next, studentId) => {
  req.studentId = studentId
  next()
})

router.get("/:studentId", async (req, res) => {
  try {
    const [[student]] = await pool.query(
      "select * from students where id = ? and user_id = ?",
      [req.studentId, req.user.id]
    )
    if (!student) return res.sendStatus(404)
    res.json(student)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

export default router
