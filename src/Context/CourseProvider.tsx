import { ReactNode, useState } from "react";
import CoursesContext from "./CoursesContext";

const CourseProvider = ({children}: {children: ReactNode}) => {
    const [CourseId, setCourseId] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPageNumber, setMaxPageNumber]=useState(0)
    const [limit, setLimit] = useState(5)
    return (
      <CoursesContext.Provider value={{CourseId, setCourseId, pageNumber, setPageNumber, maxPageNumber, setMaxPageNumber, limit, setLimit}}>
          {children}
      </CoursesContext.Provider>
    )
  }
  
  export default CourseProvider;