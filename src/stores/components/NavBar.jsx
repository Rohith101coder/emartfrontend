import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const NavBar = () => {
  const{cartItems}=useCart()
  const [search,setSearch]=useState("");
  const navigate=useNavigate();
  const links=['mobile','computer','watch','men','women','furniture','ac','kitchen','book','fridge'];

  const queryHandler=()=>{
    let present=false;
    for(let i=0;i<links.length;i++){
      while(links[i]===search.trim()){
        present=true;
        break;
      }
    }
    if(present){
      navigate(`/${search.trim()}`)
    }else{
      alert("no such product available");
      navigate(`/`);
    }
    
    
  }
  return (
    <>
    
     <div>
      <div className="navSection">
        <div className="title">
          <Link to='/' className='link1'>
           <h2>E-Mart</h2>
          </Link>
           
        </div>
        <div className="seacrh">
            <input type='text' placeholder='search...' onChange={(e)=>setSearch(e.target.value)}/>
             <button onClick={()=>queryHandler()}>search</button>
        </div>
       
        <div className="user">
            <div className="user-details">signin/signup</div>
            <Link to='/cart' className='link1'>
             <div className="cart">Cart
              <span>
                {cartItems.length}
              </span>
             </div>
            </Link>
           
        </div>
      </div>
    </div>
    <div className="subMenu">
    <ul>
      <Link to={`/${links[0]}`} className='link1'>
      <li>Mobiles</li>
      </Link>
      <Link to={`/${links[1]}`} className='link1'>
      <li>Computers</li>
      </Link>
      <Link to={`/${links[2]}`} className='link1'>
      <li>Watchs</li>
      </Link>
      <Link to={`/${links[3]}`} className='link1'>
      <li>men's wear</li>
      </Link>
      <Link to={`/${links[4]}`} className='link1'>
      <li>women</li>
      </Link>
      <Link to={`/${links[5]}`} className='link1'>
      <li>funiture</li>
      </Link>
      <Link to={`/${links[6]}`}>
      <li>Ac</li>
      </Link>
      <Link to={`/${links[7]}`} className='link1'>
      <li>Kitchen</li>
      </Link>
      <Link to={`/${links[8]}`} className='link1'>
      <li>Books</li>
      </Link>
      <Link to={`/${links[9]}`} className='link1'>
      <li>Fridge</li></Link>
    
   

    </ul>

    </div>
    
    
    
    </>
   
  )
}

export default NavBar
