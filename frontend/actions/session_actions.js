import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
})

export const login = (user) => dispatch => {
    return APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors)))
}

export const logout = () => dispatch => {
    return APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors)))
}

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors)))
}

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})


// actions to retain sign up information in global state

export const RECEIVE_EMAIL_PASSWORD = 'RECEIVE_EMAIL_PASSWORD'

export const receiveEmailandPassword = (data) => ({
    type: RECEIVE_EMAIL_PASSWORD,
    data: data
})

export const RECEIVE_SIGNUP_NAMES = 'RECEIVE_SIGNUP_NAMES'

export const receiveSignupName = (data) => ({
    type: RECEIVE_SIGNUP_NAMES,
    data: data
})

export const RECEIVE_SIGNUP_LOCATION = 'RECEIVE_SIGNUP_LOCATION'

export const receiveSignupLocation = (data) => ({
    type: RECEIVE_SIGNUP_LOCATION,
    data: data
})

export const RECEIVE_SIGNUP_JOB = 'RECEIVE_SIGNUP_JOB'

export const receiveSignupJob = (data) => ({
    type: RECEIVE_SIGNUP_JOB,
    data: data
})

// action to fetch the user for the user show page

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
})

export const fetchUser = (userId) => dispatch => {
    return APIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
}