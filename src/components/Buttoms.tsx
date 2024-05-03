
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import "./alert.css"
import { deleteCourse } from '../Services/Courses/CourseService';
const Buttoms = ({ id }: { id: string }) => {

  const handleDelete = () => {
    Swal.fire({
      title: "Do You Want To Delete the Course?",
      text: "Course "+id,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      customClass: {
        container: 'delete-alert', // Aquí se aplica tu clase personalizada
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        deleteCourse(id);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    });
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

        <button onClick={handleDelete} className="hover:bg-red-700 text-sm bg-neutral-600 text-white px-2 py-1 rounded-lg shadow-lg">
          Delete
        </button>
      </div>
    </>
  );
};

export default Buttoms;
