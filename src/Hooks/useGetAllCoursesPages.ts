import { useContext, useEffect } from "react"
import { getAllCoursesPages } from "../Services/Courses/CourseService"
import CoursesContext from "../Context/CoursesContext";
import useGetAllCourses from "./useGetAllCourses";

const useGetAllCoursesPages = () => {
    const { maxPageNumber, setMaxPageNumber, limit} = useContext(CoursesContext);
    const { refreshCourses } = useGetAllCourses(); 
    useEffect(() => {

        const fetchData = async () => {
            const coursesFromService = await getAllCoursesPages();
            const totalPages = Math.ceil(coursesFromService.length / limit);
            if(totalPages===0){
                setMaxPageNumber(totalPages+1)
            }else{
                setMaxPageNumber(totalPages);
            }
        };

        fetchData();

    }, [limit, setMaxPageNumber, refreshCourses]);
    return { maxPageNumber };
};

export default useGetAllCoursesPages;