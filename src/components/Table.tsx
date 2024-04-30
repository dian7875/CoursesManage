import { Link, useNavigate } from "react-router-dom";
import useGetAllCourses from "../Hooks/useGetAllCourses";
import Course from "../types/courses";

import Pager from "./Pager";
import "./table.css";

function Table() {
  const { courses }: { courses: Course[] } = useGetAllCourses();

  return (
    <>
      <div className="main">
        <table className="Table-container">
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className="cap2">
            <Link to={'/create'}>
            <button className="text-sm bg-cyan-900 text-white py-1 px-2 rounded-lg shadow-lg">Agregar nuevo</button>
            </Link>
          </caption>
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
                <td>
                  {course.status ? (
                    <div className="CourseStatus">Open</div>
                  ) : (
                    <div className="CourseStatus">Closed</div>
                  )}
                </td>
                <td>{course.space_available}</td>
                {/* Buttons */}
                <div className="flex gap-2 mt-3">

                <Link to={`/view/${course.id}`}>
                  <button className="text-sm bg-cyan-900 text-white px-2 py-1 rounded-lg shadow-lg">View</button>
                </Link>
                <Link to={`/edit/${course.id}`}>
                  <button className="text-sm bg-cyan-900 text-white px-2 py-1 rounded-lg shadow-lg">Edit</button>
                </Link>

                <button className="text-sm bg-cyan-900 text-white px-2 py-1 rounded-lg shadow-lg">Delete</button>
                </div>
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
