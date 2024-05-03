import "./ButtonsForms.css";
import Swal from "sweetalert2";
     export const ButtonAcept = ({Title} : {Title: string}) => {
      const handleAlert = () => {
        Swal.fire({
          title: "Are you sure about to do this action?",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          customClass: {
          cancelButton: 'custom-cancel-button',
          confirmButton: 'custom-confirm-button'
          }
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      }

        return (
          <>
            <button className='sendButton' onClick={handleAlert} type='submit'>{Title}</button>
          </>
        )
      }

       export const ButtonCancel = ({Title, Event} : {Title: string, Event: () => void}) => {
        return (
          <>
            <button className='cancelButton' type='button' onClick={Event}>{Title}</button>
          </>
        )
      }
  

  