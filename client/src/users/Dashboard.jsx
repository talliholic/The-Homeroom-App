import { useEffect } from "react"
import CreateStudents from "../students/Create"
import Logout from "./Logout"
import { useDispatch } from "react-redux"
import { resetStudentId } from "../appSlice"
import { fetchUser } from "./slice"

export default function Dashboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetStudentId())
    dispatch(fetchUser())
  }, [])

  return (
    <main>
      <h1>Dashboard</h1>
      <CreateStudents />
      <section>
        <Logout />
      </section>
    </main>
  )
}
