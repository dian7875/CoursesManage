import { Link } from "react-router-dom";
import useGetAllCourses from "../Hooks/useGetAllCourses";
import Pager from "./Pager";
import "./table.css";
import Buttoms from "./Buttoms";

import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import useGetAllCoursesPages from "../Hooks/useGetAllCoursesPages";

function Table() {


  const { courses, refreshCourses } = useGetAllCourses();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const { maxPageNumber} = useGetAllCoursesPages();

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

 
  return (
    <>
      <div className="main">
      
        <table className="Table-container">
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className="Search-Caption"><SearchForm courses={courses} setFilteredCourses={setFilteredCourses} /></caption>
          <caption className="cap2">
            <Link to={'/create'}>
              <button  className="text-sm hover:bg-cyan-700 bg-cyan-900	 text-white py-2 px-1 rounded-lg shadow-lg">Agregar nuevo</button>
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
          {filteredCourses.map((course) => (
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
                <Buttoms id={course.id}  refreshCourses={refreshCourses}  />
              </tr>
            ))}
          </tbody>
        </table>
        <Pager maxPageNumber={maxPageNumber} />
      </div>
    </>
  );
}

export default Table;
