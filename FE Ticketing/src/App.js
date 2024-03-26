
import React from 'react';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer/Footer';


function App() {
  return (
    <div >
      <Header/>
      <ToastContainer/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
