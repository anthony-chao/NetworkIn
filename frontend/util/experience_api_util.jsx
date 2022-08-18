export const addExperience = (experience) => {
    return $.ajax({
        url: '/api/experiences',
        method: 'POST',
        data: { experience }
    })
}

export const updateExperience = (experience) => {
    return $.ajax({
        url: `/api/experiences/${experience.id}`,
        method: 'PATCH',
        data: { experience }
    })
}

export const deleteExperience = (experience) => {
    return $.ajax({
        url: `/api/experiences/${experience.id}`,
        method: 'DELETE'
    })
}