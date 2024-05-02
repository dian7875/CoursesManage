import { useNavigate, useParams } from 'react-router-dom'
import useGetCourseById from '../../Hooks/useGetCourseById';

function DetailsCourse() {

  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };

  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

  return (
    <>
    <div className="container">
    <h1 className=''>Course Details</h1>
     <div className="form-container">
      <form className='Form-Class'>
      
       
          <>
          <div className="item">
              <span>Coruse Id </span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.id || ''}
                className="input-group input"
              />
            </div>


            <div className="item">
              <span>Coruse Name </span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.name || ''}
                className="input-group input"
              />
            </div>


            <div className="item">
              <span>Course Status:</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.status ? 'Active' : 'Inactive'}
                className="input-group input"
              />
            </div>


            <div className="input-group-maximum">
              <span>Maximum Quota</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.maximun_quota || ''}
                className="input-group-maximum input"
              />
            </div>


            <div className="item">
              <span>Space Available</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.space_available || ''}
                className="input-group input"
              />
            </div>


            <div className="item">
              <span>Professor Name:</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.professor || ''}
                className="input-group input"
              />
            </div>


            <div className="item">
              <span>Course Code</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.course_code || ''}
                className="input-group input"
              />
            </div>
           
            <div className="item">
              <span>Classroom Number</span>
              <input
              readOnly
                title="View Field"
                type="text"
                defaultValue={course?.classroom_number || ''}
                className="input-group input"
              />
            </div>



            <button className='cancelButton' type='button' onClick={onCancel}>Back</button>

          
          </>
        </form>
      </div>
      </div>
    </>
  );
}

export default DetailsCourse
