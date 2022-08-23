# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Experience.destroy_all
Education.destroy_all

# create users
user1 = User.create!(email: 'demouser@networkin.com', password: "abc123", first_name: 'Demo', last_name: 'User', headline: 'Software Engineer at NetworkIn', location_country: 'United States', location_city: 'Greater New York City Area', about: 'Hello! Welcome to NetworkIn.')
user2 = User.create!(email: 'anthony@networkin.com', password: "abc123", first_name: 'Anthony', last_name: 'Chao', headline: 'CEO at NetworkIn', location_country: 'United States', location_city: 'Greater New York City Area')
user3 = User.create!(email: 'ashketchum@networkin.com', password: "abc123", first_name: 'Ash', last_name: 'Ketchum', headline: 'Main Protagonist at Pokemon Series', location_country: 'Kanto Region', location_city: 'Pallet Town', about: "Spearows! Do you know who I am? I'm Ash, from the town of Pallet. I'm destined to be the world's number one Pokémon master! I can't be defeated by the likes of you. I'm going to capture and defeat you all! ...Pikachu, go inside the Poké Ball--it's the only way! ...COME AND GET ME!!!")
user4 = User.create!(email: 'misty@networkin.com', password: "abc123", first_name: 'Misty', last_name: 'Williams', headline: 'Gym Leader at Cerulean Gym', location_country: 'Kanto Region', location_city: 'Cerulean City')
user5 = User.create!(email: 'brock@networkin.com', password: "abc123", first_name: 'Brock', last_name: 'Harrison', headline: 'Pokemon Breeder at Will', location_country: 'Kanto Region', location_city: 'Pewter City')

# create experiences

experience1 = Experience.create!(user_id: user1.id, title: "Software Engineer", company_name: 'NetworkIn', location: 'Greater New York City Area', start_date: "2022-05-13", end_date: "2022-08-13", description: "This is the best job I've ever had in my life!")
experience2 = Experience.create!(user_id: user1.id, title: "Software Engineer Apprentice", company_name: 'LinkedIn', location: 'Greater New York City Area', start_date: "2020-08-13", end_date: "2022-04-13")
experience3 = Experience.create!(user_id: user2.id, title: "CEO", company_name: 'NetworkIn', location: 'Greater New York City Area', start_date: "2022-05-13", end_date: "2022-08-13")
experience4 = Experience.create!(user_id: user2.id, title: "Assurance Senior", company_name: 'EY', location: 'Greater New York City Area', start_date: "2019-09-18", end_date: "2022-03-31")
experience5 = Experience.create!(user_id: user3.id, title: "Pokemon Trainer", company_name: 'Pokemon World', location: 'Pallet Town', start_date: "1996-09-18", end_date: "2018-05-20")
experience6 = Experience.create!(user_id: user4.id, title: "Gym Leader", company_name: 'Cerulean Gym', location: 'Cerulean City', start_date: "1996-09-18", end_date: "1998-01-13")

# create educations

education1 = Education.create!(user_id: user1.id, school: 'Harvard University', degree: "Bachelor's", field: "Computer Science", start_date: "2012-06-13", end_date: "2016-09-13", activities: 'Debate Club')
education2 = Education.create!(user_id: user1.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education3 = Education.create!(user_id: user2.id, school: 'Baruch College', degree: "Bachelor's of Business Administration", field: "Accounting", start_date: "2016-08-13", end_date: "2018-12-13")
education4 = Education.create!(user_id: user2.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education5 = Education.create!(user_id: user3.id, school: 'Pokemon Academy', degree: "Master's", field: "Pokemon Battling", start_date: "1994-08-13", end_date: "1995-09-13")
education6 = Education.create!(user_id: user5.id, school: 'Pokemon Academy', degree: "Master's", field: "Pokemon Breeding", start_date: "1993-05-13", end_date: "1996-01-13")