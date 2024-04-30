
import { useNavigate } from 'react-router-dom';
import useGetAllCourses from '../Hooks/useGetAllCourses';
import Course from '../types/courses';
import Pager from './Pager';
import "./table.css"

function Table() {
  const { courses }: { courses: Course[] } = useGetAllCourses();
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/form');
  };
  return (
    <>
      <div className='main'>
        <table className='Table-container'>
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className='cap2'><button onClick={handleAddNew}>Agregar nuevo</button></caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name </th>
              <th>Course Status</th>
              <th>Space Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.status ? <div className='CourseStatus'>Open</div> : <div className='CourseStatus'>Closed</div>}</td>
                <td>{course.space_available}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pager />
      </div>
    </>
  );
}

export default Table;