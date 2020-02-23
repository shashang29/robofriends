import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'



export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (disptach) => {
    disptach({
        type: REQUEST_ROBOTS_PENDING

    });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => disptach({
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data
        }))
        .catch(error => disptach({
            type: REQUEST_ROBOTS_FAILED,
            payload: error

        }))
}