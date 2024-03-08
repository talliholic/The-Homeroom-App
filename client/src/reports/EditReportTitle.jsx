import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Input from "../components/form/Input"
import Submit from "../components/form/Submit"
import { useUpdateReportMutation } from "./slice"

export default function EditReportTitle({ report }) {
  const [open, setOpen] = useState(false)
  const [updateTitle, result] = useUpdateReportMutation()

  useEffect(() => {
    if (result.isSuccess) closeModal()
  }, [result])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    updateTitle({ body: { title: e.target.Title.value.trim() }, id: report.id })
  }

  return (
    <div>
      <FontAwesomeIcon onClick={openModal} icon={faEdit} />
      <Modal open={open} onClose={closeModal} title="Edit title">
        <form onSubmit={handleSubmit}>
          <Input
            name="Title"
            type="text"
            value={report.title}
            autoFocus
            required
          />
          <Submit />
        </form>
      </Modal>
    </div>
  )
}
