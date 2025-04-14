import { Button, Checkbox, Modal, ModalFooter } from "flowbite-react";
import { Course } from "../../types/courses";
import { ToggleStateProps } from "../../types/ToggleState";
import { useForm } from "react-hook-form";
import useEditCourse from "../../Hooks/useEditCourse";

interface extendProps extends ToggleStateProps {
  course: Course;
}
const EditOne = ({ open, setOpen, course }: extendProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Course>({
    defaultValues: course,
  });

  const { mutate: updateCourse, isLoading } = useEditCourse();

  const onConfirm = (data: Course) => {
    const updatedData = {
      ...course,
      ...data,
      space_available: data.maximun_quota - data.current_registration,
    };

    updateCourse(updatedData, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };
  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(onConfirm)} className="space-y-4 p-4 max-sm:grid max-sm:grid-cols-2 max-sm:space-x-3">
        <div>
          <label>Course Code</label>
          <input
            {...register("course_code", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.course_code && <p className="text-red-500">Required field</p>}
        </div>

        <div>
          <label>Course Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.name && <p className="text-red-500">Required field</p>}
        </div>

        <div>
          <label>Professor</label>
          <input
            {...register("professor", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.professor && <p className="text-red-500">Required field</p>}
        </div>

        <div>
          <label>Classroom Number</label>
          <input
            type="number"
            {...register("classroom_number", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.classroom_number && (
            <p className="text-red-500">Required field</p>
          )}
        </div>

        <div>
          <label>Maximum Quota</label>
          <input
            type="number"
            {...register("maximun_quota", { required: true, min: 1 })}
            className="w-full border rounded p-2"
          />
          {errors.maximun_quota && (
            <p className="text-red-500">Must be a valid number</p>
          )}
        </div>

        <div>
          <label>Registered Students</label>
          <input
            type="number"
            {...register("current_registration", {
              required: true,
              min: 0,
              max: course.maximun_quota,
            })}
            className="w-full border rounded p-2"
          />
          {errors.current_registration && (
            <p className="text-red-500">Invalid value</p>
          )}
        </div>

        <div className=" flex flex-col">
          <label>Status</label>
          <div className=" flex items-center space-x-2.5 ">
            <Checkbox id="accept" defaultChecked {...register("status")} />
            <span
              className={`p-1 rounded-md text-white ${
                watch("status") ? "bg-sky-500" : "bg-red-500"
              }`}
            >
              {watch("status") ? "Open" : "Closed"}{" "}
            </span>
          </div>
        </div>

        <ModalFooter className=" max-sm:col-span-2">
          <Button color="red" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" color="gray" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
export default EditOne;
