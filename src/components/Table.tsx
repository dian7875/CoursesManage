import useGetAllCourses from '../Hooks/useGetAllCourses';
import Course from '../types/courses';
import Pager from './Pager';
import "./table.css"

function Table() {
  const { courses }: { courses: Course[] } = useGetAllCourses();
  return (
    <>
      <div className='main'>
        <table className='Table-container'>
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className='cap2'><button>Agregar nuevo</button></caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name </th>
              <th>Course Status</th>
              <th>Space Avaible</th>
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