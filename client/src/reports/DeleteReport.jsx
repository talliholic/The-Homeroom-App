import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDeleteReportMutation } from "./slice"

export default function DeleteReport({ report }) {
  const [deleteReport, result] = useDeleteReportMutation()

  const handleClick = () => {
    const confirmDeletion = confirm(
      `Do you want to delete report "${report.title}"?`
    )
    if (confirmDeletion) deleteReport(report.id)
  }

  return (
    <div>
      <FontAwesomeIcon onClick={handleClick} icon={faTrash} />
    </div>
  )
}
