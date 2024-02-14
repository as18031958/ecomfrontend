import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Pagenotfound from './Pages/Pagenotfound';
import Contact from './Pages/Contact';
import Register from './Pages/Authentication/Register';
import Login from './Pages/Authentication/Login';
import Smartphones from './Product/smartphones';
import Laptops from './Product/laptops';
import Homedecoration from './Product/homedecoration';
import Menswatches from './Product/menswatches';
import Sunglasses from './Product/sunglasses';
import AddToCart from './Product/Addtocart';
import Payment from './Product/payment';
import { DyanamicComp } from './Product/Dyanamic ';



function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/smartphones' element={<Smartphones/>}/>
      <Route path='/laptop' element={<Laptops/>}/>
      <Route path='/homedecoration' element={<Homedecoration/>}/>
      <Route path='/menswatches' element={<Menswatches/>}/>
      <Route path='/sunglasses' element={<Sunglasses/>}/>
      <Route path='/addtocart' element={<AddToCart/>}/>
      <Route path='/payment'   element={<Payment/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/dynamic/:id' element={<DyanamicComp/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    

  );
}

export default App;
