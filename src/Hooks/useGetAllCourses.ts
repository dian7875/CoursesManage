import { useContext, useEffect, useState } from "react"
import { getAllCourses } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";

const useGetAllCourses = () => {

    const [courses, setCourses] = useState<Course[]>([])
    const {pageNumber, limit} = useContext(CoursesContext)

    useEffect(()=> {
        (
           async function() {
               const coursesFromService = await getAllCourses(pageNumber, limit);
               setCourses(coursesFromService);
           }
        )()
     },[pageNumber, limit])
  
    return { courses };

}

export default useGetAllCourses