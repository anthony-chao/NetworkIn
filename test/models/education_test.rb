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
require 'test_helper'

class EducationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
