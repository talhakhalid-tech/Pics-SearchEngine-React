import React from 'react';
import unsplash from '../API/Unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css'

class App extends React.Component{

    state={ images: [] ,image_total: 0};

     onSearchSubmit = async (term) => {
        const Response = await unsplash.get('/search/photos',{
            params:{query: term,
                    per_page: 30},

        })

        this.setState({images: Response.data.results, image_total:Response.data.total});
    }

    render(){
        return (
            <div className='ui container' style={{marginTop: '10px' }}>
                <SearchBar whenSubmit={this.onSearchSubmit}/>
                <p style={{color: 'white'}}>Found: {this.state.image_total} images </p>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;