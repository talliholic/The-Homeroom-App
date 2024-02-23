import jwt from "jsonwebtoken"

const generateJwtToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  })

  res
    .cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .json({ status: 200 })
}

export default generateJwtToken
