import React from 'react'
import '../../index.css'
import { connect } from 'react-redux'
import { getCharacter } from '../../actions/actions'


function Result(props){
    // console.log(props)
return(
    <div className='flex card' onClick={()=> props.getCharacter(props.character.ID)}>
        
        <img src={props.character.Avatar} />
        
        <div>
            <h1>{props.character.Name}</h1>
            <h4>{props.character.Server}</h4>
        </div>
    </div>
)
}


export default connect(null,{getCharacter})(Result);



