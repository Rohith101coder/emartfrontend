import React from 'react'
import { watchData } from '../data/watch'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const WatchPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);

  const companyHandler=(w)=>{
    if(selectedProduct.includes(w)){
      setSelectedProduct(selectedProduct.filter((item)=>item!=w));
    }else{
      setSelectedProduct([...selectedProduct,w])
    }
  }

  const filteredProduts=selectedProduct.length===0?
  watchData:watchData.filter((item)=>selectedProduct.includes(item.brand))

  return (
    <>
   <NavBar/>
   <div className="fullpage">

    <div className="pro-selected">
    {watchData.map((watch,index)=>{
      return(
        <div key={index}>
          <label>
            <input type='checkbox'
            checked={selectedProduct.includes(watch.brand)}
            onChange={()=>companyHandler(watch.brand)}
            />
            {watch.brand}
          </label>
        </div>
      )
    })}

    </div>








<div className='pageSection'>
      {filteredProduts.map((item,index)=>{
        return(
            <div key={index}>
              <Link to={`/watch/${item.id}`}>
               <div className='pageImg'>
            <img src={item.image}/>
                    </div>
              </Link>
               
            <div className='proModel'>
                {item.company}
                {item.model}
                </div>
            </div>
        )
      })}
    </div>
   </div>
    
   </>
  )
}

export default WatchPage
