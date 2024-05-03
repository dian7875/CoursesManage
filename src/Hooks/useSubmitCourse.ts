import { useCallback } from 'react';
import Course from '../types/courses';
import '../components/alerts.css'
import Swal from 'sweetalert2';
import { createCourse } from '../Services/Courses/CourseService';
import { useNavigate } from 'react-router-dom';
import correct from '../components/alerts/correct';
import fail from '../components/alerts/fail';




export function useSubmitCourse() {
  const navigate = useNavigate();
  const onSubmit = useCallback(async (data: Course) => {
    const result = await Swal.fire({
      icon: "info",
      title: `Create Course ${data.course_code} ${data.name}?`,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        cancelButton: "custom-cancel-button",
        confirmButton: "custom-confirm-button",
      },
    });

    if (result.isConfirmed) {
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
        
        correct()
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.error("Error in create course", error);
          fail()
      }
    }
  }, []);

  return onSubmit;
}