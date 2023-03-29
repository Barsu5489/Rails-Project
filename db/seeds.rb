# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed categories
Category.create(name: "Category 1", description: "Description for category 1")
Category.create(name: "Category 2", description: "Description for category 2")
Category.create(name: "Category 3", description: "Description for category 3")

User.create(username: "user1", first_name: "John", last_name: "Doe", email: "john.doe@example.com", password: "password123")
User.create(username: "user2", first_name: "Jane", last_name: "Doe", email: "jane.doe@example.com", password: "password456")

Job.create(title: "Job 1", description: "Description for job 1", requirements: "Requirements for job 1", location: "Location 1", salary: 50000.00, date_posted: Date.today, user_id: 1, company_name: "Company 1", company_phone: "555-555-5555", experience: "Entry level", company_logo: "company1_logo.jpg", category_id: 1)
Job.create(title: "Job 2", description: "Description for job 2", requirements: "Requirements for job 2", location: "Location 2", salary: 75000.00, date_posted: Date.today, user_id: 1, company_name: "Company 2", company_phone: "555-555-5555", experience: "Mid-level", company_logo: "company2_logo.jpg", category_id: 2)
Job.create(title: "Job 3", description: "Description for job 3", requirements: "Requirements for job 3", location: "Location 3", salary: 100000.00, date_posted: Date.today, user_id: 2, company_name: "Company 3", company_phone: "555-555-5555", experience: "Senior-level", company_logo: "company3_logo.jpg", category_id: 3)

JobCategory.create(job_id: 1, category_id: 1)
JobCategory.create(job_id: 2, category_id: 2)
JobCategory.create(job_id: 3, category_id: 3)
