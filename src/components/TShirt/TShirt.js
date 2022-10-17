import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='tshirt-single'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>$: {price}</h4>
            <button>Buy This</button>
        </div>
    );
};

export default TShirt;