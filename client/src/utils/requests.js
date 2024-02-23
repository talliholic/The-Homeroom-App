const baseUrl = "http://localhost:5000"

export const get = async endpoint => {
  const response = await fetch(baseUrl + endpoint, {
    credentials: "include",
  })
  return await response.json()
}

export const post = async (endpoint, body) => {
  const response = await fetch(baseUrl + endpoint, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  return await response.json()
}
