import React, {Component} from 'react';
import Header from "./components/Header.jsx";
import Banner from './components/Banner.jsx';
import BannerBreaker from './components/BannerBreaker.jsx';
import BannerTwo from './components/BannerTwo.jsx';
import Carousel from './components/Carousel.jsx';
import ContactInfo from './components/ContactInfo.jsx'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <div className="about">
        <Header />
        <Banner />
        <BannerBreaker />
        <BannerTwo />
        <Carousel />
        <ContactInfo />

          
        </div>
      </div> );
  }
}
 
export default App;

