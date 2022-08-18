class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :company_name, null: false
      t.string :location
      t.date :start_date, null: false
      t.date :end_date
      t.text :description
      t.timestamps
    end
      add_index :experiences, :user_id
  end
end
