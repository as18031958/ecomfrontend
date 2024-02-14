import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,addToCart } from '../Store/slice'; 
import Layout from '../Components/Layout';
 import toast from 'react-hot-toast';

import '../Allcss/homepage.css'

export const DyanamicComp = () => {
  const paremid = useParams().id;
  const Navi = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // toast.success("")

  const handleClick = (itemId) => {
    dispatch(addToCart(itemId)); // Use addToCart action instead of AddToCart
    toast.success("Added to cart");
  }

  return (
        <div>
          <Layout title={'Home-page'}>
            <div className='heading'>
              <h2>SUNGLASSES</h2>
            </div>
            
            <div className='main-container'>
              {products && products
                .filter((item) => item.id === parseInt(paremid))
                // .filter((item) => ['sunglasses'].includes(item.category))
                .map((item) => (
                  <div key={item._id} className="blog-item">
                    <div class="product-card">
                      <img src={`${item.thumbnail}`} alt="Thumbnail" />
                      <div class="product-info">
                        <p class="title">{item.title}</p>
                        <p class="brand">{item.brand}</p>
                        <p class="description">{item.description}</p>
                        <div class="details">
                          <p class="price">{item.price}</p>
                          <p class="rating">{item.rating}</p>
                          <p class="category">{item.category}</p>
                        </div>
                        <button className='Btn' onClick={() => Navi(-1)}>Go Back</button>
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
export default DyanamicComp
    

