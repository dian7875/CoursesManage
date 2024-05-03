import { useParams } from "react-router-dom";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
import "./edit.css";
import useEditCourse from "../../Hooks/useEditCourse";

function EditCourse() {
  const handleConfirm = () => {
    handleSubmit(onSubmit)();
  };
  const onCancel = () => {
    navigate("/");
  };
  const { id } = useParams<{ id?: string }>();
  const {
    navigate,
    course,
    handleSubmit,
    register,
    handleCurrentRegistrationChange,
    handleMaximumQuotaChange,
    toggleStatus,
    onSubmit,
  } = useEditCourse(id || "");
  return (
    <>
      <div className="Edit-Form">
        <p>
          Edit Course {course?.id}
          {course?.course_code}
        </p>
        <form className="Edit-Style" onSubmit={handleSubmit(onSubmit)}>
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
                onChange={handleCurrentRegistrationChange}
              />
              /
              <input
                title="Edit Field"
                type="number"
                {...register("maximun_quota")}
                onChange={handleMaximumQuotaChange}
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
            <ButtonCancel Title="Cancel" Event={onCancel} />
            <ButtonAcept
              Title="Send"
              onConfirm={handleConfirm}
              Back={onCancel}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCourse;
