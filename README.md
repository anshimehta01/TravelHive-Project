🌍 TravelHive

TravelHive is a smart web-based travel planner that helps users organize and manage trips efficiently. It includes user authentication, a trip dashboard, and MongoDB-backed persistence.

🚀 Features

🔐 User Authentication (registration & login)

📊 Dynamic Dashboard for managing trips

🗂 MongoDB Integration for users & trips

✅ Form Validation (frontend + backend)

🔄 RESTful APIs for registration, login, logout, and trip data

🛡 Secure Password Hashing with bcrypt

📦 Session Management with Express-session or JWT

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (Atlas or Local)
Environment: VS Code on Windows

📂 Project Structure
TravelHive/
│── app.js              # Main server file
│── /routes             # Express route files (login, register, dashboard)
│── /models             # Mongoose models (User, Trip)
│── /public             # Static files (CSS, JS)
│── /views              # HTML/EJS templates

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/TravelHive.git
cd TravelHive


Install dependencies

npm install


Set up MongoDB

Use MongoDB Atlas or local instance.

Add your connection string in .env.

Run the server

npm start


Visit app in browser

http://localhost:3000

📌 Future Enhancements

🌐 Integration with Travel APIs for real-time suggestions

🤝 Group planning & itinerary sharing

🔔 Real-time collaboration & notifications with WebSockets

📱 Mobile-friendly UI & offline support

🔑 Role-based access control

🚧 Known Limitations

UI/UX is currently basic

No live API integration yet

No real-time collaboration
