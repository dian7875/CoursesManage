import { useEffect, useState } from "react";
import { editCourse } from "../Services/Courses/CourseService";
import Course from "../types/courses";
import useGetCourseById from "./useGetCourseById";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { correct, fail } from "../components/alerts/alerts";

const useEditCourse = (courseId: string) => {
    const { course } = useGetCourseById(courseId);
    const { handleSubmit,
       register,
        setValue, watch } = useForm<Course>({
  
        });
    const navigate = useNavigate();
    const [status, setStatus] = useState<boolean>(true);
  
    
    useEffect(() => {
      if (course) {
        setValue('name', course.name || '');
        setValue('status', course.status);
        setValue('space_available', course.space_available);
        setValue('maximun_quota', course.maximun_quota);
        setValue('professor', course.professor || '');
        setValue('course_code', course.course_code || '');
        setValue('classroom_number', course.classroom_number);
        setValue('current_registration', course.current_registration);
        setValue('id', course.id || '');
      }
    }, [course, setValue]);
  
    const handleCurrentRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentRegistration = parseInt(e.target.value) || 0;
      const maximumQuota = watch('maximun_quota');
      const spaceAvailable = maximumQuota - currentRegistration;
      setValue('space_available', spaceAvailable);
    };
  
    const handleMaximumQuotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const maximumQuota = parseInt(e.target.value) || 0;
      const currentRegistration = watch('current_registration');
      const spaceAvailable = maximumQuota - currentRegistration;
      setValue('space_available', spaceAvailable);
    };
  
    const toggleStatus = () => {
      setStatus(!status);
      if (status) {
        setValue('status', true)
      } else {
        setValue('status', false)
      }
    };
  
    const onSubmit = async (data: Course) => {
      try {
        if (typeof data.current_registration === 'string') {
          data.current_registration = parseInt(data.current_registration) || 0;
        }
        if (typeof data.classroom_number === 'string') {
          data.classroom_number = parseInt(data.classroom_number) || 0;
        }
        if (typeof data.maximun_quota === 'string') {
          data.maximun_quota = parseInt(data.maximun_quota) || 0;
        }
        await editCourse({data});
        correct();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.error('Error al editar el curso', error);
        fail()
      }
    };
  
    return {
      handleSubmit,
      register,
      handleCurrentRegistrationChange,
      handleMaximumQuotaChange,
      toggleStatus,
      onSubmit,
      course,
      navigate
    };
  };
  
  export default useEditCourse