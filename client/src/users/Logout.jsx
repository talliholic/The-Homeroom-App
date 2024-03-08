import { useDispatch } from "react-redux"
import { fetchUser } from "./slice"
import { get } from "../utils/requests"

export default function Logout() {
  const dispatch = useDispatch()

  const handleClick = async () => {
    const result = await get("/users/logout")
    if (result.status === 200) dispatch(fetchUser())
  }

  return <button onClick={handleClick}>Log out</button>
}
