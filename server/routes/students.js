import { Router } from "express"
import pool from "../db.js"

const router = Router()

router.post("/", async (req, res) => {
  const { students } = req.body
  for (const student of students) {
    try {
      const [result] = await pool.query(
        "insert into students (name, user_id) values (?,?)",
        [student, req.user.id]
      )
      if (result.affectedRows !== 1) return res.sendStatus(500)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
  res.status(201).json({ status: 200 })
})

router.patch("/:id", async (req, res) => {
  const { dob, name } = req.body

  try {
    const [result] = await pool.query(
      "update students set dob = ?, name = ? where id = ? and user_id = ?",
      [dob, name, req.params.id, req.user.id]
    )
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const [result] = await pool.query(
      "delete from students where id = ? and user_id = ?",
      [req.params.id, req.user.id]
    )
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

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
