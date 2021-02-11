import {
    MEETING_FETCH_REQUEST,
    MEETING_FETCH_SUCCESS,
    MEETING_FETCH_FAIL,
    MEETING_FETCH_RESET,

    QUERY_ADD_SUCCESS,
    QUERY_ADD_REQUEST,
    QUERY_ADD_FAIL,
    QUERY_ADD_RESET,

    LEAVE_ADD_REQUEST,
    LEAVE_ADD_SUCCESS,
    LEAVE_ADD_FAIL,
    LEAVE_ADD_RESET,

    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,

    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAIL,
    PROFILE_FETCH_RESET,
} from '../constants/employeeConstants'

export const employeefetchMeetings = (state = {}, action) => {
    switch (action.type) {
        case MEETING_FETCH_REQUEST:
            return { loading: true }
        case MEETING_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case MEETING_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case MEETING_FETCH_RESET:
            return {}
        default:
            return state
    }
}

export const employeeUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_REQUEST:
            return { loading: true }
        case PROFILE_UPDATE_SUCCESS:
            return { loading: false, response: action.payload }
        case PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PROFILE_UPDATE_RESET:
            return {}
        default:
            return state
    }
}

export const employeeAddQuery = (state = {}, action) => {
    switch (action.type) {
        case QUERY_ADD_REQUEST:
            return { loading: true }
        case QUERY_ADD_SUCCESS:
            return { loading: false, response: action.payload }
        case QUERY_ADD_FAIL:
            return { loading: false, error: action.payload }
        case QUERY_ADD_RESET:
            return {}
        default:
            return state
    }
}

export const employeeAddLeave = (state = {}, action) => {
    switch (action.type) {
        case LEAVE_ADD_REQUEST:
            return { loading: true }
        case LEAVE_ADD_SUCCESS:
            return { loading: false, response: action.payload }
        case LEAVE_ADD_FAIL:
            return { loading: false, error: action.payload }
        case LEAVE_ADD_RESET:
            return {}
        default:
            return state
    }
}

export const employeeProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_FETCH_REQUEST:
            return { loading: true }
        case PROFILE_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case PROFILE_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case PROFILE_FETCH_RESET:
            return {}
        default:
            return state
    }
}