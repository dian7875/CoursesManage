import useGetAllUsers from '../Hooks/useGetAllCourses';
import Course from '../types/courses';

function Table() {
  const { courses }: { courses: Course[] } = useGetAllUsers();

  return (
    <>
    <table className='Table-container'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Espacio Disponible</th>
          <th>Cupo Máximo</th>
          <th>Profesor</th>
          <th>Código del Curso</th>
          <th>Número de Aula</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.status ? 'Activo' : 'Inactivo'}</td>
            <td>{course.space_available}</td>
            <td>{course.maximun_quota}</td>
            <td>{course.professor}</td>
            <td>{course.course_code}</td>
            <td>{course.classroom_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
     <button >Agregar nuevo</button>
     </>
  );
}

export default Table;