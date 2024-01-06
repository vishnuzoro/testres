import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Head from './components/head';
import Register from './components/register';
import Login from './components/login';
import Portfolio from './components/portfolio';







function App() {
  return (
    <>
    
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/profileinfo' element={<Portfolio/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
   
    </>
  );
}

export default App;
