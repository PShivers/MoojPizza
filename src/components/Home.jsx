import React, {Component} from 'react';
import Header from "./Header.jsx";
import Banner from './Banner.jsx';
import BannerBreaker from './BannerBreaker.jsx';
import BannerTwo from './BannerTwo.jsx';
import Carousel from './Carousel.jsx';
import LocationAndHours from './LocationAndHours.jsx'


class Home extends Component {
  render() { 
    return (
          <div className="about">
            <Header />
            <Banner />
            <BannerBreaker />
            <BannerTwo />
            <Carousel />
            <LocationAndHours />
          </div>
    );
  }
}
 
export default Home;

