import ReportCard from "./Card"
import { useReadReportsQuery } from "./slice"

export default function Reports({ studentId }) {
  const { data, isLoading } = useReadReportsQuery(studentId)

  if (!isLoading)
    return (
      <main>
        <section>
          {data.map(report => (
            <ReportCard key={report.id} report={report} />
          ))}
        </section>
      </main>
    )
}
