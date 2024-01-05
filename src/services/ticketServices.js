export const getAllTickets = async () => {
  return await fetch(`http://localhost:8088/serviceTickets`).then((res) =>
    res.json()
  )
}
