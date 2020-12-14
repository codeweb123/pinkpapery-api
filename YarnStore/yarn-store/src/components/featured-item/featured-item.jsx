import React from 'react';
import './featured-item.styles.scss';

const FeaturedItem = ({ title, imageUrl }) => (
    <div 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    className='featured-item'
    >
        <div className='item-info'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>$45.00 FREE shipping</span>
        </div>
    </div>
);

export default FeaturedItem;

//destructuring {title} = props.title