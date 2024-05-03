import "./ButtonsForms.css";
import Swal from "sweetalert2";

export const ButtonAcept = ({
  Title,
  onConfirm,
  Back,
}: {
  Title: string;
  onConfirm: () => void;
  Back: () => void;
}) => {
  const handleAlert = async () => {
    const result = await Swal.fire({
      icon: "info",
      title: "Are you sure about to do this action?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        cancelButton: "custom-cancel-button",
        confirmButton: "custom-confirm-button",
      },
    });

    if (result.isConfirmed) {
      setTimeout(() => {
        onConfirm();
        Back();
      }, 1000);

    }
  };

  return (
    <>
      <button className="sendButton" onClick={handleAlert} type="button">
        {Title}
      </button>
    </>
  );
};

export const ButtonCancel = ({
  Title,
  Event,
}: {
  Title: string;
  Event: () => void;
}) => {
  return (
    <>
      <button className="cancelButton" type="button" onClick={Event}>
        {Title}
      </button>
    </>
  );
};
