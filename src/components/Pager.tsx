import { useContext } from "react";
import "./Pager.css"
import CoursesContext from "../Context/CoursesContext";
const Pager = () => {

  const { pageNumber, setPageNumber } = useContext(CoursesContext)
  const result = 10;

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };


  const handleNextClick = () => {
    if (pageNumber < 10) {
      setPageNumber(pageNumber + 1);
    }
  };



  return (
    <>
      <span className='Pager'>
        <span>Rows per page:
          <select name="" id=""></select>
          <button className='Btn' title='prev' onClick={handlePrevClick}>
            <img width={15} src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="" />
          </button>
          {pageNumber}/{result}</span>
        <button className='Btn' title='next' onClick={handleNextClick}>
          <img width={15} src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
        </button>
      </span>
    </>
  )
}

export default Pager
