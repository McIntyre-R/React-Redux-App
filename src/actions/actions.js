import axios from 'axios'

export const LOADING = 'LOADING'
export const SEARCHING = 'SEARCHING'
export const CHARACTER = 'CHARACTER'
export const IDLE = 'IDLE'



export const searchSubmit = info => dispatch => {
    dispatch({ type: LOADING });
    axios.get(`https://xivapi.com/character/search?name=${info.firstName}+${info.lastName}&server=${info.server}`)
    .then(res => dispatch({ type: SEARCHING, payload: res.data.Results}))
    .catch(err => console.log(err))
}

export const getCharacter = info => dispatch => {
    dispatch({ type: LOADING });
    axios.get(`https://xivapi.com/character/${info}?data=FR,FC,CJ,MIMO`)
    .then(res => dispatch({ type: CHARACTER, payload: res.data}))
    .catch(err => console.log(err))
}

export const setIdle = info => dispatch => {
    dispatch({type: IDLE})
}





