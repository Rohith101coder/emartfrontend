import React, { useState } from 'react'
import { fridgeData } from '../data/fridge'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
const FridgePage = () => {

  const [selectedProduct,setSelectedProduct]=useState([]);
  const companyHandler=(f)=>{
    if(selectedProduct.includes(f)){
      setSelectedProduct(selectedProduct.filter(item=>item!=f))
    }else{
      setSelectedProduct([...selectedProduct,f])
    }
  }

  const filteredProduts=selectedProduct.length===0?
  fridgeData:fridgeData.filter((f)=>selectedProduct.includes(f.brand))
  return (
     <>
   <NavBar/>
   <div className="fullpage">
    <div className="pro-selected">
      {fridgeData.map((fridge,index)=>{
        return(
          <div key={index}>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(fridge.brand)}
              onChange={()=>companyHandler(fridge.brand)}
              />
              {fridge.brand}
            </label>
          </div>
        )
      })}
    </div>


<div className='pageSection'>
      {filteredProduts.map((item,index)=>{
        return(
            <div key={index}>
              <Link to={`/fridge/${item.id}`}>
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

export default FridgePage
