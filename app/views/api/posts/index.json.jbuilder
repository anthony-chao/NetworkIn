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
      json.extract! user, :id, :email, :first_name, :last_name, :headline, :pronouns, :location_country, :location_city, :about
    end
  end
end