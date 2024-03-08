import Input from "../form/Input"
import Textarea from "../form/Textarea"
import Submit from "../form/Submit"
import NewTopic from "./NewTopic"
import ReportTopic from "./Topic"

export default function ReportForm({
  topics,
  deleteTopic,
  editTopic,
  addTopic,
  handleSubmitForm,
}) {
  return (
    <section>
      <form method="POST" onSubmit={handleSubmitForm}>
        <Input name="Date" type="date" autoFocus required />
        <Input name="Title" type="text" required />
        {topics.map((topic, i) => (
          <ReportTopic
            i={i}
            deleteTopic={deleteTopic}
            editTopic={editTopic}
            key={topic.id}
            topic={topic}
            topics={topics}
          />
        ))}
        <NewTopic addTopic={addTopic} />
        <Textarea name="Conclusions" required></Textarea>
        <Submit />
      </form>
    </section>
  )
}
