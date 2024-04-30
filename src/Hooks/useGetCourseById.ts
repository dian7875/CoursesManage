import { useEffect, useState } from "react"
import {  getCourseById } from "../Services/Courses/CourseService"
import Course from "../types/courses";


const useGetCourseById = (id: string) => {

    const [course, setCourse] = useState<Course[]>([])

    useEffect(() => {
        (
           async function() {
               const course = await getCourseById(id);
               setCourse(course);
           }
        )()
     },[id])
  
    return { course };
}

export default useGetCourseById