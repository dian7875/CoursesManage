
import { Link } from 'react-router-dom'
import useDelete from '../Hooks/useDelete';
import { useContext } from 'react';
import CoursesContext from '../Context/CoursesContext';


const Buttoms = ({ id ,refreshCourses}: { id: string, refreshCourses: () => void }) => {

  const {changeList, setChangeList} = useContext(CoursesContext)

  const handleClick = () => {
    useDelete(id, refreshCourses);
    setTimeout(() => {
      setChangeList(!changeList)
    }, 1000);
  }

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

        <button onClick={handleClick} className="hover:bg-red-700 text-sm bg-neutral-600 text-white px-2 py-1 rounded-lg shadow-lg">
          Delete
        </button>
      </div>
    </>
  );
};

export default Buttoms;
