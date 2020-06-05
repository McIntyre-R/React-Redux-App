import { SEARCHING, LOADING, CHARACTER } from '../actions/actions'



export const initialState = {
    characterName: '',
    serverName: '',
    results: [],
    characterInfo: [],
    freecompanyInfo: [],
    friendsList: [],
    loading: false,
    searching: false,
    character: false,
    idle: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING :
            // console.log('loading' + action.payload)
            return {
                ...state,
                loading: true,
                searching: false,
                character: false,
                idle: false
            }
        case SEARCHING :
            // console.log(action.payload)
            return {
                ...state,
                loading: false,
                searching: true,
                character: false,
                idle: false,
                results: action.payload
            }
        case CHARACTER:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                searching: false,
                character: true,
                idle: false,
                characterInfo: action.payload.Character,
                freecompanyInfo: action.payload.FreeCompany,
                friendsList: action.payload.Friends
            }
        default: 
            return state
    }
}