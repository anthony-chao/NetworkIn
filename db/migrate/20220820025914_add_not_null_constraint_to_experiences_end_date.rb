class AddNotNullConstraintToExperiencesEndDate < ActiveRecord::Migration[5.2]
  def change
    change_column_null :experiences, :end_date, false
  end
end
