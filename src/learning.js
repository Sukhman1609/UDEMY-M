import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Learning = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleit=()=>{
    window.location.href = '/';
  }
    
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
const storedToken = localStorage.getItem('token');
if (storedToken) {
  console.log('User is logged in with token:', storedToken);
  localStorage.removeItem('cartItems');
} else {
    console.log('User is not logged in');
    localStorage.removeItem('token');
    localStorage.removeItem('cartItems');
    setCartItems([]);
  
}
}, []);

  

  return (
    <div>
      <h1 style={{textAlign:'center',marginBottom:'50px'}}>My Courses</h1>
      {cartItems.length === 0 ? (
        <>
          
          <img className='empty' src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg' alt='' />
          <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '14pt' }}>No courses added yet. Keep shopping to find a course!</p><button className='bestSellerButton2' id='buttonin'
          style={{width:'250px',fontSize:'14pt',marginLeft:'650px'}} onClick={handleit}>Keep shopping</button>
        </>
      ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li style={{listStyle:'none'}} key={index}>
            <div className='box1' style={{marginLeft:'-35px'}}>
            <div className='BSMain'>


<div>
<NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


<div>
<p className='name' >{item.name}</p> 
<p className='name1'>{item.author}</p>
<p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
<div><p className='price' style={{color:'green'}} >Active</p> </div>

</div></div>
          </li>
        ))}
      </ul>)
}
    </div>
  );
};

export default Learning;
