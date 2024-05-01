
import { Link } from 'react-router-dom'

const Buttoms = ({ id }: { id: string }) => {
  return (
    <>
      <div className="flex gap-2 mt-3">
        <Link to={`/view/${id}`}>
          <button className="text-xs bg-sky-600 text-white px-2 py-1 rounded-lg shadow-lg">
            View
          </button>
        </Link>
        <Link to={`/edit/${id}`}>
          <button className="text-xs bg-cyan-800 text-white px-2 py-1 rounded-lg shadow-lg">
            Edit
          </button>
        </Link>

        <button className="text-xs bg-neutral-600 text-white px-2 py-1 rounded-lg shadow-lg">
          Delete
        </button>
      </div>
    </>
  );
};

export default Buttoms;
