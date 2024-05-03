import { getAllCourses } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";
import { useContext, useEffect, useState } from "react";

const useGetAllCourses = () => {

    const [courses, setCourses] = useState<Course[]>([])
    const {pageNumber, limit} = useContext(CoursesContext)

    const getCourses = async () => {
        const coursesFromService = await getAllCourses(pageNumber, limit);
        setCourses(coursesFromService);
    };

    useEffect(()=> {
        getCourses();
    },[pageNumber, limit])
  
    return { courses, refreshCourses: getCourses };

}

export default useGetAllCourses