import { useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";


function EditCourse() {
  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };

  return (
    <>
      
        <p>Profesor del curso: {course?.professor}</p>
     
    </>
  );
}

export default EditCourse;