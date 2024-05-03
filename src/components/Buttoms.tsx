
import { Link } from 'react-router-dom'

import "./alert.css"
import Swal from 'sweetalert2';
import { deleteCourse } from '../Services/Courses/CourseService';


const Buttoms = ({ id ,refreshCourses}: { id: string, refreshCourses: () => void }) => {
  const handleAlert = async () => {
    const result = await Swal.fire({
      icon: "info",
      title: "Are you sure about to do this action?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        cancelButton: "custom-cancel-button",
        confirmButton: "custom-confirm-button",
      },
    });
    if (result.isConfirmed) {
      await deleteCourse(id);
      refreshCourses();
    }
  };
  
  return (
    <>
      <div className="flex gap-2 mt-3">
        <Link to={`/view/${id}`}>
          <button className="hover:bg-sky-700 text-sm bg-sky-600 text-white px-2 py-1 rounded-lg shadow-lg">
            View
          </button>
        </Link>
        <Link to={`/edit/${id}`}>
          <button className="hover:bg-cyan-600 text-sm bg-cyan-800 text-white px-2 py-1 rounded-lg shadow-lg">
            Edit
          </button>
        </Link>

        <button onClick={handleAlert} className="hover:bg-red-700 text-sm bg-neutral-600 text-white px-2 py-1 rounded-lg shadow-lg">
          Delete
        </button>
      </div>
    </>
  );
};

export default Buttoms;
