import React from 'react'




function Friend(props){

console.log(props)
    return(
        <div className='flex friends inverse'>
            <img className='imgFriend' src={props.friend.Avatar} />
            <div className='inverse'>
              <h1 className='inverse'>{props.friend.Name}</h1> 
              <h3 className='inverse'>{props.friend.Server}</h3>
            </div>
            
        </div>
    )
}

export default Friend;