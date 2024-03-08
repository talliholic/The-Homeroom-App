import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Input from "../components/form/Input"
import Submit from "../components/form/Submit"
import { useUpdateReportMutation } from "./slice"

export default function EditReportDate({ report }) {
  const [open, setOpen] = useState(false)
  const [updateDate, result] = useUpdateReportMutation()

  useEffect(() => {
    if (result.isSuccess) closeModal()
  }, [result])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    updateDate({ body: { date: e.target.Date.value.trim() }, id: report.id })
  }

  return (
    <div>
      <FontAwesomeIcon onClick={openModal} icon={faEdit} />
      <Modal open={open} onClose={closeModal} title="Edit date">
        <form onSubmit={handleSubmit}>
          <Input
            name="Date"
            type="date"
            value={report.date ? report.date.slice(0, 10) : ""}
            autoFocus
            required
          />
          <Submit />
        </form>
      </Modal>
    </div>
  )
}
