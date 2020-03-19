import React from 'react'
import {connect} from 'react-redux'



function FreeCompany(props){

// console.log(props)
    return(
        <div className='flex card inverse'>
            <div className='inverse'>
                <h1 className='inverse'>{props.freeCompany.Name}</h1>
                <h4 className='inverse'>Active Members: {props.freeCompany.ActiveMemberCount}</h4>
            </div>
            <div className='inverse'>
                <h4 className='inverse'>Server: {props.freeCompany.Server}</h4>
                <p className='inverse'>Slogan: {props.freeCompany.Slogan}</p>
                <p className='inverse'>Recruitment: {props.freeCompany.Recruitment}</p>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        freeCompany: state.freecompanyInfo
    }
}

export default connect(mapStateToProps,{})(FreeCompany)