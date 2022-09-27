json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.users do 
  User.all.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.comments do
  Comment.all.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.likes do
  Like.all.each do |like|
    json.set! like.id do
      json.extract! like, :id, :user_id, :likeable_id, :likeable_type
    end
  end
end