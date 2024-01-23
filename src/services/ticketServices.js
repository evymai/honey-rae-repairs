export const getAllTickets = async () => {
  return await fetch(
    `http://localhost:8088/serviceTickets?_embed=employeeTickets`
  ).then((res) => res.json())
}

export const assignTicket = async (employeeTicket) => {
  return await fetch(`http://localhost:8088/employeeTickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeTicket),
  })
}

export const updateTicket = async (ticket) => {
  return await fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  })
}

export const getTicketsByEmployeeId = async (employeedId) => {
  return await fetch(
    `http://localhost:8088/employeeTickets?employeeId=${employeedId}`
  ).then((res) => res.json())
}
