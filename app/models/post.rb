# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :user_id, :body, presence: true

    has_one_attached :photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        as: :likeable,
        dependent: :destroy

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy

end
