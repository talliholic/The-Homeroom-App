import "dotenv/config.js"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authenticateUser from "./middleware/authenticateUser.js"
import usersRouter from "./routes/users.js"
import studentsRouter from "./routes/students.js"

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)

app.use(authenticateUser)

app.use("/students", studentsRouter)

app.listen(5000, () => console.log("Server up on port " + 5000))
