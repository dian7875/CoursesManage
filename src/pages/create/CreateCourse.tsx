/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { createCourse } from "../../Services/Courses/CourseService";
import Course from "../../types/courses";
import { useNavigate } from "react-router-dom";
import "./CreateCourse.css";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
function CreateCourse() {
  const onSubmit = async (data: any) => {
    try {
      const spaceAvailable = Math.floor(
        Math.random() * (Number(data.maximun_quota) + 1)
      );

      const formData = {
        ...data,
        space_available: spaceAvailable,
      };

      await createCourse(formData);
    } catch (error) {
      console.error("Error in create course", error);
    }
  };

  const { register, handleSubmit } = useForm<Course>();
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
        <h1 className="add-course">Add course</h1>

        <form className="Form-Class" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group input-field">
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name" {...register("name")} />
          </div>

          <div className="input-group input-field">
            <label htmlFor="professor">Teacher’s Name</label>
            <input type="text" id="professor" {...register("professor")} />
          </div>

          <div className="input-group input-field">
            <label htmlFor="course_code"> Course Code</label>
            <input type="text" id="course_code" {...register("course_code")} />
          </div>
          <div className="input-group input-field">
            <label htmlFor="classroom_number">Classroom Number</label>
            <input
              type="number"
              id="classroom_number"
              {...register("classroom_number")}
            />
          </div>

          <div className="input-group input-field">
            <label htmlFor="status">Course Status</label>
            <input type="checkbox" id="status" {...register("status")} />
          </div>

          <div className="input-group input-field">
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
