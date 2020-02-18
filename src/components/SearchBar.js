import React from 'react';


class SearchBar extends React.Component{

    state={term: ''}

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.whenSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui sagment" >
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="search" style={{color: 'white'}}>Image Search</label>
                        <input id='search' placeholder='Image Search' type="text" value={this.state.term} onChange={(event)=>this.setState({
                            term: event.target.value  
                        })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;