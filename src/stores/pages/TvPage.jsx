import React from 'react'
import { tvData } from '../data/tv'
import NavBar from '../components/NavBar'
const TvPage = () => {
  return (
     <>
   <NavBar/>
    <div className='pageSection'>
      {tvData.map((item)=>{
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

export default TvPage
