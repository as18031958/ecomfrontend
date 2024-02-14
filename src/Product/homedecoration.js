import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '../Store/slice'; 
import Layout from '../Components/Layout';
import toast from 'react-hot-toast';
import CarouselComponent from '../Pages/corousel'
import '../Allcss/homepage.css'
import { NavLink } from 'react-router-dom';

const Homedecoration = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  

  const handleClick = (itemId) => {
    dispatch(addToCart(itemId)); // Use addToCart action instead of AddToCart
    toast.success("Added to cart");
  }

  return (
    <div>
      <Layout title={'Home-page'}>
      <div className='heading'>
    <h2>HOMEDECORATION</h2>
    {/* <button className='Btn' onClick={handleLogout}>Logout</button> */}
    </div>
      <CarouselComponent/>
      
      
      
      <div className='main-container'>
    
    {/* <button onClick={handleLogout}>Logout</button> */}
      {products && products
          .filter((item) => ['home-decoration'].includes(item.category))

          .map((item) => (

        <div key={item._id} className="blog-item">
         <div class="product-card">
         <NavLink to={`/dynamic/${item.id}`}>
         <img src={`${item.thumbnail}`} alt="Thumbnail" />
              </NavLink>
  {/* <img src={`${item.thumbnail}`} alt="Thumbnail" /> */}
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
    </div>
  );
};

export default Homedecoration;