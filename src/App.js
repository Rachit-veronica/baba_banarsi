import logo from './logo.svg';
import './App.css';
import Nav from './componends/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componends/Nav_style.css';
import Home from './componends/Home';
import './componends/Card.css';
import Footer from './componends/Footer';
import Aboutus from './componends/Aboutus';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './componends/Product';
import Login from './componends/Login';


function App() {
  return (
    <>
     <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="AboutUs" element={<Aboutus/>} />
      <Route path="Shop" element={<Product/>} />
      <Route path="Login" element={<Login/>} />
    </Routes>
    <Footer/>
        </>
  );
}

export default App;
