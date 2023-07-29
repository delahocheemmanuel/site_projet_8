import {Outlet} from 'react-router-dom'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './main.css';



function Main() {

  return (
    <>
      <Header/>
          <Outlet />
      <Footer />
    </>
  )
}

export default Main;