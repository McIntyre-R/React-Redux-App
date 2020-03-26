import React from 'react'
import { connect } from 'react-redux'
import Result from './Result'



function Results(props){
    // console.log(props)
    return(
        <div>
           {props.results.map( res => (
                <Result character={res} />
            ))} 
        </div>
    )

}
const mapStateToProps = state => {
    // console.log(state)
    return{    
        results: state.results
    }
}

export default connect(mapStateToProps,{})(Results);