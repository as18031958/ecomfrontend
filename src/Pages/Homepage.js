import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,addToCart } from '../Store/slice'; 
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CarouselComponent from './corousel';
import '../Allcss/homepage.css'



const Homepage = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Access products correctly

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
  const handleLogout=()=>{
  localStorage.removeItem('token');
  navigate('/login')
  }
  const handleClick = (itemId) => {
    dispatch(addToCart(itemId)); // Use addToCart action instead of AddToCart
    toast.success("Added to cart");
  }
  
  return (
    <>
    <Layout title={'Home-page'}>
   <div className='heading'>
    <h2>HOMEPAGE</h2>
    <button className='Btn' onClick={handleLogout}>Logout</button>
    </div>
      <CarouselComponent/>
      
      
      <div className='main-container'>
    
    {/* <button onClick={handleLogout}>Logout</button> */}
      {products && products
          .filter((item) => ['mens-watches', 'home-decoration', 'laptops', 'sunglasses', 'smartphones'].includes(item.category))

          .map((item) => (

        <div key={item._id} className="blog-item">
         <div class="product-card">
  <img src={`${item.thumbnail}`} alt="Thumbnail" />
  <div class="product-info">
    <p class="title">{item.title}</p>
    <p class="brand">{item.brand}</p>
    <p class="description">{item.description.slice(0, 100)}</p>
    <div class="details">
      <p class="price">{item.price}</p>
      <p class="rating">{item.rating}</p>
      <p class="category">{item.category}</p>
    </div>
    <button class="add-to-cart" onClick={() => handleClick(item.id)}>Add to Cart</button>
  </div>
</div>

         

        </div>
      ))}
    </div>
    
    
        
    </Layout>
    </>
  )
}

export default Homepage