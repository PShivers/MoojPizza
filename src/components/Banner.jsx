import React, { Component } from 'react';

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <div 
        className='parallax'
        style={{display: 'flex', justifyContent: 'center' ,borderTop:'5px solid black'}} >
            <img src='https://static.wixstatic.com/media/2a36f3_9c7c99971e8c4eeca092cc6f91b27063~mv2.png/v1/fill/w_886,h_890,al_c,q_85/2a36f3_9c7c99971e8c4eeca092cc6f91b27063~mv2.webp' 
            style={{maxWidth: '40%'}}
            />
        </div> );
    }
}
 
export default Banner;