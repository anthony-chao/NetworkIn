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
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
