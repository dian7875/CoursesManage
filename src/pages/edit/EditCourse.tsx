import { useParams } from "react-router-dom";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
import "./edit.css";
import useEditCourse from "../../Hooks/useEditCourse";
import { useContext, useEffect} from "react";
import ThemeContext from "../../Context/ThemeContext";
import CoursesContext from "../../Context/CoursesContext";
import image from '../../assets/Loanding_Gif.gif'
import { useForm } from "react-hook-form";
import Course from "../../types/courses";
import useGetCourseById from "../../Hooks/useGetCourseById";
import { handleChangeCR, handleChangeMQ, toggleStatus } from "../useClickEvents";

function EditCourse() {

  const {darkMode} = useContext(ThemeContext);

  const {loading}= useContext(CoursesContext);

  const {handleSubmit, register, setValue} = useForm<Course>({});
  
  const { id } = useParams<{ id?: string }>();
  
  const { course } = id ? useGetCourseById(id) : { course: null };
  
  
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
 
 
  const {onSubmit} = useEditCourse();



  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <img src={image} alt="" />
      </div>
    );
  } else{
  return (
    <>
      <div className={`Edit-Form ${darkMode ? 'dark-mode' : ''}`}>
        <p>
          Edit Course {course?.id}
          {course?.course_code}
        </p>
        <form className={`Edit-Style ${darkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <span>Course Name </span>
            <input
              title="Edit Field"
              type="text"
              {...register('name')}
            />
          </div>
          <div className="item">
            <span>Course Code</span>
            <input
              title="Edit Field"
              type="text"
              {...register("course_code")}
            />
          </div>
          <div className="item">
            <span>Teacher’s Name</span>
            <input
              title="Edit Field"
              type="text"
              {...register('professor')}
            />
          </div>
          <div className="item">
            <span>Classroom Number</span>
            <input
              title="Edit Field"
              type="number"
              {...register("classroom_number")}
            />
          </div>
          <div className="matriculaStatus">
            <div className="Text"> <span>Current Registration<span> / </span>Maximun Quota</span></div>
            <div className="EditField">
              <input
                title="Edit Field"
                type="number"
                {...register("current_registration")}
                onChange={handleChangeCR}
              />
              /
              <input
                title="Edit Field"
                type="number"
                {...register("maximun_quota")}
                onChange={handleChangeMQ}
              />
            </div>
          </div>
          <div className="item">
            <span>Space Available</span>
            <input
              readOnly
              title="Edit Field"
              type="number"
              {...register("space_available")}
            />
          </div>
          <div className="item">
            <span>Course Status</span>
            <label className="toggle">
              <input
                className="status"
                type="checkbox"
                {...register("status")}
                onChange={toggleStatus}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="button-group2">
            <ButtonCancel Title="Cancel"/>
            <ButtonAcept
              Title="Send"
            />
          </div>
        </form>
      </div>
    </>
  );
 }
}

export default EditCourse;
