# Lowthers Planner
A client-side rendered React SPA, utilising a Firebase backend, built using Create React App. 
## Summary
This project solves a real business problem. An antiquated planning and booking system made planning a daily schedule and rebooking clients a time consuming, and error-prone, process. The previous system involved pen and paper, and individual diaries for different members of staff. In order to organise the schedule the manager needed all staff diaries, plus a master diary for rebooking repeat jobs.

On top of a client-facing landing page, this implementation relies on a Firebase Realtime Database to update data almost instantly across all logged in users. This means a manager can be logged in and assign jobs to staff, which they immediately see on their device, along with any updates or changes needed during the working day. This lowers planning time significantly, as well as allowing for more streamlined flexibility over the course of a working day. 
## What I learned
This project enhanced my understanding of React, using Context hooks and UseEffect clean-up functions, as well as React-router. Using Create React App worked well in this instance (client-side rendered SPA), however for something server-side rendered that required better SEO, either Gatsby or Next.js would be a better choice. 

I chose to use Firebase as the database to save time as well as add another technology to my repertoire. Authentication-wise I had no issues, however if I was to build a similar project in future I might look into alternatives to the Realtime Database option due to its very limited querying functionality. In its current state, this app would become very expensive at scale purely based on the database usage.

Materialize seemed like a good framework option for fast styling, and I can see the benefit to such methods. However, in this use case I found myself fighting against its existing styling rules a lot of the time, to the point where some section do not use it at all. This project was not a good use case for the strengths of styling frameworks. 

## Features
- Client-facing content delivery landing page
- Staff home page (Read-only schedule for the current, next and previous week)
- Daily planner (CRUD operations for jobs)
- Customer list (CRUD operations for the customer list)
- Sign in/out
- Tiered authentication from Firebase Auth (none, staff, manager, admin)
- MapboxGL map (Displayed on ‘Staff Home’ to assist finding customers)
- Realtime Database from Firebase
- Custom data validations

Being a business app, accounts are created and edited by admin, and assigned to staff members for use only. 
### Staff Home
Staff and managers can see jobs assigned to them for the current, next and previous week, viewing a day at a time. Clicking a job provides further details, including the customer’s address and contact details, as well as any notes about the job. The jobs are also pinned on a map to help with route planning.
### Planner
Managers have access to all jobs from the current, previous and next years. They can move the jobs to the previous or next day, delete them, create new ones, rebook them and assign them to staff.
### Customers
Managers have access to a full list of customers, which includes information about the contract with that client, contact details, visit frequency and address. This information can be edited and updated, and customers can be deleted, or new ones created. 
## Technologies Used

- HTML
- CSS
- Sass
- Materialize
- JavaScript
- Axios
- React 
- Create React App
- Firebase
- MapboxGL JS

