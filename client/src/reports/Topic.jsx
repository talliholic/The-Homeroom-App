import { useState } from "react"
import Modal from "../components/modal"

export default function Topic({ section }) {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  return (
    <>
      <button onClick={onOpen}>{section.title}</button>
      <Modal open={open} onClose={onClose} title={section.title}>
        <div className="content">{section.content}</div>
      </Modal>
    </>
  )
}
