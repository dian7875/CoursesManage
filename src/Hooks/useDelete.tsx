import { useMutation, useQueryClient } from "react-query";
import { deleteCourse } from "../Services/Courses/CourseService";
import toast from "react-hot-toast";

const useDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      toast.promise(deleteCourse(id), {
        loading: "Loading...",
        success: <span>Course deleted successfully</span>,
        error: (error: Error) => (
          <span>Error occurred during deletion:course: {error.message} </span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Courses");
    },
  });
};

export default useDelete;
