import { useNavigate, useParams } from "react-router-dom";
import useGetCourseById from "../../Hooks/useGetCourseById";
import { editCourse } from "../../Services/Courses/CourseService";
import { useForm } from "react-hook-form";
import Course from "../../types/courses";
import {ButtonAcept, ButtonCancel} from '../../components/ButtonsForms';
import "./Edit.css"
import { useEffect } from "react";

function EditCourse() {

  const { id } = useParams<{ id?: string }>();

  const { course } = id ? useGetCourseById(id) : { course: null };

  const { handleSubmit, register, setValue, watch } = useForm<Course>();

useEffect(() => {
  if (course) {
    setValue('name', course.name || '');
    setValue('status', course.status);
    setValue('space_available', course.space_available);
    setValue('maximun_quota', course.maximun_quota);
    setValue('professor', course.professor || '');
    setValue('course_code', course.course_code || '');
    setValue('classroom_number', course.classroom_number);
    setValue('current_registration', course.current_registration);
    setValue('id', course.id||'');
  }
}, [course, setValue]);

const handleCurrentRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const currentRegistration = parseInt(e.target.value) || 0;
  const maximumQuota = watch('maximun_quota');
  const spaceAvailable = maximumQuota - currentRegistration;
  setValue('space_available', spaceAvailable);
};

const handleMaximumQuotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const maximumQuota = parseInt(e.target.value) || 0;
  console.log(maximumQuota)
  const currentRegistration = watch('current_registration');
  const spaceAvailable = maximumQuota - currentRegistration;
  setValue('space_available', spaceAvailable);
 
};
const onSubmit = async (data: Course) => {
  try {
    if (typeof data.current_registration === 'string') {
      data.current_registration = parseInt(data.current_registration) || 0;
    }
    if (typeof data.classroom_number === 'string') {
      data.classroom_number = parseInt(data.classroom_number) || 0;
    }
    if (typeof data.maximun_quota === 'string') {
      data.maximun_quota = parseInt(data.maximun_quota) || 0;
    }
      await editCourse({ data });
  } catch (error) {
      console.error('Error al editar el curso', error);
  }
};

  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

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
            {...register('name')}
          />
          </div>
          <div className="item">
            <span>Course Code</span>
            <input
            title="Edit Field"
            type="text"
            {...register('course_code')}
          />
          </div>
          <div className="item">
            <span>Teachers Name</span>
            <input
            title="Edit Field"
            type="text"
            {...register('professor')}
          />
          </div>
          <div className="item">
            <span>Classroom Number</span>
            <input
            title="Edit Field"
            type="number"
            {...register('classroom_number')}
          />
          </div>
          <div className="item">
            <span>Matricula Actual</span>
            <input
            title="Edit Field"
            type="number"
            {...register('current_registration')}
            onChange={handleCurrentRegistrationChange}
          />
          </div>
          <div className="item">
            <span>Maximum Quota</span>
            <input
            title="Edit Field"
            type="number"
            {...register('maximun_quota')}
            onChange={handleMaximumQuotaChange}
          />
          </div>
          <div className="item">
            <span>Course Status</span>
            <input
            title="Edit Field"
            type="checkbox"
            {...register('status')}
          />
          </div>
          <div className="item">
            <span>Available Space</span>
            <input
            readOnly
            title="Edit Field"
            type="text"
            {...register('space_available')}
          />
          </div>
          <div className="button-group">
          <ButtonCancel Title='Cancel' Event={onCancel}/>
          <ButtonAcept Title='Send'/>
          </div>
          

        </form>
      </div>

    </>
  );
}

export default EditCourse;