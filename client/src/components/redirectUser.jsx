import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function RedirectUser() {
  const { data: user, loaded } = useSelector(state => state.user)

  if (loaded)
    return !user ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/dashboard" />
    )
}
