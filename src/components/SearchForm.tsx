import React, { useState } from 'react';
import {  searchCourse } from '../Services/Courses/CourseService';
import searchIcon from '../assets/busqueda.png';
import Course from '../types/courses';


type Props = {
  setFilteredCourses: (courses: Course[]) => void;
  refreshCurrentPage: () => void;
};

function SearchForm({ setFilteredCourses, refreshCurrentPage  }: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value === '') {
      refreshCurrentPage();
    } else {
      const courses = await searchCourse(value);
      setFilteredCourses(courses);
    }
  };

  return (
    <div className="Search-container">
      <img src={searchIcon} alt="Search icon" className="search-icon" />

      <input className='Search-input'
        type="text"
        placeholder="Search by course name"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchForm;