export const getAllEmployees = async () => {
  return await fetch(`http://localhost:8088/employees?_expand=user`).then(
    (res) => res.json()
  )
}

export const getEmployeeByUserId = async (userId) => {
  return await fetch(
    `http://localhost:8088/employees?userId=${userId}&_expand=user`
  ).then((res) => res.json())
}

export const updateEmployee = async (employee) => {
  return await fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  })
}
