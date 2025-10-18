import React, { useState } from 'react'
import { acData } from '../data/ac'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const AcPage = () => {

  const [selectedProduct,setSelectedProduct]=useState([])


  const companyHandler=(x)=>{
    if(selectedProduct.includes(x)){
      setSelectedProduct(selectedProduct.filter(item=>item!==x))
    }else{
      setSelectedProduct([...selectedProduct,x])
    }
  }

  const filteredProduts=selectedProduct.length===0?
  acData:acData.filter((y)=>selectedProduct.includes(y.company))
  return (
    <>
   <NavBar/>

    <div className="fullpage">
    <div className="pro-selected">
      {acData.map((ac,index)=>{
        return(
          <div key={index}>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(ac.company)}
              onChange={()=>companyHandler(ac.company)}
              />
              {ac.company}
            </label>
          </div>
        )
      })}
    </div>

    <div className='pageSection'>
      {filteredProduts.map((item)=>{
        return(
            <div>
              <Link to={`/ac/${item.id}`}>
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

export default AcPage
