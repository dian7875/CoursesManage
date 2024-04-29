import "./Pager.css"
const Pager = () => {
  const page = 1;
  const result = 10;
  const maxResult = 52;
  return (
    <>
      <span className='Pager'>
        <span>{page} - {result} of {maxResult}</span>
        <button className='Btn' title='prev'><img width={15} src="https://cdn-icons-png.flaticon.com/128/151/151846.png" alt="" /></button>
        <button className='Btn' title='next'><img width={15} src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" /></button>
      </span>
    </>
  )
}

export default Pager
