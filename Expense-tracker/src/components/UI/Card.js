import './Card.css';
import React from 'react';


const Card = (props) => {
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>
           {props.children}
        </div>
    );
}


export default Card;



// WE canot put component under the component thats why porps.children property comes into the 
// picture. It allows to treat the chilldren of the specific component as a html code thats why
// it runs the perfectly.
//  WE CANNOT RUN THE NESTED COMPONENT DIRECTLY




