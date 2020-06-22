import React, {useState, useEffect} from 'react'
import { searchSubmit, setIdle} from '../actions/actions'
import { connect } from 'react-redux'
import FA from 'react-fontawesome'
import { audio } from '../App'

function Search(props) {
    const [searching, setSearching] = useState({
        firstName: '',
        lastName: '',
        server: ''
    });
    const [muted, setMuted] = useState({
        muted: false
    })
    const changeMute = (bool) => {
        audio.muted=bool
        setMuted(bool)
    }

    const handleChanges = e => {
        setSearching({...searching, [e.target.name]: e.target.value})
    }
    return(
        <div className='search'>  
            <div onClick={() => props.setIdle()}>
            <h1> FFXIV CHARACTER SEARCH </h1>
            </div>
            <div>
                <input className='border' type='text' name='firstName' value={searching.firstName} onChange={handleChanges} placeholder='Enter First Name' />
                <input className='border' type='text' name='lastName' value={searching.lastName} onChange={handleChanges} placeholder='Last Name' />
                <input className='border' type='text' name='server' value={searching.server} onChange={handleChanges} placeholder='Server' />
                <button className='border' onClick={()=> props.searchSubmit(searching) }>Search</button>
                <div className='padding-top'>
                { muted === true? 
                <FA name="fas fa-volume-mute"   onClick={() => changeMute(false)}/> 
                :
                <FA name="fas fa-volume-up" onClick={() => changeMute(true)} /> 
                }
                </div>
            </div>
        </div>
    )
}

export default connect(null,{searchSubmit, setIdle})(Search);