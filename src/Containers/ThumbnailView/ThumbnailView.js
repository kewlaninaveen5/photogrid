import React, { Component } from "react";
import './ThumbnailView.css';
import axios from 'axios';
import Thumbnail from '../../Components/Thumbnail/Thumbnail';
import { LazyLoadImage } from "react-lazy-load-image-component";
import FullView from '../../Components/FullView/FullView';
import ArrowKeysReact from 'arrow-keys-react';

class ThumbnailView extends Component {

    state = {
        imageURLs: [],
        loading: true,
        fullImage: false,
        imageValue: null
    }

    //  constructor (props) {
    //     super (props)
        // const fetchedImageURLs = [];
        // for (let IMAGE_NUMBER = 0; IMAGE_NUMBER < 30; ++IMAGE_NUMBER) {
        //      axios.get(`/200x200?text=${IMAGE_NUMBER+1}`)
        //     .then(res => {
        //         console.log('fetchedImageURLs = ', fetchedImageURLs)
        //         return fetchedImageURLs.push( res.config.url)
        //     })
        //     .catch(err => console.log(err))
        // }
        // console.log()
        // this.state = {
        //     imageURLs: fetchedImageURLs,
        //     loading: false
        // }
        
        // ({imageURLs: fetchedImageURLs, loading: false})
        
    // }
    

    render () {
        const url200 = '/200x200?text=';
        const fetchedImageURLs = [];
        for (let IMAGE_NUMBER = 1; IMAGE_NUMBER <= 300; ++IMAGE_NUMBER) {
            fetchedImageURLs.push(`${IMAGE_NUMBER}`)
        } 

        const thumbnailClicked = (Number) => {
            this.setState({fullImage: true, imageValue: Number})

        }

        const closeFullView = () => {
            this.setState({fullImage: false})
        }

        const Previous = (currentImage) => {
            console.log('Previous called')
            this.setState({imageValue: +currentImage - 1})

        }

        const Next = (currentImage) => {
            console.log('Next called')
            this.setState({imageValue: +currentImage + 1})

        }

        ArrowKeysReact.config({
            left: () =>{
               return Previous(this.state.imageValue)
                
            } ,
            right: () =>{
                
                return Next(this.state.imageValue)
             
            } 
        });

        // axios.get(`/200x200?text=${IMAGE_NUMBER+1}`)
        // .then(res => {
            
        //     return fetchedImageURLs.push(res.config.url)
        // })
        // .catch(err => console.log(err))
        // console.log('fetchedImageURLs = ', fetchedImageURLs)
        // console.log()
        // this.setState({imageURLs: fetchedImageURLs,
        //     loading: false}) 
        // { 
        //     //    <Thumbnail src = {url} key = {url} />
        //    }
        return (
            <div>
               { 
                this.state.fullImage ? (
                    <div {...ArrowKeysReact.events} >
                        <button className='Close' onClick={() => closeFullView() } >Close</button>
                        <button autoFocus className='Previous' onClick={() =>Previous(this.state.imageValue)} >Previous</button>
                        <FullView src={this.state.imageValue} />
                        <button  className='Next' onClick={() =>Next(this.state.imageValue)} >Next</button>

                    </div> ):
                     fetchedImageURLs.map(u => {
                    return <LazyLoadImage
                         src={url200 + u}  
                         key={u} 
                         alt={u}
                         onClick={() => thumbnailClicked(u) } />
                })}
            </div>

        )
    }
};


export default ThumbnailView;