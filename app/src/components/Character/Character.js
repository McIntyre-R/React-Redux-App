import React from 'react'
import { connect } from 'react-redux'
import FreeCompany from './FreeCompany'
import FriendsList from './FriendsList'




function Character(props){
console.log('character' + props)
return(
    <div>
        <div className='flex'>
            <img className='profile' src={props.characterInfo.Portrait} />    
            
            <div>
                <h1>{props.characterInfo.Name}</h1>
                <h4>{props.characterInfo.Server}</h4>
                <h6>({props.characterInfo.DC})</h6>
                <br />
                <p>Current Job: {props.characterInfo.ActiveClassJob.Name} lvl.{props.characterInfo.ActiveClassJob.Level}</p>
            </div>  
        </div>
        <div className='flex wrap' >
        {props.characterInfo.ClassJobs.map( e => {
        const classArray = e.Name.split(/(.*)\/ /g)
        const classIcon = classArray[2]
        const classFix = classIcon.replace(/ /g,'')
        console.log(classFix)
        return(<div className='classCard'>
            <img className='classImg' src={`https://xivapi.com/cj/1/${classFix}.png`} />
            <p>Level: {e.Level}</p>
            </div>)
        })}
        </div>
        <div>
            <h2>FreeCompany</h2>
            <FreeCompany />
        </div>
        <div>{props.friends[0] ? (<h2>Friends</h2>) : null}
            <FriendsList />
        </div>
    </div>


)

}
const mapStateToProps = state => {
    return{
        characterInfo: state.characterInfo,
        friends: state.friendsList
    }
}

export default connect(mapStateToProps, {})(Character);