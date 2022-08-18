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
require 'test_helper'

class ExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
