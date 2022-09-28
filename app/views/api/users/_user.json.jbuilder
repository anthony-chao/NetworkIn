json.extract! user, :id, :email, :first_name, :last_name, :headline, :pronouns, :location_country, :location_city, :about, :incoming_connections, :outgoing_connections

json.profilePictureUrl url_for(user.profile_picture) if user.profile_picture.attached?

json.backgroundPhotoUrl url_for(user.background_photo) if user.background_photo.attached?