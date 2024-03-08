import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Input from "../components/form/Input"
import Textarea from "../components/form/Textarea"
import Submit from "../components/form/Submit"
import { useUpdateSectionMutation } from "./slice"

export default function EditReportTopic({ section }) {
  const [open, setOpen] = useState(false)
  const [updatetopic, result] = useUpdateSectionMutation()

  useEffect(() => {
    if (result.isSuccess) closeModal()
  }, [result])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    updatetopic({
      body: {
        title: e.target.Title.value.trim(),
        content: e.target.Content.value.trim(),
      },
      id: section.id,
    })
  }

  return (
    <div>
      <FontAwesomeIcon onClick={openModal} icon={faEdit} />
      <Modal open={open} onClose={closeModal} title="Edit Topic">
        <form onSubmit={handleSubmit}>
          <Input
            name="Title"
            type="text"
            value={section.title}
            autoFocus
            required
          />
          <Textarea name="Content">{section.content}</Textarea>
          <Submit />
        </form>
      </Modal>
    </div>
  )
}
