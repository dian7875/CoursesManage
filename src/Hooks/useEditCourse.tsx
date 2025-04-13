import { editCourse } from "../Services/Courses/CourseService";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { Course } from "../types/courses";

const useEditCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Course) =>
      toast.promise(editCourse(data), {
        loading: "Loading...",
        success: <span>This course has been successfully edited</span>,
        error: (error: Error) => (
          <span>error when edit the course: {error.message} </span>
        ),
      }),
      onSuccess() {
        queryClient.invalidateQueries("Courses");
      },
  });
}

export default useEditCourse

