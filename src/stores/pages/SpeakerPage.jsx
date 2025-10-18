import React from 'react'
import { speakerData } from '../data/speaker'
import NavBar from '../components/NavBar'
const SpeakerPage = () => {
  return (
   <>
   <NavBar/>
    <div className='pageSection'>
      {speakerData.map((item)=>{
        return(
            <div>
                <div className='pageImg'>
            <img src={item.image}/>
                    </div>
            <div className='proModel'>
                {item.company}
                {item.model}
                </div>
            </div>
        )
      })}
    </div>
   </>
  )
}

export default SpeakerPage
