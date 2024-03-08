export default function DeleteTopic({ deleteTopic, topic }) {
  const handleClick = e => {
    e.preventDefault()
    deleteTopic(topic.id)
  }

  return (
    <>
      <a onClick={handleClick} href="" className="form-link">
        Delete {topic.title}
      </a>
    </>
  )
}
