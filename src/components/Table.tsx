import { Link } from "react-router-dom";
import useGetAllCourses from "../Hooks/useGetAllCourses";
import Pager from "./Pager";
import "./table.css";
import Buttoms from "./Buttoms";
import SearchForm from "./SearchForm";
import { useContext, useEffect, useState } from "react";
import useGetAllCoursesPages from "../Hooks/useGetAllCoursesPages";
import CoursesContext from "../Context/CoursesContext";


function Table() {
  const { courses, refreshCourses } = useGetAllCourses();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const { maxPageNumber} = useGetAllCoursesPages();
  const {pageNumber, setPageNumber} = useContext(CoursesContext)
  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  useEffect(()=>
  {
    console.table(courses)
    if(courses.length == 0 && pageNumber>1 )
      setPageNumber(pageNumber-1);
     //maxPageNumber = (maxPageNumber-1) esta parte max page number viene de contex, tambuen del use
  }
  ,[refreshCourses])


  return (
    <>
      <div className="main">
        <table id="TablaResults" className="Table-container">
          <caption>List Of Courses Of University Three Duckling</caption>
          <caption className="Search-Caption"><SearchForm courses={courses} setFilteredCourses={setFilteredCourses} /></caption>
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
                  <td>
                <Buttoms id={course.id}  refreshCourses={refreshCourses}  />
                  </td>
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
