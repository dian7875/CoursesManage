import Swal from "sweetalert2";
import "../components/alerts/alerts.css"
import { deleteCourse } from "../Services/Courses/CourseService";
import { fail, recharged } from "../components/alerts/alerts";

const useDelete = async (id: string, refreshCourses: () => void): Promise<void> => {
  try {
    const result = await Swal.fire({
      icon: 'info',
      title: 'Are you sure you want to do this action?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        cancelButton: 'custom-cancel-button',
        confirmButton: 'custom-confirm-button',
      },
    });

    if (result.isConfirmed) {
      await deleteCourse(id);
      recharged();
      setTimeout(() => {
          refreshCourses();
      }, 5000);
    }
  } catch (error) {
    console.error('Error occurred during deletion:', error);
    fail();
  }
};

export default useDelete;


