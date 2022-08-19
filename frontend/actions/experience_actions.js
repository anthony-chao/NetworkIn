import * as APIUtil from '../util/experience_api_util'

export const RECEIVE_EXPERIENCES = 'RECEIVE_EXPERIENCES';
export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';
export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

const receiveExperiences = (experiences) => ({
    type: RECEIVE_EXPERIENCES,
    experiences: experiences
})

const receiveExperience = (experience) => ({
    type: RECEIVE_EXPERIENCE,
    experience: experience
})

const removeExperience = (experience) => ({
    type: REMOVE_EXPERIENCE,
    experience: experience
})

export const fetchExperiences = (userId) => dispatch => {
    return APIUtil.fetchExperiences(userId)
    .then((experiences) => dispatch(receiveExperiences(experiences)))
}

export const addExperience = (experience) => dispatch => {
    return APIUtil.addExperience(experience)
    .then((experience) => dispatch(receiveExperience(experience)))
}

export const updateExperience = (experience) => dispatch => {
    return APIUtil.updateExperience(experience)
    .then((experience) => dispatch(receiveExperience(experience)))
}

export const deleteExperience = (experience) => dispatch => {
    return APIUtil.deleteExperience(experience)
    .then((experience) => dispatch(removeExperience(experience)))
}