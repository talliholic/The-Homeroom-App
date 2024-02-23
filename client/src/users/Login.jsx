import { useDispatch } from "react-redux"
import Input from "../components/form/Input"
import Submit from "../components/form/Submit"
import { fetchUser } from "./slice"
import { post } from "../utils/requests"
import { useState } from "react"

export default function Login() {
  const dispatch = useDispatch()
  const [feedback, setFeedback] = useState("Type your credentials.")

  const handleSubmit = async e => {
    e.preventDefault()
    const body = {
      email: e.target.Email.value.trim(),
      password: e.target.Password.value,
    }
    const result = await post("/users/login", body)
    if (result.status === 200) dispatch(fetchUser())
    else setFeedback("Check your credentials.")
  }

  return (
    <main>
      <h1>Enter your account</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <p>{feedback}</p>
          <Input name="Email" type="email" autoFocus required />
          <Input name="Password" type="password" required />
          <Submit />
        </form>
      </section>
    </main>
  )
}
