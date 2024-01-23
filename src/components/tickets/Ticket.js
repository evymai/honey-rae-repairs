import { useEffect, useState } from "react"
import { getAllEmployees, updateEmployee } from "../../services/employeeService"
import { assignTicket, updateTicket } from "../../services/ticketServices"

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([])
  const [assignedEmployee, setAssignedEmployee] = useState({})

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray)
      console.log("employees set!")
    })
  }, [])

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId // ? run ticket.employeeTicket and if undefined, return as undefined
    )
    setAssignedEmployee(foundEmployee)
  }, [employees, ticket])

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    )
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    }
    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets()
    })
  }

  const handleClose = () => {
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date(),
    }

    updateTicket(closedTicket).then(() => {
      getAndSetTickets()
    })
  }

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/* if the logged in user is an employee & there is no employee
          ticket associated with the service ticket, then a button to claim
           the ticket should display */}
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          ) : (
            ""
          )}
          {/* if the logged in user is the assigned emp for the ticket and 
          there is no dateCompleted, then button to clos ticket should display */}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn-warning" onClick={handleClose}>
              Close
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  )
}
