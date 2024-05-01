import { useNavigate, useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";
import { editCourse } from "../../Services/Courses/CourseService";
import { useForm } from "react-hook-form";
import Course from "../../types/courses";
import "./Edit.css"

function EditCourse() {

  const { id } = useParams<{ id?: string }>();

  const { course } = id ? useGetCourseById(id) : { course: null };

  const space_available = 5;



  const onSubmit = async (data: any) => {
    try {
      await editCourse(data);

    } catch (error) {
      console.error('Error in create course', error);
    }
  };
  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/');
  };

  const { handleSubmit } = useForm<Course>();

  return (
    <>
      <div className="MainEdit">
        <p>Edit Course</p>
        <form className='Form-Edit'
          onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <span>Coruse Name </span>
            <input title="Edit Field" type="text" value={course?.name}/>
          </div>
          <div className="item">
            <span>Course Code</span>
            <input title="Edit Field" type="text" value={course?.course_code} />
          </div>
          <div className="item">
            <span>Teachers Name</span>
            <input title="Edit Field" type="text" value={course?.professor}/>
          </div>
          <div className="item">
            <span>Classroom Number</span>
            <input title="Edit Field" type="text" value={course?.classroom_number} />
          </div>
          <div className="item">
            <span>Matricula Actual</span>
            <input title="Edit Field" type="text" value={course?.space_available} />
          </div>
          <div className="item">
            <span>Maximum Quota</span>
            <input title="Edit Field" type="text" value={course?.maximun_quota} />
          </div>
          <div className="item">
            <span>Course Status</span>
            <input title="Edit Field" type="text" value={"Tengo que pensar como manejarlo aun"} />
          </div>
          <div className="item">
            <span>Availanle Space</span>
            <input title="Edit Field" type="text" value={space_available} />
          </div>
          <button type="submit">Send</button>
          <button type='button' onClick={onCancel}>Cancel</button>
        </form>
      </div>

    </>
  );
}

export default EditCourse;