import React from 'react';
import './Card.css';


const CardContent = () => {
    return ( 
        <div className = 'card-text-content' >
        <h2 > Have fun with React </h2> 
        <p > React takes user interface libraries and helps make interactive websites exciting.Design breathtaking sites and apps through each design phase </p> 
        <a className = 'link' href = 'https://reactjs.org' > reactsite </a> 
        </div>
    );
}

export default CardContent