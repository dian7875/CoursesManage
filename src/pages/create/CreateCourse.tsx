/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { createCourse } from "../../Services/Courses/CourseService";
import Course from "../../types/courses";
import { useNavigate } from "react-router-dom";
import "./CreateCourse.css";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
import { useState } from "react";
function CreateCourse() {
  const onSubmit = async (data: Course) => {
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
      data.space_available = data.maximun_quota- data.current_registration;
      
      await createCourse(data);
    } catch (error) {
      console.error("Error in create course", error);
    }
  };
  const [status, setStatus] = useState<boolean>(true);

  const toggleStatus = () => {
    setStatus(!status);
    if (status) {
      setValue('status', true)
    } else {
      setValue('status', false)
    }
  };

  const { register, handleSubmit, setValue } = useForm<Course>();
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
        rel="stylesheet"
      ></link>

      <div className="container">
        <p>Add New Course</p>

        <form className="Form-Class" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Course Name</label>
            <input type="text" 
            id="name" 
            {...register("name")} />
          </div>

          <div className="input-group">
            <label htmlFor="professor">Teacher’s Name</label>
            <input type="text" 
            id="professor" 
            {...register("professor")} />
          </div>

          <div className="input-group">
            <label htmlFor="course_code"> Course Code</label>
            <input type="text" id="course_code" {...register("course_code")} />
          </div>
          <div className="input-group">
            <label htmlFor="classroom_number">Classroom Number</label>
            <input
              type="number"
              id="classroom_number"
              {...register("classroom_number")}
            />
          </div>

          <div className="input-group">
            <label htmlFor="status">Course Status</label>
            <label className="toggle">
              <input
                className="status"
                type="checkbox"
                {...register('status')}
                onChange={toggleStatus}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="input-group">
            <label htmlFor="maximun_quota">Maximum Quota</label>
            <input
              type="number"
              id="maximun_quota"
              {...register("maximun_quota")}
            />
          </div>

          <div className="button-group">
            <ButtonCancel Title="Cancel" Event={onCancel} />
            <ButtonAcept Title="Save" />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateCourse;
