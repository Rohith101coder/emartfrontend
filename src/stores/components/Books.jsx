import React from 'react'
import {booksData} from '../data/books'
const Books = () => {

    const firstFiveImages=booksData.slice(0,5);
  return (
    <>
   <div className='proTitle'>

   
    <h2>Books</h2>
 </div>
    
     <div className='proSection'>
      {firstFiveImages.map((item)=>{
        return(
            <div className='imgBox' key={item.id}>
                <img src={item.image} alt=""  className='proImage'/>

            </div>

        )
      })}
    </div>
    
    
    
    
    </>
  )
}

export default Books
