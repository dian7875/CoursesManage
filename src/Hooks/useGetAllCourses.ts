import { useContext, useEffect, useState } from "react"
import { getAllCourses } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";

const useGetAllCourses = () => {

    const [courses, setCourses] = useState<Course[]>([])
    const {pageNumber} = useContext(CoursesContext)
    let limit = 10;

    useEffect(()=> {
        (
           async function() {
               const coursesFromService = await getAllCourses(pageNumber, limit);
               setCourses(coursesFromService);
           }
        )()
     },[pageNumber])
  
    return { courses };

}

export default useGetAllCourses