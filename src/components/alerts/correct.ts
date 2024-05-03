import Swal from "sweetalert2";

const correct = (): void =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "This Course has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  export default correct