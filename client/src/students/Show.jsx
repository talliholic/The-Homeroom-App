import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { setStudentId } from "../appSlice"
import Reports from "../reports/Index"

export default function Student() {
  const dispatch = useDispatch()
  const { studentId } = useParams()

  useEffect(() => {
    dispatch(setStudentId(studentId))
  }, [])

  return (
    <>
      <Reports studentId={studentId} />
    </>
  )
}
