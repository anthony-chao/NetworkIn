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
Post.destroy_all

# create users
user1 = User.create!(email: 'demouser@networkin.com', password: "abc123", first_name: 'Demo', last_name: 'User', headline: 'Software Engineer at NetworkIn', location_country: 'United States', location_city: 'Greater New York City Area', about: 'Hello! Welcome to NetworkIn.')
user2 = User.create!(email: 'anthony@networkin.com', password: "abc123", first_name: 'Anthony', last_name: 'Chao', headline: 'CEO at NetworkIn', location_country: 'United States', location_city: 'Greater New York City Area')
user3 = User.create!(email: 'jenniekim@networkin.com', password: "abc123", first_name: 'Jennie', last_name: 'Kim', headline: 'Brand Ambassador at Chanel', location_country: 'South Korea', location_city: 'Seoul', about: "Blackpink in your area!")
user4 = User.create!(email: 'lisa@networkin.com', password: "abc123", first_name: 'Lisa', last_name: 'Manoban', headline: 'Brand Ambassador at Celine', location_country: 'South Korea', location_city: 'Seoul')
user5 = User.create!(email: 'rosepark@networkin.com', password: "abc123", first_name: 'Rose', last_name: 'Park', headline: 'Brand Ambassador at YSL', location_country: 'South Korea', location_city: 'Seoul')
user6 = User.create!(email: 'jisoo@networkin.com', password: "abc123", first_name: 'Jisoo', last_name: 'Kim', headline: 'Lead Actress at Snowdrop', location_country: 'South Korea', location_city: 'Seoul')
user7 = User.create!(email: 'april@networkin.com', password: "abc123", first_name: 'April', last_name: 'Rain', headline: 'Partner at Ernst & Young', location_country: 'United States', location_city: 'New York')
user8 = User.create!(email: 'may@networkin.com', password: "abc123", first_name: 'May', last_name: 'Smith', headline: 'Financial Analyst at Google', location_country: 'United States', location_city: 'San Francisco')
user9 = User.create!(email: 'june@networkin.com', password: "abc123", first_name: 'June', last_name: 'Snow', headline: 'Program Manager at Netflix', location_country: 'United States', location_city: 'Seattle')
user10 = User.create!(email: 'july@networkin.com', password: "abc123", first_name: 'July', last_name: 'Woo', headline: 'Operations Associate at Meta', location_country: 'United States', location_city: 'Austin')
user11 = User.create!(email: 'august@networkin.com', password: "abc123", first_name: 'August', last_name: 'Roger', headline: 'Student at Princeton University', location_country: 'United States', location_city: 'Princeton')
user12 = User.create!(email: 'mohammmad@networkin.com', password: "abc123", first_name: 'Mohammad', last_name: 'Patel', headline: 'Student at App Academy', location_country: 'Canada', location_city: 'Toronto')

# create experiences

