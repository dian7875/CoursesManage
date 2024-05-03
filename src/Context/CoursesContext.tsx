import React from "react";

const CoursesContext = React.createContext({
   CourseId: '',
  setCourseId: (id: string)=>{},
  pageNumber: 0,
  setPageNumber: (value: number)=>{},
  maxPageNumber: 0,
  setMaxPageNumber: (value: number)=>{},
  limit:0,
  setLimit:(value:number)=>{},
});

export default CoursesContext;