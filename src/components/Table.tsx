import useGetAllCourses from '../Hooks/useGetAllCourses';
import Course from '../types/courses';
import "./table.css"
function Table() {
  const { courses }: { courses: Course[] } = useGetAllCourses();

  return (
    <>
    <table className='Table-container'>
    <caption>List Of Courses Of University Three Duckling</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Espacio Disponible</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.status ? 'Activo' : 'Inactivo'}</td>
            <td>{course.space_available}</td>
          </tr>
        ))}
      </tbody>
    </table>
     <button >Agregar nuevo</button>
     </>
  );
}

export default Table;