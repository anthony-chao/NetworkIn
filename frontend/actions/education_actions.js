import * as APIUtil from '../util/education_api_util'

export const RECEIVE_EDUCATIONS = 'RECEIVE_EDUCATIONS';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

const receiveEducations = (educations) => ({
    type: RECEIVE_EDUCATIONS,
    educations: educations
});

const receiveEducation = (education) => ({
    type: RECEIVE_EDUCATION,
    education: education
});

const removeEducation = (education) => ({
    type: REMOVE_EDUCATION,
    education: education
});

export const fetchEducations = (userId) => dispatch => {
    return APIUtil.fetchEducations(userId)
    .then((educations) => dispatch(receiveEducations(educations)))
};

export const addEducation = (education) => dispatch => {
    return APIUtil.addEducation(education)
    .then((education) => dispatch(receiveEducation(education)))
};

export const updateEducation = (education) => dispatch => {
    return APIUtil.updateEducation(education)
    .then((education) => dispatch(receiveEducation(education)))
};

export const deleteEducation = (education) => dispatch => {
    return APIUtil.deleteEducation(education)
    .then((education) => dispatch(removeEducation(education)))
};