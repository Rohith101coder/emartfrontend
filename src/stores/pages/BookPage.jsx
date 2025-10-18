import React from 'react'
import { booksData } from '../data/books'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const BookPage = () => {

//    const [selectedProduct,setSelectedProduct]=useState([])
  
//       const companyHandler=(mango)=>{
//           if(selectedProduct.includes(mango)){
//               setSelectedProduct(selectedProduct.filter(item=>item!==mango))
//           }else{
//               setSelectedProduct([...selectedProduct,mango])
//           }
//       }
  
//       const filteredProduts=selectedProduct.length===0?
//       booksData:booksData.filter((orange)=>selectedProduct.includes(orange.title))



const [selectedProduct,setSelectedProduct]=useState([]);

const companyHandler=(x)=>{
    if(selectedProduct.includes(x)){
        setSelectedProduct(selectedProduct.filter(item=>item!=x));
    }else{
        setSelectedProduct([...selectedProduct,x])
    }
}

const filteredProduts=selectedProduct.length===0?
booksData:booksData.filter((y)=>selectedProduct.includes(y.title))


  return (
    <>
    <NavBar/>
    <div className="fullpage">
        <div className="pro-seleted">
            {booksData.map((book,index)=>{
                return(
                    <div key={index}>
                        <label>
                            <input type='checkbox'
                            checked={selectedProduct.includes(book.title)}
                            onChange={()=>companyHandler(book.title)}
                            />
                            {book.title}
                        </label>
                    </div>
                )
            })}
        </div>
    
            
        <div className='pageSection'>
          {filteredProduts.map((item,index)=>{
            return(
                <div key={index}>
                    <Link to={`/books/${item.id}`}>
                    
                     <div className='pageImg'>
                <img src={item.image}/>
                        </div>
                    </Link>
                   <br></br>
                <div className='proModel'>
                    {item.title}
                    {item.author}
                    </div>
                </div>
            )
          })}
        </div>
        </div>
    
    </>  
  )
}

export default BookPage
