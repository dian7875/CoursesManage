import { useNavigate, useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";


function EditCourse() {
  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };
  const space_available = 5;
  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/');
  };
  return (
    <>
    <span>Edit Course Id: {course?.id}</span>
      <form>
        <p>Course Name:</p>
        <input title="CourseName" type="text" 
        value={course?.name} />
        <p>Course Code:</p>
        <input title="Course Code" type="text" 
        value={course?.course_code} />
        <p>Teacher Name:</p>
        <input title="Professor Name" type="text" 
        value={course?.professor} />
        <p>ClassRoom Number:</p>
        <input title="Classroom Number" type="text" 
        value={course?.classroom_number} />
        <p>Status: {course?.status}</p>
        <p>Current tuition: {course?.space_available}</p>
        <input title="CourseName" type="text" 
        value={course?.name} />
        <p>Max Quota Available </p>
        <input title="Macimun Quota of course" type="text"
        value={course?.maximun_quota}/>
        <p>Space Available: {space_available}</p>
        <input title="Space Avaible" type="text"
        value={space_available} readOnly/>
        <button>Save Change</button>
        <button onClick={onCancel}>Descard Changes</button>
      </form>


    </>
  );
}

export default EditCourse;