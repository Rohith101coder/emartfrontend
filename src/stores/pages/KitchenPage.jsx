import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
const KitchenPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);

  const companyHandler=(k)=>{
    if(selectedProduct.includes(k)){
      setSelectedProduct(selectedProduct.filter((item)=>item!==k))
    }
    else{
      setSelectedProduct([...selectedProduct,k]);
    }
  }

  const filteredProduts=selectedProduct.length===0?
  kitchenData:kitchenData.filter((item)=>selectedProduct.includes(item.brand))
  return (
    <>
   <NavBar/>
   <div className="fullpage">
    <div className="pro-selected">
      {kitchenData.map((item,index)=>{
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
              <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage
