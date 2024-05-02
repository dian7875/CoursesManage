import { useNavigate, useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";
import { editCourse } from "../../Services/Courses/CourseService";
import { useForm } from "react-hook-form";
import Course from "../../types/courses";
import "./Edit.css"

function EditCourse() {

  const { id } = useParams<{ id?: string }>();

  const { course } = id ? useGetCourseById(id) : { course: null };

 
  const MatriculaActual = course?.space_available;
  const maximaCapacidad = course?.maximun_quota;
  let space_available;

if (typeof maximaCapacidad === 'number' && typeof MatriculaActual === 'number') {
  space_available = maximaCapacidad - MatriculaActual;
} else {
  space_available = 0;
}

  const onSubmit = async (data: any) => {
    try {
      data.id = id;
     await editCourse(data);
    } catch (error) {
      console.error('Error in EDIT course', error);
    }
  };
  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

  const { handleSubmit, register } = useForm<Course>();

  return (
    <>
      <div className="MainEdit">
        <p>Edit Course {course?.id}{course?.course_code}</p>
        <form className='Form-Edit'
          onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <span>Coruse Name </span>
            <input
              title="Edit Field"
              type="text"
              defaultValue={course?.name || ''}
              {...register('name')}
            />
          </div>
          <div className="item">
            <span>Course Code</span>
            <input title="Edit Field"
              type="text"
              defaultValue={course?.course_code || ''}
              {...register('course_code')} />
          </div>
          <div className="item">
            <span>Teachers Name</span>
            <input title="Edit Field"
              type="text"
              defaultValue={course?.professor|| ''}
              {...register('professor')}/>
          </div>
          <div className="item">
            <span>Classroom Number</span>
            <input title="Edit Field"
              type="text"
              defaultValue={course?.classroom_number || ''}
              {...register('classroom_number')} />
          </div>
          <div className="item">
            <span>Matricula Actual</span>
            <input title="Edit Field"
              type="text"
              defaultValue={course?.space_available || ''}
              {...register('space_available')}/>
          </div>
          <div className="item">
            <span>Maximum Quota</span>
            <input title="Edit Field"
              type="text"
              defaultValue={course?.maximun_quota || ''}
              {...register('maximun_quota')} />
          </div>
          <div className="item">
            <span>Course Status</span>
            <input title="Edit Field" type="checkbox" />
          </div>
          <div className="item">
            <span>Available Space</span>
            <input readOnly title="Edit Field" type="text" value={space_available}/>
          </div>
          <button type="submit">Send</button>
          <button type='button' onClick={onCancel}>Cancel</button>
        </form>
      </div>

    </>
  );
}

export default EditCourse;