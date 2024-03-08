import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Submit from "../components/form/Submit"
import { useUpdateReportMutation } from "./slice"
import Textarea from "../components/form/Textarea"

export default function EditReportConclusions({ report }) {
  const [open, setOpen] = useState(false)
  const [updateConclusions, result] = useUpdateReportMutation()

  useEffect(() => {
    if (result.isSuccess) closeModal()
  }, [result])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    updateConclusions({
      body: { conclusions: e.target.Conclusions.value.trim() },
      id: report.id,
    })
  }

  return (
    <div>
      <FontAwesomeIcon onClick={openModal} icon={faEdit} />
      <Modal open={open} onClose={closeModal} title="Edit conclusions">
        <form onSubmit={handleSubmit}>
          <Textarea autoFocus name="Conclusions">
            {report.conclusions}
          </Textarea>
          <Submit />
        </form>
      </Modal>
    </div>
  )
}
