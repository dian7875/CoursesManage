import React from "react";

const CoursesContext = React.createContext({
  CourseId: '',
  setCourseId: (_id: string)=>{},
  pageNumber: 0,
  setPageNumber: (_value: number)=>{},
  maxPageNumber: 0,
  setMaxPageNumber: (_value: number)=>{},
  limit:0,
  setLimit:(_value:number)=>{},
  rowsNumber:0,
   setRowNumber:(_value:number)=>{}
});

export default CoursesContext;