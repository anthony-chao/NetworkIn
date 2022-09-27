export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
}

export const signup = (user) => {
    return $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user }
    })
}

export const fetchUser = (userId) => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
}

export const updateUser = (user) => {
    return $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}

export const updateUserPhotos = (formData, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
}