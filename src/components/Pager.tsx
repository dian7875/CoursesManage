import { useContext, useEffect } from "react";
import "./Pager.css"
import CoursesContext from "../Context/CoursesContext";

const Pager = ({maxPageNumber}:{maxPageNumber:number}) => {

  const { pageNumber, setPageNumber, limit, setLimit } = useContext(CoursesContext)

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else{
      alert('Che no te sabes los numeritos')
    }
  };

  const handleNextClick = () => {
    if (pageNumber < maxPageNumber) {
      setPageNumber(pageNumber + 1);
    }else{
      alert("Che parala no hay mas")
    }
  };
  useEffect(() => {
    if(pageNumber>maxPageNumber){
      setPageNumber(maxPageNumber)
    }
}, [maxPageNumber]);
  const changeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setLimit(value);
  };

  return (
    <>
      <span className='Pager'>
        <span>Courses per page:
        <select className="LimitSel" title="Pagination" value={limit} onChange={changeLimit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <button className='Btn' title='prev' onClick={handlePrevClick}>
          <img className="Rotate" width={15} src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
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
