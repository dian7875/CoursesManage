import { useNavigate, useParams } from 'react-router-dom';
import useGetCourseById from '../../Hooks/useGetCourseById';
import './View.css'

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
    <p>Course Details</p>
      <form className='Form-View'>
       
          <div className="item">
              <span>Coruse Id </span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.id || ''}
              />
            </div>


            <div className="item">
              <span>Coruse Name </span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.name || ''}
              />
            </div>


            <div className="item">
              <span>Course Status:</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.status ? 'Active' : 'Inactive'}
              />
            </div>


            <div className="item">
              <span>Maximum Quota</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.maximun_quota || ''}
              />
            </div>


            <div className="item">
              <span>Space Available</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.space_available || ''}
              />
            </div>


            <div className="item">
              <span>Professor Name:</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.professor || ''}
              />
            </div>


            <div className="item">
              <span>Course Code</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.course_code || ''}
              />
            </div>
           
            <div className="item">
              <span>Classroom Number</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.classroom_number || ''}
              />
            </div>
            <div className='button-group'>
            <button className='cancelButton' type='button' onClick={onCancel}>Back</button>
            </div>
          

        </form>
      </div>
    </>
  );
}

export default DetailsCourse
