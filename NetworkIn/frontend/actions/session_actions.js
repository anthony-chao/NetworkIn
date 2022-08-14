import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

// Actions for User Sign Up
export const RECEIVE_SIGNUP_EMAIL = 'RECIEVE_SIGNUP_EMAIL';
export const RECEIVE_SIGNUP_NAME = 'RECEIVE_SIGNUP_NAME';
export const RECEIVE_SIGNUP_LOCATION = 'RECEIVE_SIGNUP_LOCATION';
export const RECEIVE_SIGNUP_HEADLINE = 'RECEIVE_SIGNUP_HEADLINE';

export const receiveSignupEmail = (email) => ({
    type: RECEIVE_SIGNUP_EMAIL,
    email: email
})

export const receiveSignupName = (name) => ({
    type: RECEIVE_SIGNUP_NAME,
    name: name
})

export const receiveSignupLocation = (location) => ({
    type: RECEIVE_SIGNUP_LOCATION,
    location: location
})

export const receiveSignupHeadline = (headline) => ({
    type: RECEIVE_SIGNUP_HEADLINE,
    headline: headline
})