# == Schema Information
#
# Table name: educations
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  school      :string           not null
#  degree      :string
#  field       :string
#  start_date  :date
#  end_date    :date
#  activities  :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Education < ApplicationRecord

    validates :user_id, :school, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
