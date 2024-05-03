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
    <form>
      <input 
        onChange={handleSearch} 
        placeholder="Course Code" 
      />
    </form>
  );
}

export default SearchForm;