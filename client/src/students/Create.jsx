import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Textarea from "../components/form/Textarea"
import Submit from "../components/form/Submit"
import { useCreateStudentsMutation } from "./slice"

export default function CreateStudents() {
  const [open, setOpen] = useState(false)
  const [createStudents, result] = useCreateStudentsMutation()

  const onClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  useEffect(() => {
    if (result.isSuccess) onClose()
  }, [result])

  const handleSubmit = e => {
    e.preventDefault()
    const students = e.target.Students.value.trim()
    const studentsArray = students
      .split("\n")
      .filter(student => student.trim() != "")
      .map(student => student.trim())
    createStudents({ students: studentsArray })
  }

  return (
    <section>
      <button onClick={handleClick}>New students</button>
      <Modal open={open} onClose={onClose} title="New students">
        <form method="POST" onSubmit={handleSubmit}>
          <Textarea autoFocus cols="25" rows="15" name="Students"></Textarea>
          <Submit />
        </form>
      </Modal>
    </section>
  )
}
