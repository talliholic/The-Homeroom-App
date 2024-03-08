import { NavLink } from "react-router-dom"
import SelectStudents from "./SelectStudents"
import { useSelector } from "react-redux"

export default function Header({ isLoading, loaded, user, data }) {
  const studentId = useSelector(state => state.app.studentId)

  return (
    <nav>
      <h1>The Homeroom App</h1>
      <SelectStudents
        isLoading={isLoading}
        loaded={loaded}
        user={user}
        data={data}
      />
      {studentId && (
        <div className="menu">
          <NavLink className={className} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={className} to={`/student/${studentId}`}>
            Reports
          </NavLink>
          <NavLink className={className} to={`/new_report/${studentId}`}>
            New Report
          </NavLink>
        </div>
      )}
    </nav>
  )
}

const className = ({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : "link"
