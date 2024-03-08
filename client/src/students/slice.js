import { apiSlice } from "../apiSlice"

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    readStudent: builder.query({
      query: id => ({
        url: `students/${id}`,
        credentials: "include",
      }),
      providesTags: ["student"],
    }),
    readStudents: builder.query({
      query: () => ({
        url: "students",
        credentials: "include",
      }),
      providesTags: ["students"],
    }),
    createStudents: builder.mutation({
      query: body => ({
        url: "students",
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["students"],
    }),
    updateStudent: builder.mutation({
      query: ({ body, id }) => ({
        url: `students/${id}`,
        method: "PATCH",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["students"],
    }),
    deleteStudent: builder.mutation({
      query: id => ({
        url: `students/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["students"],
    }),
  }),
})

export const {
  useReadStudentsQuery,
  useReadStudentQuery,
  useCreateStudentsMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApiSlice
