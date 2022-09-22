# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  post_id           :integer          not null
#  parent_comment_id :integer
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord

    validates :user_id, :post_id, :body, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
        
    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :parent_comment,
        class_name: :Comment,
        optional: true

    has_many :comments,
        foreign_key: :parent_comment_id,
        dependent: :destroy

    has_many :likes,
        as: :likeable,
        dependent: :destroy
end
