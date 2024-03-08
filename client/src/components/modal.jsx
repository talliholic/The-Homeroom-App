import { createPortal } from "react-dom"
import styles from "./modal.module.css"

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null

  return createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
