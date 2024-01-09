export const getNonStaffUsers = async () => {
  return await fetch(`http://localhost:8088/users?isStaff=false`).then((res) =>
    res.json()
  )
}

export const getStaffUsers = async () => {
  return await fetch(`http://localhost:8088/users?isStaff=true`).then((res) =>
    res.json()
  )
}
