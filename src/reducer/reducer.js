import { SEARCHING, LOADING, CHARACTER , IDLE} from '../actions/actions'



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
            return {
                ...state,
                loading: true,
                searching: false,
                character: false,
                idle: false
            }
        case SEARCHING :
            return {
                ...state,
                loading: false,
                searching: true,
                character: false,
                idle: false,
                results: action.payload
            }
        case CHARACTER:
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
        case IDLE :
            return {
                ...state,
                loading: false,
                searching: false,
                character: false,
                idle: true
            }
        default: 
            return state
    }
}