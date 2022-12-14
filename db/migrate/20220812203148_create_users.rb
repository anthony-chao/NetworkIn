class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :headline, null: false
      t.string :pronouns
      t.string :location_country, null: false
      t.string :location_city, null: false
      t.text :about
      t.timestamps
    end
      add_index :users, :email, unique: true
      add_index :users, :session_token, unique: true
      add_index :users, :first_name
      add_index :users, :last_name
  end
end
