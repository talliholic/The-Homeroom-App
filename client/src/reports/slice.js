import { apiSlice } from "../apiSlice"

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    readReports: builder.query({
      query: student_id => ({
        url: `reports/${student_id}`,
        credentials: "include",
      }),
      providesTags: ["reports"],
    }),
    readSections: builder.query({
      query: report_id => ({
        url: `reports/${report_id}/sections`,
        credentials: "include",
      }),
      providesTags: ["sections"],
    }),
    updateReport: builder.mutation({
      query: ({ body, id }) => ({
        url: `reports/${id}`,
        method: "PATCH",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["reports"],
    }),
    updateSection: builder.mutation({
      query: ({ body, id }) => ({
        url: `reports/section/${id}`,
        method: "PATCH",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["sections"],
    }),
    createSection: builder.mutation({
      query: ({ body, id }) => ({
        url: `reports/${id}/sections`,
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["sections"],
    }),
    createReport: builder.mutation({
      query: ({ body, studentId }) => ({
        url: `reports/${studentId}`,
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["reports"],
    }),
    deleteSection: builder.mutation({
      query: id => ({
        url: `reports/section/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["sections"],
    }),
    deleteReport: builder.mutation({
      query: id => ({
        url: `reports/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["reports"],
    }),
  }),
})

export const {
  useReadReportsQuery,
  useReadSectionsQuery,
  useUpdateReportMutation,
  useUpdateSectionMutation,
  useCreateSectionMutation,
  useCreateReportMutation,
  useDeleteSectionMutation,
  useDeleteReportMutation,
} = studentsApiSlice
