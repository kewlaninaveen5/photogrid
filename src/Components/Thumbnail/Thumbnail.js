import React from "react";
import './Thumbnail.css';

const thumbnail = (props) => {
    return (
        <div>
            working
            <img src={props.src} onClick={props.clicked} />
        </div>
        
    )
    
};

export default thumbnail;