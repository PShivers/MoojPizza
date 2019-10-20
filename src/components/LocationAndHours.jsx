import React, { Component } from 'react';
import MapMap from "./MapMap"

class LocationAndHours extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="location-and-hours-title">Location & Hours</div>
                <div
                 className='location-and-hours'
                >
                    <div className='map-container'>
                        <p>
                        WE DELIVER! 
                        </p>
                        <p>Tuesday thru Friday starting at 4:00 PM</p>
                        <p>Saturday & Sunday at 12 noon</p>
                        
                        <MapMap className='map'/>
                        
                    </div>
                    

                    <div className='contact-info'>
                        {/* <div className='restaurant-name'>
                            Mojo Pizza 'n' Pub
                        </div>
                        <div className='address'>
                            657 E. Lake Dr.
                            Decatur, GA  30030

                            Tel: 404 373-1999
                            Email: mojopizza657@gmail.com
                        </div> */}
                        <div className='hours'>
                            <p className='day'>
                            Monday 12:00 PM – 9:00 PM
                            </p>
                            <p className='day'>
                            Tuesday 12:00 PM – 9:00 PM
                            </p>
                            <p className='day'> 
                            Wednesday 12:00 PM – 9:00 PM
                            </p>
                            <p className='day'>
                            Thursday  12:00 PM – 9:00PM
                            </p>
                            <p className='day'>
                            Friday 11:00 AM – 10:00 PM 
                            </p>
                            <p className='day'>
                            Saturday 11:00 AM – 10:00 PM
                            </p>
                            <p className='day'>
                            Sunday    12:00 PM – 9:00 PM
                            </p>
                        </div>
                    </div>
                    
                </div> 
            </div>
        
        );
    }
}
 
export default LocationAndHours;