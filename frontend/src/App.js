import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Menu from './components/Menu';
import MyOrder from './components/MyOrder';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderPlaced from './components/OrderPlaced';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/checkout" exact element={<Checkout/>}/>
        <Route path="/menu" exact element={<Menu/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
        <Route path="/orders" exact element={<MyOrder/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/logout" exact element={<Logout/>}/>
        <Route path="/orderplaced" exact element={<OrderPlaced/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
