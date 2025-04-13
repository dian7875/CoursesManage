import { Button, Modal, ModalFooter } from "flowbite-react";
import { ToggleStateProps } from "../../types/ToggleState";
import { useForm } from "react-hook-form";
import { Course } from "../../types/courses";
import useSubmitCourse from "../../Hooks/useSubmitCourse";

const AddNew = ({ open, setOpen }: ToggleStateProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Course>();

  const { mutate: createCourse, isLoading } = useSubmitCourse();

  const onConfirm = (data: Course) => {
    const finalData = {
      ...data,
      status: true,
      current_registration: 0,
      space_available: data.maximun_quota,
    };
    createCourse(finalData, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(onConfirm)} className="space-y-4 p-4">
        <div>
          <label>Course Code</label>
          <input
            {...register("course_code", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.course_code && (
            <p className="text-red-500">Campo requerido</p>
          )}
        </div>

        <div>
          <label>Course Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.name && <p className="text-red-500">Campo requerido</p>}
        </div>

        <div>
          <label>Maximun Quota</label>
          <input
            type="number"
            {...register("maximun_quota", { required: true, min: 1 })}
            className="w-full border rounded p-2"
          />
          {errors.maximun_quota && (
            <p className="text-red-500">Debe ser un número válido</p>
          )}
        </div>

        <div>
          <label>Professor</label>
          <input
            {...register("professor", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.professor && <p className="text-red-500">Campo requerido</p>}
        </div>

        <div>
          <label>Classroom Number</label>
          <input
            type="number"
            {...register("classroom_number", { required: true })}
            className="w-full border rounded p-2"
          />
          {errors.classroom_number && (
            <p className="text-red-500">Campo requerido</p>
          )}
        </div>

        <ModalFooter>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" color="gray" disabled={isLoading} >
             {isLoading? "saving":"Save"} 
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddNew;
