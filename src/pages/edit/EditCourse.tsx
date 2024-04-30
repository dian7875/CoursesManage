import { useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";


function EditCourse() {
  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };
  const space_available = 5;
  return (
    <>
    <span>Edit Course {course?.course_code}</span>
      <div>
        <p>Course ID: {course?.id}</p>
        <p>Course Name: {course?.name}</p>
        <p>Course Code: {course?.course_code}</p>
        <p>Teacher Name; {course?.professor}</p>
        <p>ClassRoom Number: {course?.classroom_number}</p>
        <p>Status: {course?.status}</p>
        <p>Current tuition: {course?.space_available}</p>
        <p>Max Quota Available </p>
        <input title="Macimun Quota of course" type="text" placeholder="Please only Number" value={course?.maximun_quota}/>
        <p>Space Available: {space_available}</p>
        <input title="Space Avaible" type="text" placeholder="Space Available" value={space_available} readOnly/>
        <button>Save Change</button>
        <button>Descard Changes</button>
      </div>


    </>
  );
}

export default EditCourse;