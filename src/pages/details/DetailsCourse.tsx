import { useParams } from 'react-router-dom'
import useGetUserById from '../../Hooks/useGetCourseById';
function DetailsCourse() {
  
  let {id} = useParams(); 
  
  useGetUserById("1");


  const handleNextClick = () => {
    console.log(id)
  };
  

  return (      
    <>
 <h1 className='add-course'>Add Course</h1>
    <div className="form-container">
      <form className='Form-Class'>
        <label htmlFor="name">Course Name</label>
        <input type="text" id='name'/>

        <label htmlFor="status">Course Status</label>
        <input type="checkbox" id='status'/>

        <label htmlFor="maximun_quota">Maximum Quota</label>
        <input onChange={handleNextClick} type="number" id='maximun_quota'  />


        <label htmlFor="space_available">Space Available</label>
        <input type="number" id='space_available'  readOnly />


        <label htmlFor="professor">Professor Name</label>
        <input type="text" id='professor' />

        <label htmlFor="course_code"> Course Code</label>
        <input type="text" id='course_code'/>

        <label htmlFor="classroom_number">Classroom Number</label>
        <input type="number" id='classroom_number'/>

        <button type="submit">Send</button>
        <button type='button'>Cancel</button>
      </form>
    </div>
    </>
  )
}

export default DetailsCourse
