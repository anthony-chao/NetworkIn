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
Comment.destroy_all
Like.destroy_all
Connection.destroy_all

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
user12 = User.create!(email: 'yusuf@networkin.com', password: "abc123", first_name: 'Yusuf', last_name: 'Patel', headline: 'Student at App Academy', location_country: 'Canada', location_city: 'Toronto')

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

education1 = Education.create!(user_id: user1.id, school: 'Harvard University', degree: "Bachelor", field: "Computer Science", start_date: "2012-06-13", end_date: "2016-09-13", activities: 'Debate Club')
education2 = Education.create!(user_id: user1.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education3 = Education.create!(user_id: user2.id, school: 'Baruch College', degree: "Bachelor of Business Administration", field: "Accounting", start_date: "2016-08-13", end_date: "2018-12-13")
education4 = Education.create!(user_id: user2.id, school: 'App Academy', field: "Software Engineering", start_date: "2022-05-13", end_date: "2022-09-13", description: "1000-hour immersive full-stack web development intensive with <3% acceptance rate.")
education5 = Education.create!(user_id: user3.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2010-08-13", end_date: "2015-09-13")
education6 = Education.create!(user_id: user4.id, school: 'YG Entertainment', degree: "Trainee", field: "Idol Training", start_date: "2008-06-13", end_date: "2015-09-13")
education7 = Education.create!(user_id: user7.id, school: 'Georgetown University', degree: "Bachelor of Science", field: "Finance and Accounting", start_date: "1984-09-13", end_date: "1988-01-13")
education8 = Education.create!(user_id: user7.id, school: 'New York University', degree: "Master of Business Administration", field: "Accounting", start_date: "2004-08-13", end_date: "2006-06-13")
education9 = Education.create!(user_id: user8.id, school: 'Miami University', degree: "Bachelor", field: "Pyschology", start_date: "2016-07-13", end_date: "2020-05-13")
education10 = Education.create!(user_id: user9.id, school: 'Brown University', degree: "Bachelor of Arts", field: "Art History", start_date: "2007-05-13", end_date: "2011-06-13")
education11 = Education.create!(user_id: user11.id, school: 'Princeton University', degree: "Bachelor of Arts", field: "Geology", start_date: "2018-09-13", end_date: "2022-05-13")
education12 = Education.create!(user_id: user12.id, school: 'App Academy', field: "Software Engineering", start_date: "2020-05-13", end_date: "2020-09-13")

# create posts

post1 = Post.create!(user_id: user1.id, body: "Hello everyone! I am proud to be the first active user of NetworkIn! This is one of the greatest sites out there and I hope to connect with you all!")
post2 = Post.create!(user_id: user2.id, body: "NetworkIn is hiring! We have open positions ranging from junior level software engineers to operational management roles. Be prepared to work with the best talent and learn from the best!")
post3 = Post.create!(user_id: user1.id, body: 'I am pleased to announce that I have joined my dream company at NeworkIn. I want to thank everyone who supported me thus far, and I wish the best of luck to everyone back at LinkedIn.')
post4 = Post.create!(user_id: user3.id, body: 'Blackpink has released a comeback with Shut Down. Please stream on Youtube and Spotify! Blinks - we are counting on you!')
post5 = Post.create!(user_id: user7.id, body: 'Yesterday I was walking to an interview. There was a starving dog on the road. I stopped to feed him and missed my interview. The next day, I got a call asking to come in to do the interview. I was surprised, but I went. Then the interviewer came in. He was the dog.')
post6 = Post.create!(user_id: user8.id, body: 'I was in a job interview today when the manager handed me his laptop and said, "I want you to try to sell this to me." So I put it under my arm, walked out of the building and went home. Eventually he called my mobile and said, "Bring it back here right now!" I said, "$200 and it is yours."')
post7 = Post.create!(user_id: user4.id, body: "We're looking forward to teeing it up later this week in London with our Celine friends & industry colleagues! If you're planning to attend, be sure to celebrate & connect with us at the post-event Happy Hour sponsored by Celine!")
post8 = Post.create!(user_id: user5.id, body: "Women make up only 28% of the workforce in STEM. It's time for a change. Take on the World Woman global stage. Join the most powerful community of leaders!")
post9 = Post.create!(user_id: user9.id, body: 'I got rejected for a job at Google.I got rejected for a job at Oracle.I got rejected for a job at Microsoft. The interview feedback: "Too entrepreneurial."I did not end up working for any of them. The feedback was helpful. I am stronger and wiser because of my experiences.')
post10 = Post.create!(user_id: user10.id, body: "Landing a dev job is not only about your tech skills. You gotta be smart about it: 1. Adjust your resumé/CV to each position you're applying for 2. Spend proper time on your application, making sure it's free of mistakes 3. Reach out to hiring managers on LinkedIn, go to meetups etc. You need to stand out 4. Research the company and come prepared for interviews (both technical and cultural)")
post11 = Post.create!(user_id: user11.id, body: "Princeton's Treble Makers are hosting our annual music festival! Please bring on your best attires, attitude and thirst for music. We'll be on the quad at 6pm next Wednesday!")
post12 = Post.create!(user_id: user12.id, body: "I doubled down on JavaScript a few years ago. Best decision I ever made. No other language makes me as productive. I also just generally enjoy writing it (most of the time 👀) And to top that off: You can literally build anything with JS. Front-end, back-end, machine learning, apps - you name it. All of this is what makes it my favourite language, even despite it's quirks. And I can almost guarantee you won't regret learning it either.")
post13 = Post.create!(user_id: user1.id, body: "Please reach out if you want to connect! I am always ready to talk about my experience and to hear more about yours!")

# create comments

comment1 = Comment.create!(user_id: user2.id, post_id: post13.id, body: "Hi Demo! It's great to hear from one of our star employees - thank you for being such a valuable member on our team!")
comment2 = Comment.create!(user_id: user11.id, post_id: post2.id, body: "I would like to learn more!")
comment3 = Comment.create!(user_id: user12.id, post_id: post2.id, body: "This sounds like a great opportunity!")
comment4 = Comment.create!(user_id: user2.id, post_id: post2.id, parent_comment_id: comment2.id, body: "Hi August! Please send a connection and we can discuss in more detail!")
comment5 = Comment.create!(user_id: user4.id, post_id: post4.id, body: "Everyone check this out! It's out greatest comeback so far")
comment6 = Comment.create!(user_id: user5.id, post_id: post4.id, parent_comment_id: comment5.id, body: "Support us Blinks!")
comment7 = Comment.create!(user_id: user1.id, post_id: post12.id, body: "I am learning Javascript too! It's so tough!")

# create likes

like1 = Like.create!(user_id: user1.id, likeable_id: post2.id, likeable_type: "Post")
like2 = Like.create!(user_id: user1.id, likeable_id: post8.id, likeable_type: "Post")
like3 = Like.create!(user_id: user1.id, likeable_id: post10.id, likeable_type: "Post")
like4 = Like.create!(user_id: user1.id, likeable_id: comment3.id, likeable_type: "Comment")
like5 = Like.create!(user_id: user1.id, likeable_id: comment6.id, likeable_type: "Comment")
like6 = Like.create!(user_id: user2.id, likeable_id: post3.id, likeable_type: "Post")
like7 = Like.create!(user_id: user2.id, likeable_id: post8.id, likeable_type: "Post")
like8 = Like.create!(user_id: user3.id, likeable_id: comment4.id, likeable_type: "Comment")
like9 = Like.create!(user_id: user3.id, likeable_id: comment7.id, likeable_type: "Comment")
like10 = Like.create!(user_id: user6.id, likeable_id: post1.id, likeable_type: "Post")
like11 = Like.create!(user_id: user6.id, likeable_id: post9.id, likeable_type: "Post")
like12 = Like.create!(user_id: user6.id, likeable_id: post12.id, likeable_type: "Post")
like13 = Like.create!(user_id: user6.id, likeable_id: post13.id, likeable_type: "Post")
like14 = Like.create!(user_id: user7.id, likeable_id: post13.id, likeable_type: "Post")
like15 = Like.create!(user_id: user8.id, likeable_id: post13.id, likeable_type: "Post")
like16 = Like.create!(user_id: user9.id, likeable_id: post13.id, likeable_type: "Post")

# create connections

connection1 = Connection.create(connector_id: user1.id, connectee_id: user2.id, accepted: true)
connection2 = Connection.create(connector_id: user1.id, connectee_id: user6.id, accepted: true)
connection3 = Connection.create(connector_id: user1.id, connectee_id: user7.id, accepted: false)
connection4 = Connection.create(connector_id: user1.id, connectee_id: user12.id, accepted: true)
connection5 = Connection.create(connector_id: user3.id, connectee_id: user1.id, accepted: false)
connection6 = Connection.create(connector_id: user4.id, connectee_id: user1.id, accepted: false)