import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,addToCart } from '../Store/slice'; 
import Layout from '../Components/Layout';
// import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CarouselComponent from './corousel';
// import '../Allcss/homepage.css'
import { NavLink } from 'react-router-dom';



const Homepage = () => {
  // const navigate= useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Access products correctly

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
  // const handleLogout=()=>{
  // localStorage.removeItem('token');
  // navigate('/login')
  // }
  const handleClick = (itemId) => {
    dispatch(addToCart(itemId)); // Use addToCart action instead of AddToCart
    toast.success("Added to cart");
  }
  
  return (
    <>
    <Layout title={'Home-page'}>
   <div className='heading'>
    <h2>HOMEPAGE</h2>
    {/* <button className='Btn' onClick={handleLogout}>Logout</button> */}
    </div>
      <CarouselComponent/>
      <div className='bodyone'>
  {products && products
    .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category)).slice(0,3)
    .map((item) => (
      <div key={item._id} className="container">
        <div class="wrapper">
          <NavLink to={`/dynamic/${item.id}`}>
            <img className={"banner-image"} src={`${item.thumbnail}`} alt="Thumbnail" />
          </NavLink>
          <h1>{item.title}</h1>
          
          </div>
          <div class="details">
            <p class="price">PRICE: {item.price} Rupees</p>
            <p class="rating">RATING: {item.rating}</p>
          </div>
          <div className='button-wrapper'>
          <p class="description">{item.description.slice(0, 40)}</p>
            <button class="btn add-to-cart" onClick={() => handleClick(item.id)}>Add to Cart</button>
          </div>
        </div>
       
    ))}
</div>



<div className='bodyone'>
  {products && products
    .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category)).slice(3,6)
    .map((item) => (
      <div key={item._id} className="container">
        <div class="wrapper">
          <NavLink to={`/dynamic/${item.id}`}>
            <img className={"banner-image"} src={`${item.thumbnail}`} alt="Thumbnail" />
          </NavLink>
          <h1>{item.title}</h1>
          
          </div>
          <div class="details">
            <p class="price">PRICE: {item.price} Rupees</p>
            <p class="rating">RATING: {item.rating}</p>
          </div>
          <div className='button-wrapper'>
          <p class="description">{item.description.slice(0, 40)}</p>
            <button class="btn add-to-cart" onClick={() => handleClick(item.id)}>Add to Cart</button>
          </div>
        </div>
       
    ))}
</div>

<div className='bodyone'>
  {products && products
    .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category)).slice(6,9)
    .map((item) => (
      <div key={item._id} className="container">
        <div class="wrapper">
          <NavLink to={`/dynamic/${item.id}`}>
            <img className={"banner-image"} src={`${item.thumbnail}`} alt="Thumbnail" />
          </NavLink>
          <h1>{item.title}</h1>
          
          </div>
          <div class="details">
            <p class="price">PRICE: {item.price} Rupees</p>
            <p class="rating">RATING: {item.rating}</p>
          </div>
          <div className='button-wrapper'>
          <p class="description">{item.description.slice(0, 40)}</p>
            <button class="btn add-to-cart" onClick={() => handleClick(item.id)}>Add to Cart</button>
          </div>
        </div>
       
    ))}
</div>

<div className='bodyone'>
  {products && products
    .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category)).slice(9,12)
    .map((item) => (
      <div key={item._id} className="container">
        <div class="wrapper">
          <NavLink to={`/dynamic/${item.id}`}>
            <img className={"banner-image"} src={`${item.thumbnail}`} alt="Thumbnail" />
          </NavLink>
          <h1>{item.title}</h1>
          
          </div>
          <div class="details">
            <p class="price">PRICE: {item.price} Rupees</p>
            <p class="rating">RATING: {item.rating}</p>
          </div>
          <div className='button-wrapper'>
          <p class="description">{item.description.slice(0, 40)}</p>
            <button class="btn add-to-cart" onClick={() => handleClick(item.id)}>Add to Cart</button>
          </div>
        </div>
       
    ))}
</div>

    
    
        
    </Layout>
    {/* .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category)) */}
    </>
  )
}

export default Homepage