experience1 = Experience.create!(user_id: user1.id, title: "Software Engineer", company_name: 'NetworkIn', location: 'Greater New York City Area', start_date: "2022-05-13", end_date: "2022-08-13", description: "This is the best job I've ever had in my life!")
experience2 = Experience.create!(user_id: user1.id, title: "Software Engineer Apprentice", company_name: 'LinkedIn', location: 'Greater New York City Area', start_date: "2020-08-13", end_date: "2022-04-13")
experience3 = Experience.create!(user_id: user2.id, title: "CEO", company_name: 'NetworkIn', location: 'Greater New York City Area', start_date: "2022-05-13", end_date: "2022-08-13")
experience4 = Experience.create!(user_id: user2.id, title: "Assurance Senior", company_name: 'EY', location: 'Greater New York City Area', start_date: "2019-09-18", end_date: "2022-03-31")
experience5 = Experience.create!(user_id: user3.id, title: "Brand Ambassador", company_name: 'Chanel', location: 'Greater London Area', start_date: "2018-05-18", end_date: "2022-09-22")
experience6 = Experience.create!(user_id: user3.id, title: "Main Rapper, Lead Vocalist", company_name: 'Blackpink', location: 'Seoul', start_date: "2016-03-18", end_date: "2022-06-22")
experience7 = Experience.create!(user_id: user4.id, title: "Brand Ambassador", company_name: 'Celine', location: 'Greater London Area', start_date: "2017-05-18", end_date: "2022-09-22")
experience8 = Experience.create!(user_id: user4.id, title: "Main Dancer, Lead Rapper", company_name: 'Blackpink', location: 'Seoul', start_date: "2016-03-18", end_date: "2022-06-22")
experience9 = Experience.create!(user_id: user5.id, title: "Brand Ambassador", company_name: 'YSL', location: 'Greater London Area', start_date: "2018-01-18", end_date: "2022-09-22")
experience10 = Experience.create!(user_id: user5.id, title: "Main Vocalist", company_name: 'Blackpink', location: 'Seoul', start_date: "2016-03-18", end_date: "2022-06-22")
experience11 = Experience.create!(user_id: user6.id, title: "Lead Actress", company_name: 'Snowdrop', location: 'Seoul', start_date: "2022-01-18", end_date: "2022-06-22")
experience12 = Experience.create!(user_id: user6.id, title: "Lead Vocalist", company_name: 'Blackpink', location: 'Seoul', start_date: "2016-03-18", end_date: "2022-06-22")
experience13 = Experience.create!(user_id: user7.id, title: "Partner", company_name: 'Ernst & Young', location: 'Greater New York City Area', start_date: "1988-03-18", end_date: "2022-09-22")
experience14 = Experience.create!(user_id: user8.id, title: "Financial Analyst", company_name: 'Google', location: 'Greater San Francisco Bay Area', start_date: "2021-09-18", end_date: "2022-09-22")
experience15 = Experience.create!(user_id: user9.id, title: "Program Manager", company_name: 'Netflix', location: 'Greater Seattle Area', start_date: "2019-05-18", end_date: "2022-09-22")
experience16 = Experience.create!(user_id: user9.id, title: "Assistant Program Manager", company_name: 'Twitter', location: 'Greater Seattle Area', start_date: "2017-05-18", end_date: "2019-05-22")
experience17 = Experience.create!(user_id: user9.id, title: "Junior Program Manager", company_name: 'Adobe', location: 'Greater Los Angeles Area', start_date: "2012-04-18", end_date: "2017-05-22")
experience18 = Experience.create!(user_id: user10.id, title: "Operations Associate", company_name: 'Meta', location: 'Greate Austin Area', start_date: "2016-03-18", end_date: "2022-08-22")

# create educations

education1 = Education.create!(user_id: user1.id, school: 'Harvard University', degree: "Bachelor's", field: "Computer Science", start_date: "2012-06-13", end_date: "2016-09-13", activities: 'Debate Club')
education2 = Education.create!(user_id: user1.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education3 = Education.create!(user_id: user2.id, school: 'Baruch College', degree: "Bachelor's of Business Administration", field: "Accounting", start_date: "2016-08-13", end_date: "2018-12-13")
education4 = Education.create!(user_id: user2.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education5 = Education.create!(user_id: user3.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2010-08-13", end_date: "2015-09-13")
education5 = Education.create!(user_id: user4.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2008-06-13", end_date: "2015-09-13")
education5 = Education.create!(user_id: user5.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2011-03-13", end_date: "2015-09-13")
education5 = Education.create!(user_id: user6.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2009-05-13", end_date: "2015-09-13")

# create posts

post8 = Post.create!(user_id: user3.id, body: 'Pika Pika! -Pikachu')
post1 = Post.create!(user_id: user4.id, body: "Hello everyone! I'm looking to gain more experience as a ServiceNow Admin/Developer role. I've already taken the ServiceNow Fundamentals course, but I'm looking to find other material to help me learn best practice.")
post2 = Post.create!(user_id: user5.id, body: "I am a junior at the University of North Carolina Chapel Hill studying Business Administration and Economics. My focus is Real Estate and Entrepreneurship. Currently, I am seeking internship opportunities in real estate, more specifically, analyst roles for this summer. If anyone have any opportunities open, feel free to contact me. In addition, if you have any pointers on recruiting for real estate, I would love to have a chat! Thank you.")
post3 = Post.create!(user_id: user1.id, body: 'I am pleased to announce that I have joined my dream company at NeworkIn. I want to thank everyone who supported me thus far, and I wish the best of luck to everyone back at LinkedIn.')
post4 = Post.create!(user_id: user2.id, body: 'This website has officially drained me! I am no longer a functioning human being after today.')
post5 = Post.create!(user_id: user1.id, body: 'Yesterday I was walking to an interview. There was a starving dog on the road. I stopped to feed him and missed my interview. The next day, I got a call asking to come in to do the interview. I was surprised, but I went. Then the interviewer came in. He was the dog.')
post6 = Post.create!(user_id: user3.id, body: 'Hi NetworkIn family! My name is Ash and my best friend is Pikachu. I have over 20 years of experience and I am only 14 years old! Employers must love me.')
post7 = Post.create!(user_id: user1.id, body: 'I was in a job interview today when the manager handed me his laptop and said, "I want you to try to sell this to me." So I put it under my arm, walked out of the building and went home. Eventually he called my mobile and said, "Bring it back here right now!" I said, "$200 and it is yours."')