import { useNavigate, useParams } from 'react-router-dom';
import useGetCourseById from '../../Hooks/useGetCourseById';
import './View.css'
import { ButtonCancel } from '../../components/ButtonsForms';
function DetailsCourse() {

  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };

  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };


  return (
    <>
      <div className="MainView">
        <p>Course {course?.id} {course?.course_code} Details</p>
        <form className='Form-View'>
          <div className="view">
            <span>Course Name </span>
            <b>{course?.name || ''}</b>
          </div>
          <div className="view">
            <span>Course Code</span>
            <b>{course?.course_code}</b>
          </div>
          <div className="view">
            <span>Teacher’s Name</span>
            <b>{course?.professor}</b>
          </div>
          <div className="view">
            <span>Current Registration</span>
            <b>{course?.current_registration}/{course?.maximun_quota}</b>
          </div>
          <div className="view">
            <span>Course Status</span>
            <b>{course?.status ? 'Open' : 'Close'}</b>
          </div>
          <div className="view">
            <span>Space Available</span>
            <b>{course?.space_available}</b>
          </div>

          <div className="view">
            <span>Classroom Number</span>
            <b>{course?.classroom_number || ''}</b>
          </div>
          <div className='button_group'>
            <ButtonCancel Title='Back' Event={onCancel} />
          </div>
        </form>
      </div>
    </>
  );
}

export default DetailsCourse
