# == Schema Information
#
# Table name: experiences
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  title        :string           not null
#  company_name :string           not null
#  location     :string
#  start_date   :date             not null
#  end_date     :date
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Experience < ApplicationRecord

    validates :user_id, :title, :company_name, :start_date, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
