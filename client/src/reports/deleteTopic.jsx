import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDeleteSectionMutation } from "./slice"

export default function DeleteTopic({ section }) {
  const [deleteSection, result] = useDeleteSectionMutation()

  const handleClick = () => {
    const confirmDeletion = confirm(
      `Do you want to delete topic "${section.title}"?`
    )
    if (confirmDeletion) deleteSection(section.id)
  }

  return (
    <div>
      <FontAwesomeIcon onClick={handleClick} icon={faTrash} />
    </div>
  )
}
