import EditReportTitle from "./EditReportTitle"
import EditReportDate from "./EditReportDate"
import Topic from "./Topic"
import { useReadSectionsQuery } from "./slice"
import EditReportTopic from "./EditReportTopic"
import EditReportConclusions from "./EditReportConclusions"
import AddTopic from "./AddTopic"
import DeleteTopic from "./deleteTopic"
import DeleteReport from "./DeleteReport"

export default function ReportCard({ report }) {
  const { data: sections, isLoading } = useReadSectionsQuery(report.id)

  if (!isLoading)
    return (
      <div className="card">
        <div style={alignItems}>
          <EditReportTitle report={report} />
          <h2 style={{ margin: "0px 20px" }}>{report.title}</h2>
          <DeleteReport report={report} />
        </div>
        <div style={alignItems}>
          <small>{report.date ? report.date.slice(0, 10) : ""}</small>
          <span>
            <EditReportDate report={report} />
          </span>
        </div>
        <div className="buttons">
          {sections &&
            sections.map(section => (
              <div key={section.id} style={alignItems}>
                <EditReportTopic section={section} />
                <Topic section={section} />
                <DeleteTopic section={section} />
              </div>
            ))}
          <AddTopic report={report} />
        </div>
        <div style={alignItems}>
          <p>{report.conclusions}</p>
          <EditReportConclusions report={report} />
        </div>
      </div>
    )
}

const alignItems = { display: "flex", alignItems: "center" }
