import { useContext } from "react";
import "./Pager.css"
import CoursesContext from "../Context/CoursesContext";
const Pager = () => {

  const { pageNumber, setPageNumber, maxPageNumber, limit, setLimit } = useContext(CoursesContext)

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

  const changeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setLimit(value);
  };

  return (
    <>
      <span className='Pager'>
        <span>Rows per page:
        <select title="Pagination" value={limit} onChange={changeLimit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <button className='Btn' title='prev' onClick={handlePrevClick}>
            <img width={15} src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="" />
          </button>
          {pageNumber}/{maxPageNumber}</span>
        <button className='Btn' title='next' onClick={handleNextClick}>
          <img width={15} src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
        </button>
      </span>
    </>
  )
}

export default Pager
