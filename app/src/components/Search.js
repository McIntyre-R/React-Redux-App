import React, {useState} from 'react'
import { searchSubmit} from '../actions/actions'
import { connect } from 'react-redux'


function Search(props) {
    const [searching, setSearching] = useState({
        firstName: '',
        lastName: '',
        server: ''
    });

    const handleChanges = e => {
        setSearching({...searching, [e.target.name]: e.target.value})
        console.log('searching' + searching)
    }
    return(
        <div className='search'>  
            <h1> FFXIV CHARACTER SEARCH </h1>
            <div>
                <input className='border' type='text' name='firstName' value={searching.firstName} onChange={handleChanges} placeholder='Enter First Name' />
                <input className='border' type='text' name='lastName' value={searching.lastName} onChange={handleChanges} placeholder='Last Name' />
                <input className='border' type='text' name='server' value={searching.server} onChange={handleChanges} placeholder='Server' />
                <button className='border' onClick={()=> props.searchSubmit(searching) }>Search</button>
            </div>
        </div>
    )
}

export default connect(null,{searchSubmit})(Search);