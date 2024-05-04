import Swal from "sweetalert2";

export const correct = (): void =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "This Course has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  
export const fail = (): void => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
    });
}
export const noMorePages = (): void => {
  Swal.fire({
      icon: 'warning',
      title: 'Alert',
      text: 'This is the first page',
      timer: 1500,
  });
}
export const recharged = (): void => {
  let timerInterval: number | undefined;

  Swal.fire({
    title: "Eliminando",
    html: "Please Wait",
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup()?.querySelector("b");
      if (timer) {
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (timerLeft) {
            timer.textContent = `${timerLeft}`;
          }
        }, 100);
      }
    },
    willClose: () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }
  })
};