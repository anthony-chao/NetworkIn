import * as APIUtil from '../util/session_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
})

export const fetchUser = (userId) => dispatch => {
    return APIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
}

export const updateUser = (user) => dispatch => {
    return APIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
}