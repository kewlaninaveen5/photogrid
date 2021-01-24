import React from "react";
import './Thumbnail.css';

const thumbnail = (props) => {
    return (
        <div className='Div' >
            
            <img className='Image' src={props.src} onClick={props.clicked} alt={props.alt} />
        </div>
        
    )
    
};

export default thumbnail;