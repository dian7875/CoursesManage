import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { ToggleStateProps } from "../../types/ToggleState";
import useDelete from "../../Hooks/useDelete";

interface DeleteOneProps extends ToggleStateProps {
  id: string;
}
const DeleteOne = ({ open, setOpen, id }: DeleteOneProps) => {
  const { mutate: Coursedelete, isLoading } = useDelete();

  const handleDelete = () => {
    Coursedelete(id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={handleCancel} dismissible>
      <ModalHeader>Delete Course</ModalHeader>
      <ModalBody>
        <p>
          Are you sure you want to delete the course with ID{" "}
          <strong>{id}</strong>?
        </p>
        <p>This action cannot be undone.</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleCancel} color={"red"}>
          Cancel
        </Button>
        <Button onClick={handleDelete} color={"gray"} disabled={isLoading}>
          {" "}
          {isLoading ? "removing" : "Delete"}{" "}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteOne;
