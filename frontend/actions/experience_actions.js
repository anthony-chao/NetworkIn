import * as APIExperienceUtil from '../util/experience_api_util'

export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';
export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

const receiveExperience = (experience) => ({
    type: RECEIVE_EXPERIENCE,
    experience: experience
})

const removeExperience = (experience) => ({
    type: REMOVE_EXPERIENCE,
    experience: experience
})

export const addExperience = (experience) => dispatch => {
    return APIExperienceUtil.addExperience(experience)
    .then((experience) => dispatch(receiveExperience(experience)))
}

export const updateExperience = (experience) => dispatch => {
    return APIExperienceUtil.updateExperience(experience)
    .then((experience) => dispatch(receiveExperience(experience)))
}

export const deleteExperience = (experience) => dispatch => {
    return APIExperienceUtil.deleteExperience(experience)
    .then((experience) => dispatch(removeExperience(experience)))
}