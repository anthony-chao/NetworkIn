class Connection < ApplicationRecord

    validates :connector_id, uniqueness: { scope: [:connectee_id] }

    belongs_to :connector,
        primary_key: :id,
        foreign_key: :connector_id,
        class_name: :User

    belongs_to :connectee,
        primary_key: :id,
        foreign_key: :connectee_id,
        class_name: :User

end