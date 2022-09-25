export const addComment = (comment) => {
    return $.ajax({
        url: `api/comments`,
        method: 'POST',
        data: { comment }
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        url: `api/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
}

export const deleteComment = (comment) => {
    return $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'DELETE'
    })
}