import { ReactNode, useState } from "react";
import CoursesContext from "./CoursesContext";

const CourseProvider = ({children}: {children: ReactNode}) => {
    const [CourseId, setCourseId] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPageNumber, setMaxPageNumber]=useState(1)
    const [limit, setLimit] = useState(5)
    const [rowsNumber, setRowNumber] = useState<number>(0);
    return (
      <CoursesContext.Provider value={{CourseId, setCourseId, pageNumber,
      setPageNumber, maxPageNumber, setMaxPageNumber,
      limit, setLimit, rowsNumber, setRowNumber}}>
          {children}
      </CoursesContext.Provider>
    )
  }
  
  export default CourseProvider;