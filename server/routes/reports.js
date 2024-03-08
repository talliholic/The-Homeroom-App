import { Router } from "express"
import pool from "../db.js"

const router = Router()

router.get("/:student_id", async (req, res) => {
  const { student_id } = req.params
  try {
    const [reports] = await pool.query(
      "select * from reports where student_id = ? and user_id = ? order by date desc",
      [student_id, req.user.id]
    )
    res.json(reports)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.get("/:report_id/sections", async (req, res) => {
  const { report_id } = req.params
  try {
    const [sections] = await pool.query(
      "select * from sections where report_id = ? and user_id = ?",
      [report_id, req.user.id]
    )
    res.json(sections)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.post("/:student_id", async (req, res) => {
  const { date, title, conclusions } = req.body
  const { student_id } = req.params
  try {
    const [result] = await pool.query(
      "insert into reports (date, title, conclusions, student_id, user_id) values (?,?,?,?,?)",
      [date, title, conclusions, student_id, req.user.id]
    )
    if (result.affectedRows === 1) return res.json({ status: 200, result })
    res.sendStatus(500)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.post("/:report_id/sections", async (req, res) => {
  const { title, content } = req.body
  const { report_id } = req.params
  try {
    const [result] = await pool.query(
      "insert into sections (title, content, report_id, user_id) values (?,?,?,?)",
      [title, content, report_id, req.user.id]
    )
    if (result.affectedRows === 1) return res.json({ status: 200, result })
    res.sendStatus(500)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.patch("/:id", async (req, res) => {
  const { date, title, conclusions } = req.body
  const { id } = req.params
  let data = {}

  if (date && !title && !conclusions) data = { key: "date", value: date }
  else if (!date && title && !conclusions) data = { key: "title", value: title }
  else if (!date && !title && conclusions)
    data = { key: "conclusions", value: conclusions }

  try {
    const [result] = await pool.query(
      `update reports set ${data.key} = ? where id = ? and user_id = ?`,
      [data.value, id, req.user.id]
    )
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.patch("/section/:id", async (req, res) => {
  const { title, content } = req.body
  const { id } = req.params

  try {
    const [result] = await pool.query(
      "update sections set title = ?, content = ? where id = ? and user_id = ?",
      [title, content, id, req.user.id]
    )
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const [result] = await pool.query("delete from reports where id = ?", [
      req.params.id,
    ])
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.delete("/section/:id", async (req, res) => {
  try {
    const [result] = await pool.query("delete from sections where id = ?", [
      req.params.id,
    ])
    res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

export default router
