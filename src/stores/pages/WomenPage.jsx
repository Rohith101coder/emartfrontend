import React, { useState } from 'react'
import { womenData } from '../data/woman'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
const WomenPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);

  const companyHandler=(women)=>{
    if(selectedProduct.includes(women)){
      setSelectedProduct(selectedProduct.filter((item)=>item!=women));
    }else{
      setSelectedProduct([...selectedProduct,women])
    }
  }

  const filteredProduts=selectedProduct.length===0?
  womenData:womenData.filter((item)=>selectedProduct.includes(item.brand))
  return (
    <>
   <NavBar/>
   <div className="fullpage">
      <div className="pro-selected">
        {womenData.map((item,index)=>{
          return(
            <div key={index}>
              <label>
                <input type='checkbox'
                checked={selectedProduct.includes(item.brand)}
                onChange={()=>companyHandler(item.brand)}
                />
                {item.brand}
              </label>
            </div>
          )
        })}
      </div>



      <div className='pageSection'>
      {filteredProduts.map((item,index)=>{
        return(
            <div key={index}>
              <Link to={`/women/${item.id}`}>
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

export default WomenPage
