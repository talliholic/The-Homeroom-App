import { useDispatch } from "react-redux"
import Protected from "./components/protected"
import RedirectUser from "./components/redirectUser"
import Dashboard from "./users/Dashboard"
import Login from "./users/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { fetchUser } from "./users/slice"
import { useEffect } from "react"
import Header from "./components/Header"

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
        </Route>
        <Route element={<RedirectUser />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
