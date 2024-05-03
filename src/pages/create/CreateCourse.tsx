/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createCourse } from "../../Services/Courses/CourseService";
import Course from "../../types/courses";
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
import { useState } from "react";
import courseSchema from "../../validations/courseSchema";
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
      data.space_available = data.maximun_quota - data.current_registration;

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

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Course>({
    resolver: zodResolver(courseSchema)
  });
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

      <div className="body-Form">
         <p>Add New Course</p>

        <form className="Form-Style" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name &&  <p className="error-message">{errors.name.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="professor">Teacher’s Name</label>
            <input type="text" id="professor" {...register("professor")} />
            {errors.professor &&  <p className="error-message"> {errors.professor.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="course_code"> Course Code</label>
            <input type="text" id="course_code" {...register("course_code")} />
            {errors.course_code &&  <p className="error-message">{errors.course_code.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="classroom_number">Classroom Number</label>
            <input type="number" id="classroom_number" {...register("classroom_number")} />
            {errors.classroom_number &&  <p className="error-message">{errors.classroom_number.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="status">Course Status</label>
            <label className="toggle">
              <input className="status" type="checkbox" {...register('status')} onChange={toggleStatus} />
              <span className="slider"></span>
            </label>
            {errors.status &&  <p className="error-message">{errors.status.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="maximun_quota">Maximum Quota</label>
            <input type="number" id="maximun_quota" {...register("maximun_quota")} />
            {errors.maximun_quota &&  <p className="error-message">{errors.maximun_quota.message}</p>}
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
