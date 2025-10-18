import React from 'react'
import {womenData} from '../data/woman'
const Women = () => {

    const firstFiveImages=womenData.slice(0,5);
  return (
    <>
    <div className='proTitle'>

   
    <h2>Women's wear</h2>
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

export default Women
