export const fetchEducations = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/educations`,
        method: 'GET'
    })
}

export const addEducation = (education) => {
    return $.ajax({
        url: '/api/educations',
        method: 'POST',
        data: { education }
    })
}

export const updateEducation = (education) => {
    return $.ajax({
        url: `/api/educations/${education.id}`,
        method: 'PATCH',
        data: { education }
    })
}

export const deleteEducation = (education) => {
    return $.ajax({
        url: `/api/educations/${education.id}`,
        method: 'DELETE'
    })
}