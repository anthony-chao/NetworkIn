export const fetchPosts = () => {
    return $.ajax({
        url: `api/posts`,
        method: 'GET'
    })
}

export const addPost = (post) => {
    return $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: { post }
    })
}

export const updatePost = (post) => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: { post }
    })
}

export const deletePost = (post) => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'DELETE'
    })
}