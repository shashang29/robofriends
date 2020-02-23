import {
    CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'


const initialSearchState = {
    searchField: ''
}


export const searchRobots = (state = initialSearchState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: return { ...state, searchField: action.payload }
        default: return state;
    }
}

const initialRobotState = {
    robots: [],
    pending: false,
    error: ''
}


export const requestRobots = (state = initialRobotState, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                pending: false
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload,
                pending: false
            }
        default:
            return state
    }
}