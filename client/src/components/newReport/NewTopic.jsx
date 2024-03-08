import { useState } from "react"
import Modal from "../modal"
import Input from "../form/Input"
import Textarea from "../form/Textarea"
import Submit from "../form/Submit"

export default function NewTopic({ addTopic }) {
  const [open, setOpen] = useState(false)

  const openModal = e => {
    e.preventDefault()
    setOpen(true)
  }

  const closeModal = () => setOpen(false)

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    const title = e.target.Title.value.trim()
    const content = e.target.Content.value.trim()
    addTopic({
      id: Date.now(),
      title,
      content,
    })
    closeModal()
  }

  return (
    <>
      <a onClick={openModal} className="form-link" href="">
        Add topic
      </a>
      <Modal open={open} onClose={closeModal} title="Add topic">
        <form onSubmit={handleSubmit}>
          <Input name="Title" type="text" required />
          <Textarea name="Content" required></Textarea>
          <Submit />
        </form>
      </Modal>
    </>
  )
}
