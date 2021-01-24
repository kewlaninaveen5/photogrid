import React from "react";
import './FullView.css';
import axios from 'axios';

const fullView = (props) => {

    const url2000 = 'http://via.placeholder.com/2000x2000?text=';

    const download = (number) => {
        axios({
            url:`http://via.placeholder.com/3900x3900?text=${number}`,
            method: 'GET',
            responseType:'blob'
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement('a');

            link.href = url;

            link.setAttribute('download', `image${number}.png`);

            document.body.appendChild(link);

            link.click()
        } )

    }

    

    return (
        <div className='mainDiv'>
            
            <img className='FullView' src={url2000 + props.src} />
            <button className='Download' onClick={() =>download(props.src)} >Download Full Size image</button>
        
        </div>
    )
};
    

export default fullView;