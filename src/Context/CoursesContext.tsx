import React from "react";

const CoursesContext = React.createContext({
   CourseId: '',
  setCourseId: (id: string)=>{},
  pageNumber: 0,
  setPageNumber: (value: number)=>{}
});

export default CoursesContext;