import { useDispatch } from "react-redux"
import Protected from "./components/protected"
import RedirectUser from "./components/redirectUser"
import Dashboard from "./users/Dashboard"
import Login from "./users/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchUser } from "./users/slice"
import { useEffect } from "react"
import Header from "./components/Header"
import Student from "./students/Show"
import NewReport from "./components/newReport/Index"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student/:studentId" element={<Student />} />
          <Route path="/new_report/:studentId" element={<NewReport />} />
        </Route>
        <Route element={<RedirectUser />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
