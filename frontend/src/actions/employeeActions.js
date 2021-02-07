import {
    QUERY_ADD_SUCCESS,
    QUERY_ADD_REQUEST,
    QUERY_ADD_FAIL,

    LEAVE_ADD_SUCCESS,
    LEAVE_ADD_REQUEST,
    LEAVE_ADD_FAIL,

    MEETING_FETCH_REQUEST,
    MEETING_FETCH_SUCCESS,
    MEETING_FETCH_FAIL,

    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,

    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAIL,
    PROFILE_FETCH_RESET,

} from './../constants/employeeConstants';
import { } from "../constants/employeeConstants";
import axios from 'axios'
import { PRESENT_DAY_FETCH_FAIL, PRESENT_DAY_FETCH_REQUEST, PRESENT_DAY_FETCH_SUCCESS } from './../constants/adminConstants';

export const getMeetings = () => {
    return (dispatch) => {
        dispatch({
            type: MEETING_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = 'http://localhost:4000/meeting/getAll'

        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: MEETING_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: MEETING_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}

export const updateProfile = (email, mobile) => {
    return (dispatch) => {
        dispatch({
            type: PROFILE_UPDATE_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = 'http://localhost:4000/user/profile'

        const body = {
            email, mobile,
        }

        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: PROFILE_UPDATE_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: PROFILE_UPDATE_FAIL,
                    payload: error,
                })
            })
    }
}

export const addLeave = (leaveDate, leavePurpose, leaveStatus) => {
    return (dispatch) => {
        dispatch({
            type: LEAVE_ADD_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage['token'],
            },
        }

        const body = {
            leaveDate,
            leavePurpose,
            leaveStatus,
        }

        const url = 'http://localhost:4000/leave/addleave'

        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: LEAVE_ADD_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: LEAVE_ADD_FAIL,
                    payload: error,
                })
            })
    }
}

export const addQuery = (queryTitle, queryDesc, queryStatus) => {
    return (dispatch) => {
        dispatch({
            type: QUERY_ADD_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                'token': sessionStorage['token'],
            },
        }

        const body = {
            queryTitle,
            queryDesc,
            queryStatus,
        }

        const url = 'http://localhost:4000/query/addquery'

        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: QUERY_ADD_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: QUERY_ADD_FAIL,
                    payload: error,
                })
            })
    }
}

export const getPresentDays = () => {
    return (dispatch) => {
        dispatch({
            type: PRESENT_DAY_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = 'http://localhost:4000/present/getAll'

        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: PRESENT_DAY_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: PRESENT_DAY_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}

export const getProfile = () => {
    return (dispatch) => {
        dispatch({
            type: PROFILE_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = 'http://localhost:4000/user/profile'

        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: PROFILE_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: PROFILE_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}