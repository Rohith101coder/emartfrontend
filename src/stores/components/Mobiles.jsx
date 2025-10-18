import React from 'react'
import { mobileData } from '../data/mobiles'


const Mobiles = () => {

    const firstFiveImages=mobileData.slice(0,5)
  return (
   <>
   <div className='proTitle'>

   
    <h2>Mobiles</h2>
 </div>
   <div className='proSection'>
  {firstFiveImages.map((item1) => (
    <div className='imgBox' key={item1.id}>
      <img src={item1.image} alt="mobile" className='proImage' />
    </div>
  ))}
</div>

   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Mobiles
