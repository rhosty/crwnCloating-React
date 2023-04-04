import Home from './routes/home/home.comp';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.comp';
import '../src/App.css'
import JacketShop from './routes/shop/jacket shop/jacket.shop.comp';
import MensShop from './routes/shop/mens shop/mens.shop.comp';
import HatsShop from './routes/shop/hats shop/hats.shop.comp';
import SneakerShop from './routes/shop/sneaker shop/sneaker.shop';
import WomansShop from './routes/shop/womans shop/woamns.shop.comp';
import Authentication from './routes/authentication/authentication.comp';
import ShopOverview from './comps/shopoverview/shop.overview';
import DropDown from './comps/dropdown/dropdown.comp';
import Checkout from './routes/checkout/checkout.comp';
import ShopComp from './comps/shop-comp/shop.comp';
import CategoriesPreview from './routes/categories-preview/categories.preview.comp';

 const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home/>}/>
        <Route path='dropdown' element={<DropDown/>}></Route>
          <Route path='shop/*' element={<ShopComp />}>
          
            
          </Route> 
        <Route path='auth' element={<Authentication />} />
       
        <Route path="/checkout" element={<Checkout />} />      
        </Route>
      
      
    </Routes>
    
  )
 }

export default App;

//test