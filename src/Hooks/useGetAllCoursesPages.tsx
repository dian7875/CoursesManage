import { useContext, useEffect, useState } from "react"
import { getAllCoursesPages } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";

const useGetAllCoursesPages = () => {
    
    const [courses,] = useState<Course[]>([])
    const {maxPageNumber,setMaxPageNumber, limit} = useContext(CoursesContext)

    useEffect(()=> {
        (
           async function() {
               const coursesFromService = await getAllCoursesPages();
               setMaxPageNumber(coursesFromService);
           }
        )()
     },[maxPageNumber,limit])
  
    return { courses };


}

export default useGetAllCoursesPages
