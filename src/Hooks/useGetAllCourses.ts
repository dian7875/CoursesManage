import { useEffect, useState } from "react"
import { getAllCourses } from "../Services/Courses/CourseService"
import Course from "../types/courses";

const useGetAllCourses = () => {
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(()=> {
        (
           async function() {
               const coursesFromService = await getAllCourses();
               setCourses(coursesFromService);
           }
        )()
     },[])
  
    return { courses };
}

export default useGetAllCourses