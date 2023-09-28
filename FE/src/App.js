import './App.css';
import Products from './components/products';
import { ShopContextProvider } from "./context/shop-context";
import { Wishlist } from './pages/wishlist';
import {Cart} from "./pages/cart";
import { Navbar } from './components/navbar';
import {Shop} from "./pages/shop";
import Register from "./pages/register";
import Signin from './pages/signin';
import Signup from './pages/signup';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import phone from "./images/phone.jpeg";

function App() {
  
  return (
    <div className='home'>
      
     <ShopContextProvider>
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>  
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>  
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
