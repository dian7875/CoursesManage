import { Link } from "react-router-dom";
import useGetAllCourses from "../Hooks/useGetAllCourses";
import Course from "../types/courses";

import Pager from "./Pager";
import "./table.css";
import Buttoms from "./Buttoms";

function Table() {


  const { courses }: { courses: Course[] } = useGetAllCourses();

  return (
    <>
      <div className="main">
        <table className="Table-container">
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className="cap2">
            <Link to={'/create'}>
              <button className="text-sm hover:bg-cyan-700 bg-cyan-900	 text-white py-2 px-1 rounded-lg shadow-lg">Agregar nuevo</button>
            </Link>
          </caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Teacher’s Name</th>
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
                <td>{course.professor}</td>
                <td>{course.name}</td>
                <td className="columStatus" >
                  {course.status ? (
                    <div className="CourseStatus">Open</div>
                  ) : (
                    <div className="CourseStatus">Closed</div>
                  )}
                </td>
                  <td>{course.space_available}</td>
                <Buttoms id={course.id} />
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
