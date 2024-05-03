import { useCallback } from 'react';
import  Course  from '../types/courses'; 
import { createCourse } from '../Services/Courses/CourseService';

export function useSubmitCourse() {
  const onSubmit = useCallback(async (data: Course) => {
    try {
      if (typeof data.classroom_number === 'string') {
        data.classroom_number = parseInt(data.classroom_number) || 0;
      }
      if (typeof data.maximun_quota === 'string') {
        data.maximun_quota = parseInt(data.maximun_quota) || 0;
      }
      data.current_registration = Math.floor(
        Math.random() * (Number(data.maximun_quota))
      );
      data.space_available = data.maximun_quota - data.current_registration;

      await createCourse(data);
    } catch (error) {
      console.error("Error in create course", error);
    }
  }, []);

  return onSubmit;
}