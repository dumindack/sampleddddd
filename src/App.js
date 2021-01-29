import React, { Component } from 'react';
import { Navbar, Carousel } from 'react-bootstrap';
import './App.css';
import Navigationbar from './components/Navigationbar';
// import register from './components/Form'
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Seller from './components/Seller';
import Footer from './components/Footer';
import Page from './components/Pages/Privacy'




//export default function App() {
  class App extends Component{
    render(){
      return (
        <BrowserRouter>
          <div>
            <Navigationbar/>
              <Route exact path='/' component={Home}/>
              <Route path='/register' component={Seller}/>
            
          </div>
          <Route path="/Page">
            <Page />
          </Route>

        
        </BrowserRouter>
        
       
        
        
  );
  }
}

export default App;