import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { Course } from "../../types/courses";
import { ToggleStateProps } from "../../types/ToggleState";

interface extendProps extends ToggleStateProps {
  course: Course;
}
const ViewOne = ({ open, setOpen, course }: extendProps) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)} dismissible>
      <ModalHeader>{course.name}</ModalHeader>
      <ModalBody>
        <div className="grid gap-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Course Name:</span> {course.name}
          </div>
          <div>
            <span className="font-semibold">Code:</span> {course.course_code}
          </div>
          <div>
            <span className="font-semibold">Professor:</span> {course.professor}
          </div>
          <div>
            <span className="font-semibold">Classroom:</span>{" "}
            {course.classroom_number}
          </div>
          <div>
            <span className="font-semibold">Maximum Quota:</span>{" "}
            {course.maximun_quota}
          </div>
          <div>
            <span className="font-semibold">Registered:</span>{" "}
            {course.current_registration}
          </div>
          <div>
            <span className="font-semibold">Available Slots:</span>{" "}
            {course.space_available}
          </div>
          <div>
            <span className="font-semibold">Status:</span>{" "}
            {course.status ? "Open" : "Closed"}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => setOpen(false)} color={"gray"}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewOne;
