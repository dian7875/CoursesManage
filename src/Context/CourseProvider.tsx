import { ReactNode, useState } from "react";
import CoursesContext from "./CoursesContext";

const CourseProvider = ({children}: {children: ReactNode}) => {
    const [CourseId, setCourseId] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
  
    return (
      <CoursesContext.Provider value={{CourseId, setCourseId, pageNumber, setPageNumber}}>
          {children}
      </CoursesContext.Provider>
    )
  }
  
  export default CourseProvider;