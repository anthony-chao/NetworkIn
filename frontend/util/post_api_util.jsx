export const fetchPosts = () => {
    return $.ajax({
        url: `api/posts`,
        method: 'GET'
    })
}

export const addPost = formData => {
    return $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updatePost = (formData, postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = (post) => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'DELETE'
    })
}