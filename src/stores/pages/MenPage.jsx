import React, { useState } from 'react'
import { menData } from '../data/men'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
const MenPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([]);
  const companyHandler=(men)=>{
    if(selectedProduct.includes(men)){
      setSelectedProduct(selectedProduct.filter((item)=>item!=men));
    }else{
      setSelectedProduct([...selectedProduct,men]);
    }
  }

  const filteredProduts=selectedProduct.length===0?
  menData:menData.filter((m)=>selectedProduct.includes(m.brand))
  return (
    <>
   <NavBar/>
   <div className="fullpage">

    <div className="pro-selected">
      {menData.map((item,index)=>{
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
              <Link to={`/men/${item.id}`}>
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

export default MenPage
