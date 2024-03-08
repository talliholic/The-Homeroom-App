import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Modal from "../components/modal"
import Input from "../components/form/Input"
import Textarea from "../components/form/Textarea"
import Submit from "../components/form/Submit"
import { useCreateSectionMutation } from "./slice"

export default function AddTopic({ report }) {
  const [open, setOpen] = useState()
  const [createSection, result] = useCreateSectionMutation()

  useEffect(() => {
    if (result.isSuccess) closeModal()
  }, [result])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    createSection({
      body: {
        title: e.target.Title.value.trim(),
        content: e.target.Content.value.trim(),
      },
      id: report.id,
    })
  }

  return (
    <div>
      <FontAwesomeIcon
        style={{ margin: "0px auto", display: "block" }}
        onClick={openModal}
        icon={faAdd}
      />
      <Modal
        open={open}
        onClose={closeModal}
        setOpen={setOpen}
        title="Add topic"
      >
        <form onSubmit={handleSubmit}>
          <Input name="Title" type="text" autoFocus required />
          <Textarea name="Content" required></Textarea>
          <Submit />
        </form>
      </Modal>
    </div>
  )
}
