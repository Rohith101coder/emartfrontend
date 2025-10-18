import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
const FurniturePage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);
  const companyHandler=(fur)=>{
    if(selectedProduct.includes(fur)){
      setSelectedProduct(selectedProduct.filter((item)=>item!=fur))
    }else{
      setSelectedProduct([...selectedProduct,fur]);
    }
  }

  const filteredProduts=selectedProduct.length===0?
  furnitureData:furnitureData.filter((item)=>selectedProduct.includes(item.brand))
  return (
   <>
   <NavBar/>
   <div className="fullpage">
<div className="pro-selected">
  {furnitureData.map((item,index)=>{
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
              <Link to={`/furniture/${item.id}`}>
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

export default FurniturePage
