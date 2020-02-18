import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
class ImageList extends React.Component{

    render(){
        const Images = this.props.images.map(image => <ImageCard key={image.id} image={image}/>)

        return(
            <div className='image-list'>
                {Images}
            </div>
        );
    }
}

export default ImageList;