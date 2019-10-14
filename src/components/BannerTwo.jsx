import React, { Component } from 'react';
import Blurb from './Blurb.jsx'

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <div 
        className='parallax-two'
        style={{display: 'flex', justifyContent: 'center' }} >
            <div ></div>
            <Blurb />
            
        </div> );
    }
}
 
export default Banner;