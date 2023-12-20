import React, { useContext,useState } from 'react';
import { NavLink} from 'react-router-dom';
// import Categories from '../Categories';
import '../Styles/Business.css'
import { Store1 } from '../ContextAPI';
import Footer from '../Footer/Footer';
function BusinessCom() {
    const[ContextData]=useContext(Store1);
    console.log(ContextData);
    
    const [showLoginPopup, setShowLoginPopup] = useState(false);
   
   if (showLoginPopup) {
    console.log('abc');
    }
   
  
  
    const handleBuyNow = () => {
      const token = localStorage.getItem("token");
      console.log('Handle Buy Now called');
      if (!token) {
        setShowLoginPopup(true);
        alert('Please Login First to continue with purchase!!!')    
        window.location.href = '/login';
      return;
      } 
      else {
        console.log('Handle Buy Now called222222222222');
        
       
      }
    };
  
  return (
    <div className='Business'>
        <div className='LinkCompo2'>
      <div><h3>Business Courses &gt;</h3></div>
      <div className="sub-nav">
      <NavLink to='/business/communication' className='sub-link'>Communication</NavLink>
        <NavLink to='/business/managements' className='sub-link'>Managements</NavLink>
        <NavLink to='/business/strategy' className='sub-link'>Business Strategy</NavLink>
        <NavLink to='/business/operations' className='sub-link'>Operations</NavLink>
        <NavLink to='/business/humanresources' className='sub-link'>Human Resources</NavLink>
        </div>
        </div>

        <div className='BusinessSection'>
            <div className='BusinessSectionHead'>
            <h1>Communication Courses</h1>
            <h2>Courses to get you started</h2>
            <h3>Most Popular</h3>
            <hr ></hr></div>

            <div className='main'>
                <div className='box'>
                {ContextData.filter((item) => item && item.id === 13).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 14).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p>
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>
             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 15).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
            
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 16).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 17).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails1' style={{position:'absolute', right:'-100%'}}>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
                </div>
        </div>


<div className='BusinessSection2'>
    <hr></hr>
    <div className='BusinessSection2Inner'>
        <div>
            <h3>&#9734; Learn in-demand skills with over 210,000 video courses</h3>
        </div>
        <div>
            <h3>&#9734; Choose courses taught by real-world experts</h3>
        </div>
        <div>
            <h3>&#9734; Learn at your own pace, with lifetime access on mobile and desktop</h3>
        </div>
       

    </div>
    <hr></hr>
</div>

<div className='BusinessSection'>
<div className='BusinessSection3'>
    <h2>Popular topics</h2>
<div className='BusinessSection3Inner'>
    <div>Communication Skills</div>
    <div>Presentation Skills</div>
    <div>Fiction Writing</div>
    <div>Business Writing</div>
    <div>Email Writing and Etiquate</div>
    <div>Public Speaking</div>
    <div>Writing</div>
    <div>Business Communication</div>
    <div>Assertiveness</div>
    <div>Storytelling</div>
    </div>
</div></div>


<div className='BusinessSection4'>
    <h2>Popular Instructors</h2>
    <div className='BusinessSection4Inner'>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/4897424_a25c_11.jpg' alt=''></img>
            <div className='contentInner'><h3>TIA Education, Andrew Ramdayal</h3>
            <p>PMP, PgMP, PMI-ACP, CISSP-ISSMP </p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>317,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>31</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/75004102_f8b0_2.jpg' alt=''></img>
            <div className='contentInner'><h3>Maven Analytics</h3>
            <p>Empowering everyday people with life-changing data skills</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>1,317,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>35</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/8280056_7887_3.jpg' alt=''></img>
            <div className='contentInner'><h3>365 Careers</h3>
            <p>Creating opportunities for Data Science and Finance students</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>2,117,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>101</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/8912846_1a61.jpg' alt=''></img>
            <div className='contentInner'><h3>Joseph Phillips</h3>
            <p>PMP, PMI-ACP, Project+, ITIL, CTT+</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>771,694</span> students</div>
            <div><span style={{fontWeight:'700'}}>105</span> Courses</div></div>
        </div>
        </div>
</div>

<div className='BusinessSection5'>

    <h2>All Business courses</h2>
    <div className='InformationAlert'>
    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/24/warning-303768_640.png' alt=''/>
<p>Not sure? All courses have a 30-day money-back guarantee</p>
    </div>
</div>


<div className='BusinessSection6'>
<div className='box1'>
                {ContextData.filter((item) => item && item.id === 19).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 18).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 17).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 15).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 8).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 
              2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 16).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 14).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
</div>


<div className='add'>
        <div><h1 >Filter by:</h1>
        <div className='filter-option'>
          <label style={{fontSize:'18pt',fontWeight:'700'}} htmlFor='rating'>Ratings</label>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='5' value='5'  />
            <label htmlFor='5'>&#11088;&#11088;&#11088;&#11088;&#11088;5.0</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='4' value='4'  />
            <label htmlFor='4'>&#11088;&#11088;&#11088;&#11088;4.0</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='3' value='3'  />
            <label htmlFor='3'>&#11088;&#11088;&#11088;3.0</label>
          </div>
          <div style={{marginTop:'10px',marginBottom:'20px'}}>
            <input type='checkbox' id='3' value='3'  />
            <label htmlFor='3'>&#11088;&#11088;2.0</label>
          </div>
        </div>
        < div className='filter-option'>
          <label style={{fontSize:'18pt',fontWeight:'700'}}  htmlFor='duration'>Video Duration:</label>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='short' value='short' />
            <label htmlFor='short' style={{marginTop:'30px'}}>0 - 1 hours</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='medium' value='medium'  />
            <label htmlFor='medium'  style={{marginTop:'10px'}}>1 - 3 hours</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>3 - 6 hours</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>6 - 17 hours</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'  >17+ hours</label>
          </div>
          
          </div>

          < div className='filter-option' style={{marginTop:'20px'}}>
          <label style={{fontSize:'18pt',fontWeight:'700'}}  htmlFor='duration'>Price:</label>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='short' value='short' />
            <label htmlFor='short' style={{marginTop:'30px'}}>Paid</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='medium' value='medium'  />
            <label htmlFor='medium'  style={{marginTop:'10px'}}>Free</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>₹ 499</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>₹ 999</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'  >₹ 1299</label>
          </div>
          
          </div>
          < div className='filter-option' style={{marginTop:'20px'}}>
          <label style={{fontSize:'18pt',fontWeight:'700'}}  htmlFor='duration'>Languages:</label>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='short' value='short' />
            <label htmlFor='short' style={{marginTop:'30px'}}>English</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='medium' value='medium'  />
            <label htmlFor='medium'  style={{marginTop:'10px'}}>Spanish</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>Hindi</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>Italian</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'  >Germany</label>
          </div>
          
          </div>
          < div className='filter-option' style={{marginTop:'20px'}}>
          <label style={{fontSize:'18pt',fontWeight:'700'}}  htmlFor='duration'>Levels:</label>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='short' value='short' />
            <label htmlFor='short' style={{marginTop:'30px'}}>Expert</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='medium' value='medium'  />
            <label htmlFor='medium'  style={{marginTop:'10px'}}>Intermediate</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>Beginner</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'>All Levels</label>
          </div>
          <div style={{marginTop:'10px'}}>
            <input type='checkbox' id='long' value='long'  />
            <label htmlFor='long'  >Easy</label>
          </div>
          
          </div>
        </div>
        </div>




<Footer/>





    </div>
  );
}

export default BusinessCom;
