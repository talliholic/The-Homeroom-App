import { useState, useEffect } from "react"
import { setStudentId } from "../../appSlice"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ReportForm from "./Form"
import {
  useCreateReportMutation,
  useCreateSectionMutation,
} from "../../reports/slice"

export default function NewReport() {
  const dispatch = useDispatch()
  const { studentId } = useParams()
  const [topics, setTopics] = useState([])
  const [createReport, createReportResult] = useCreateReportMutation()
  const [createSection, createSectionResult] = useCreateSectionMutation()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setStudentId(studentId))
  }, [])

  useEffect(() => {
    if (createReportResult.isSuccess && topics) {
      const results = []
      topics.forEach(topic => {
        createSection({
          body: { title: topic.title, content: topic.content },
          id: createReportResult.data.result.insertId,
        })
        if (createSectionResult.isSuccess) results.push(true)
        else results.push(false)
      })
      //Finish up error handling
      navigate(`/student/${studentId}`)
    }
  }, [createReportResult])

  const addTopic = topic => setTopics(prev => [...prev, topic])

  const editTopic = (id, topic) => {
    const index = topics.findIndex(topic => topic.id === id)
    const newTopics = topics
    newTopics[index] = topic
    setTopics(newTopics)
  }

  const deleteTopic = id =>
    setTopics(prev => prev.filter(topic => topic.id !== id))

  const handleSubmitForm = e => {
    e.preventDefault()
    const date = e.target.Date.value
    const title = e.target.Title.value.trim()
    const conclusions = e.target.Conclusions.value.trim()
    createReport({ body: { date, title, conclusions }, studentId })
  }

  return (
    <main>
      <ReportForm
        topics={topics}
        deleteTopic={deleteTopic}
        editTopic={editTopic}
        addTopic={addTopic}
        handleSubmitForm={handleSubmitForm}
      />
    </main>
  )
}
