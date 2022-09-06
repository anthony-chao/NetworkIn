class Post < ApplicationRecord
    validates :user_id, :body, presence: true

    has_one_attached :photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
