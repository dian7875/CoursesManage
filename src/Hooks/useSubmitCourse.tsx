import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { Course } from "../types/courses";
import { createCourse } from "../Services/Courses/CourseService";

const useSubmitCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Course) =>
      toast.promise(createCourse(data), {
        loading: "Loading...",
        success: <span>course added successfully</span>,
        error: (error: Error) => (
          <span>error when creating course: {error.message} </span>
        ),
      }),
      onSuccess() {
        queryClient.invalidateQueries("Courses");
      },
  });
};

export default useSubmitCourse;
