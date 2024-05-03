import Swal from "sweetalert2";

const fail = (): void => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
    });
}
export default fail