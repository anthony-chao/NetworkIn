class Like < ApplicationRecord

    validates :user_id, :likeable_id, :likeable_type, presence: true
    validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :likeable, polymorphic: true

end
