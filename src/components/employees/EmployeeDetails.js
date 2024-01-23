import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import { getTicketsByEmployeeId } from "../../services/ticketServices"

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({})
  const [employeeTickets, setEmployeeTickets] = useState()

  const { userId } = useParams()

  useEffect(() => {
    getEmployeeByUserId(userId).then((data) => {
      const employeeObj = data[0]
      setEmployee(employeeObj)
    })
  }, [userId])

  useEffect(() => {
    getTicketsByEmployeeId(employee.id).then((empTicketArr) => {
        setEmployeeTickets(empTicketArr.length)
      })
  }, [employee])

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>${employee.rate}
      </div>
      <div className="employee-footer">
        Currently working on {employeeTickets} tickets
      </div>
    </section>
  )
}
