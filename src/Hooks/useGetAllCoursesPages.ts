import { useContext, useEffect } from "react"
import { getAllCoursesPages } from "../Services/Courses/CourseService"
import CoursesContext from "../Context/CoursesContext";

const useGetAllCoursesPages = () => {
    const { maxPageNumber, setMaxPageNumber, limit} = useContext(CoursesContext);

    useEffect(() => {

        const fetchData = async () => {
            const coursesFromService = await getAllCoursesPages();
            const totalPages = Math.ceil(coursesFromService.length / limit);
            setMaxPageNumber(totalPages);
        };

        fetchData();

    }, [limit, setMaxPageNumber]);
    return { maxPageNumber };
};

export default useGetAllCoursesPages;