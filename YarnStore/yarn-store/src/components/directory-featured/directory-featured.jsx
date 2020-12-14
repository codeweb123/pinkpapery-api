import React from 'react';

import FeaturedItem from '../featured-item/featured-item.jsx';

class DirectoryFeatured extends React.Component {
    constructor() {
        super();
         this.state = {
             items: [
            {   title:'yellow chunky blanket',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/717Uf4ZIh3L._AC_SL1500_.jpg',
                id: 1
            },
            {   title:'soft chunky blanket',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51RkcjqX5oL._AC_.jpg',
                id: 2
            }
             ]
         }
    }
    render() {
        return (
            <div className='directory-featured'>
                {
                this.state.items.map(({title, imageUrl, id}) => (
                    <FeaturedItem key={id} title={title} imageUrl={imageUrl} />
                )) 
                }
            </div>
        );
    }
}
 export default DirectoryFeatured;