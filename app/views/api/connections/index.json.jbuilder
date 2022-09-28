json.connections do
  @connections.each do |connection|
    json.set! connection.id do
      json.partial! 'api/connections/connection', connection: connection
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