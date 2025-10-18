import React, { useState } from 'react'
import { computerData } from '../data/computers'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
const ComputerPage = () => {

  const [selectedProduct,setSelectedProduct]=useState([]);
  const companyHandler=(c)=>{
    if(selectedProduct.includes(c)){
      setSelectedProduct(selectedProduct.filter(item=>item!=c))
    }else{
      setSelectedProduct([...selectedProduct,c])
    }
  }

  const filteredProduts=selectedProduct.length===0?
  computerData:computerData.filter((item)=>selectedProduct.includes(item.company))
  return (
   <>
   <NavBar/>
   <div className="fullpage">


    <div className="pro-selected">
      {computerData.map((item,index)=>{
        return(
          <div key={index}>
            <label>
              <input type='checkbox'
              checked={selectedProduct.includes(item.company)}
              onChange={()=>companyHandler(item.company)}
              />
              {item.company}
            </label>
          </div>
        )
      })}
    </div>

    <div className='pageSection'>
      {filteredProduts.map((item1,index)=>{
        return(
            <div key={index}>
              <Link to={`/computer/${item1.id}`} className='link1'>
               <div className='pageImg'>

            <img src={item1.image}/>
                    </div>
              </Link>
               
            <div className='proModel'>
                {item1.company}
                {item1.model}
                </div>


            </div>
        )
      })}
    </div>
   </div>
    
   
   
   
   
   </>
  )
}

export default ComputerPage
