import React from 'react';
import Course from "../types/courses";


type Props = {
  courses: Course[];
  setFilteredCourses: (courses: Course[]) => void;
};

function SearchForm({ courses, setFilteredCourses }: Props) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    if (value === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => course.name.toLowerCase().includes(value));
      setFilteredCourses(filtered);
    }
  };

  return (
    
<div className="search-container">
<img src="/src/assets/busqueda.png" alt="Search icon" className="search-icon" />
    <input 
        className='Search-input'
        onChange={handleSearch} 
        placeholder="Search by Name Course" 
    />
</div>
  );
}

export default SearchForm;