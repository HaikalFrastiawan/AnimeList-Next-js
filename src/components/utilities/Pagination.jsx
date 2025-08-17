import React from 'react'

const Pagination = ({page, lastPage, setPage}) => {

  const scrollTop = () =>{
    scrollTo({
      behavior: "smooth",
      top: 0

    })
  }

  const handleNextPage = ()=>{
     setPage((prevState)=> prevState + 1 )
     scrollTop()
  }

  const handlePrevPage = ()=>{
     setPage((prevState) => prevState - 1)
     scrollTop()
  }




  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4 text-white'>
      <button onClick={handlePrevPage} className='transition-all hover:text-amber-300 text-xl '>Prev</button>
      <p className='text-xl'>{page} of {lastPage}</p>
      <button onClick={handleNextPage} className='transition-all hover:text-amber-300 text-xl '>Next</button>

    </div>
  )
}

export default Pagination