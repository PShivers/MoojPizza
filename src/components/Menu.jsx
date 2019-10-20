import React, { Component } from 'react';
import MenuItem from './MenuItem';
import MenuSideNav from './MenuSideNav.jsx'

class Menu extends Component {
    state = { 
        items:[{
            name: 'Hurricane',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
            description:"This classic covers all the bases. As American as a pizza can get, the Hurricane features layers of pepperoni, Italian sausage, mushrooms, white onions, and green peppers, atop our one of a kind tomato sauce and mozzarella cheese.",
            type: "pizza",
            prices: [5.25,17,23]
        },
        {
            name: 'Mardi Gras',
            image: 'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            description: 'Fat Tuesday in pizza form. The Mardi Gras comes topped with Italian Sausage, applewood smoked bacon, green bell peppers, and purple onions.',
            prices: [4.75,16,21]
        }
    ]
     }

    render() { 
        return ( 
        <div className="ui segment menu-page">
            <MenuSideNav / >
            <div className='menu'>
                {this.state.items.map(item=>{
                    return <MenuItem item={item}/>
                })}
            </div>
        </div>
        );
    }
}
 
export default Menu;