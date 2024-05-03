import { useEffect, useState } from "react"
import {  getCourseById } from "../Services/Courses/CourseService"
import Course from "../types/courses";


const useGetCourseById = (id: string) => {

    const [course, setCourse] = useState<Course| null>(null)

    useEffect(() => {
        (
           async function() {
               const courseObjet = await getCourseById(id);
               setCourse(courseObjet);

           }
        )
     },[id])
  
    return { course };
}

export default useGetCourseById

