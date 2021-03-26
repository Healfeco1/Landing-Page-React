import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './components/Menu/Menu';
import Container from './components/Container/Container'
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Container/>
    <Portfolio/>
    <About/>
    <ContactMe/>
    <Footer/>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
