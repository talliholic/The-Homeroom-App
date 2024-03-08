import { useReadStudentsQuery } from "../students/slice"
import { useNavigate } from "react-router-dom"
import Select from "./form/Select"
import { useDispatch, useSelector } from "react-redux"
import { setStudentId } from "../appSlice"

export default function SelectStudents() {
  const { data: user, loaded } = useSelector(state => state.user)
  const { data, isLoading } = useReadStudentsQuery()
  const dispatch = useDispatch()
  const studentId = useSelector(state => state.app.studentId)
  const navigate = useNavigate()

  const selectStudentOption = {
    id: 0,
    value: 0,
    text: "Select a student",
  }

  const mapStudents = students =>
    students.map(student => ({
      id: student.id,
      value: student.id,
      text: student.name,
    }))

  const getOptions = students => {
    const studentsData = mapStudents(students)
    return studentId ? studentsData : [selectStudentOption, ...studentsData]
  }

  const handleChange = e => {
    dispatch(setStudentId(e.target.value))
    navigate(`/student/${e.target.value}`)
  }

  if (!isLoading && data && loaded && user)
    return (
      <Select
        onChange={handleChange}
        nav
        value={studentId}
        name="Students"
        options={getOptions(data)}
      />
    )
}
