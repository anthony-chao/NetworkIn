export const fetchConnections = () => {
    return $.ajax({
        url: `api/connections`,
        method: 'GET'
    })
}

export const addConnection = (connection) => {
    return $.ajax({
        url: `api/connections`,
        method: 'POST',
        data: { connection }
    })
}

export const updateConnection = (connection) => {
    return $.ajax({
        url: `api/connections/${connection.id}`,
        method: 'PATCH',
        data: { connection }
    })
}

export const deleteConnection = (connection) => {
    return $.ajax({
        url: `/api/connections/${connection.id}`,
        method: 'DELETE'
    })
}