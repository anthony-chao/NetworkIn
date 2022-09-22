json.extract! post, :id, :user_id, :body, :created_at, :updated_at, :likes, :comments

json.photoUrl url_for(post.photo) if post.photo.attached?