import * as APIEducationUtil from '../util/education_api_util'

export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

const receiveEducation = (education) => ({
    type: RECEIVE_EDUCATION,
    education: education
})

const removeEducation = (education) => ({
    type: REMOVE_EDUCATION,
    education: education
})

export const addEducation = (education) => dispatch => {
    return APIEducationUtil.addEducation(education)
    .then((education) => dispatch(receiveEducation(education)))
}

export const updateEducation = (education) => dispatch => {
    return APIEducationUtil.updateEducation(education)
    .then((education) => dispatch(receiveEducation(education)))
}

export const deleteEducation = (education) => dispatch => {
    return APIEducationUtil.deleteEducation(education)
    .then((education) => dispatch(removeEducation(education)))
}
