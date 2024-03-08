import Input from "../form/Input"
import Textarea from "../form/Textarea"
import DeleteTopic from "./DeleteTopic"

export default function ReportTopic({
  i,
  topic,
  deleteTopic,
  editTopic,
  topics,
}) {
  const handleInputChange = e => {
    editTopic(topic.id, { ...topic, title: e.target.value.trim() })
  }

  const handleTextareaChange = e => {
    editTopic(topic.id, { ...topic, content: e.target.value.trim() })
  }

  return (
    <div>
      <Input
        onChange={handleInputChange}
        name={`Topic ${i + 1}`}
        value={topic.title}
        type="text"
        required
      />
      <Textarea
        onChange={handleTextareaChange}
        name={`${topic.title}'s content`}
        rows="5"
        required
      >
        {topic.content}
      </Textarea>
      <DeleteTopic deleteTopic={deleteTopic} topic={topic} />
    </div>
  )
}
