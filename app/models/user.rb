# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  first_name       :string           not null
#  last_name        :string           not null
#  headline         :string           not null
#  pronouns         :string
#  location_country :string           not null
#  location_city    :string           not null
#  about            :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class User < ApplicationRecord

    has_many :experiences,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Experience

    has_many :educations,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Education

    has_many :posts,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Post

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like

    has_many :outgoing_connections,
        primary_key: :id,
        foreign_key: :connector_id,
        class_name: :Connection

    has_many :incoming_connections,
        primary_key: :id,
        foreign_key: :connectee_id,
        class_name: :Connection

    has_one_attached :profile_picture
    has_one_attached :background_photo
    
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, :headline, :location_country, :location_city, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    attr_reader :password
    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end
end
