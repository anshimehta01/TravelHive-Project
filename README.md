# 🌍 TravelHive

**TravelHive** is a smart web-based travel planner that helps users organize and manage trips efficiently.  
It includes secure authentication, a trip dashboard, and MongoDB-backed persistence.

---

## 🚀 Features

- 🔐 **User Authentication** (registration & login)  
- 📊 **Dynamic Dashboard** for managing trips  
- 🗂 **MongoDB Integration** for users & trips  
- ✅ **Form Validation** (frontend + backend)  
- 🔄 **RESTful APIs** for registration, login, logout, and trip data  
- 🛡 **Secure Password Hashing** with bcrypt  
- 📦 **Session Management** with Express-session or JWT  

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or Local)  
- **Environment:** VS Code on Windows  

---

## 📂 Project Structure

TravelHive/
│── app.js # Main server file
│── /routes # Express route files (login, register, dashboard)
│── /models # Mongoose models (User, Trip)
│── /public # Static files (CSS, JS)
│── /views # HTML/EJS templates
│── .env # Environment variables (Mongo URI, secrets)
│── package.json


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/TravelHive.git
   cd TravelHive

2. Install dependencies
   npm install
   
3. Set up MongoDB
   Use MongoDB Atlas or a local instance.
   Add your connection string in .env:
   
   MONGO_URI=your-mongodb-uri
   SECRET_KEY=your-secret

4. Run the server
   npm start

5. Visit app in browser
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









