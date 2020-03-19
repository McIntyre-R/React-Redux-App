import React from 'react'
import {connect} from 'react-redux'
import Friend from './Friend'



function FriendsList(props){

// console.log(props)
    return(
        <div className='flex friendsList card inverse'>
            {props.friendList.map(friend => {
                return(
                    <Friend friend={friend} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        friendList: state.friendsList
    }
}

export default connect(mapStateToProps,{})(FriendsList)