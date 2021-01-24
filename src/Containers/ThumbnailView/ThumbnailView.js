import React, { Component } from "react";
import './ThumbnailView.css';
// import axios from 'axios';
import Thumbnail from '../../Components/Thumbnail/Thumbnail';
// import { LazyLoadImage } from "react-lazy-load-image-component";
import FullView from '../../Components/FullView/FullView';
import ArrowKeysReact from 'arrow-keys-react';
import InfiniteScroll from 'react-infinite-scroll-component';

class ThumbnailView extends Component {

    // state = {
    //     Length: 20,
    //     imageURLs: [],
    //     loading: true,
    //     fullImage: false,
    //     imageValue: null
    // }

     constructor (props) {
        super (props)
        const fetchedImageURLs = [];

        for (let IMAGE_NUMBER = 1; IMAGE_NUMBER <= (20) && IMAGE_NUMBER<=300; ++IMAGE_NUMBER) {

        fetchedImageURLs.push(`${IMAGE_NUMBER}`)

        this.state = {
            Length: 20,
            imageURLs: fetchedImageURLs,
            loading: true,
            fullImage: false,
            imageValue: null
        }

        
    }
        
        
    }

    componentDidUpdate () {

    }
    

    render () {
        const url200 = 'http://via.placeholder.com/200x200?text=';
        // const fetchedImageURLs = [];

        
        // const firstRendering = () => {
        //     if(this.state.imageURLs.length === 0) {
        //     for (let IMAGE_NUMBER = 1; IMAGE_NUMBER <= (20) && IMAGE_NUMBER<=300; ++IMAGE_NUMBER) {

        //         fetchedImageURLs.push(`${IMAGE_NUMBER}`)
                
        //     }
        //     this.setState({imageURLs: fetchedImageURLs})
        //     // console.log('ran once', fetchedImageURLs);
        // }

        // }
        
         

        const thumbnailClicked = (Number) => {
            this.setState({fullImage: true, imageValue: Number})

        }

        const closeFullView = () => {
            this.setState({fullImage: false})
        }

        const Previous = (currentImage) => {
            // console.log('Previous called')
            if(this.state.imageValue > (1)) {
            this.setState({imageValue: +currentImage - 1})
            }
            

        }

        const Next = (currentImage) => {
            // console.log('Next called')
            if(this.state.imageValue < (300)) {
            this.setState({imageValue: +currentImage + 1})
                }

        }

        ArrowKeysReact.config({
            left: () =>{
               return Previous(this.state.imageValue)
                
            } ,
            right: () =>{
                
                return Next(this.state.imageValue)
             
            } 
        });

        const fetchMoreData = () => {
            // console.log('fetchMoreData called', fetchedImageURLs, '\n')
            let ll = this.state.imageURLs
            for (let IMAGE_NUMBER = this.state.Length + 1; IMAGE_NUMBER <= (this.state.Length + 10); ++IMAGE_NUMBER) {
                ll.push(`${IMAGE_NUMBER}`)
                // console.log('FIRSTFETCHING', ll)
            }
            this.setState({Length: ll.length, imageURLs: ll })
            // console.log(ll, this.state.Length);
        }

        
        return (
            <div>
                {/* {
                    // this.state.imageURLs.length === 0 ?
                     () => firstRendering() 
                    //  : null

                } */}
               { 
                this.state.fullImage ? (
                    <div {...ArrowKeysReact.events} >
                        <button className='Close' onClick={() => closeFullView() } >Close</button>
                        <button autoFocus className='Previous' onClick={() =>Previous(this.state.imageValue)} >Previous</button>
                        <FullView src={this.state.imageValue} />
                        <button  className='Next' onClick={() =>Next(this.state.imageValue)} >Next</button>

                    </div> ):
                        <InfiniteScroll 
                        dataLength={this.state.Length}
                        next={() => {
                            // console.log('next called\n')
                            fetchMoreData()
                        }}//this.state.Length)}
                        hasMore={this.state.Length <= 290}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                              Congratulations! you have seen all the photos
                            </p>
                          } >

                            {this.state.imageURLs.map(u => {
                            // return <img 
                            // className='Image'
                            // src={url200 + u}  
                            // key={u} 
                            // alt={u}
                            // onClick={() => thumbnailClicked(u) } />

                            return <Thumbnail 
                            
                            src={url200 + u}  
                            key={u} 
                            alt={u}
                            clicked={() => thumbnailClicked(u) } />

                            })
                        }

                        </InfiniteScroll>



                     
                }
            </div>

        )
    }
};


export default ThumbnailView;