@connections.each do |connection|
  json.set! connection.id do
    json.partial! 'api/connections/connection', connection: connection
  end
end

json.users do
  User.all.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :headline, :pronouns, :location_country, :location_city
    end
  end
end