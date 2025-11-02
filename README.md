# 📝 Notes API using Node.js, Express, and MongoDB

This project is a simple Notes API built with **Node.js**, **Express**, and **MongoDB**.  
It allows users to perform CRUD operations (Create, Read, Update, Delete) on notes.

---

## 🚀 Features
- Create a new note
- View all notes
- Update an existing note
- Delete a note
- MongoDB Atlas connection
- Error handling and CORS enabled

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sudhakargovindasamy/APIs_Build_connect_web.git
   cd APIs_Build_connect_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   Copy the `.env.example` and fill it with your MongoDB connection URL and desired port.
   ```bash
   cp .env.example .env
   ```

4. **Run the server**
   ```bash
   nodemon index.js
   ```

5. **Test API**
   Open your browser or use Postman:
   - `GET http://localhost:1010/` → Welcome message
   - `GET http://localhost:1010/notes` → Fetch all notes

---

## 🧰 Tech Stack
- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- cors

---

## 📦 Project Structure
```
APIs_Build_connect_web/
│
├── .env
├── .env.example
├── README.md
├── index.js
└── requirements.txt
```

---

## 👨‍💻 Author
- Sudhakar Govindasamy  
- [LinkedIn Profile](www.linkedin.com/in/sudhakargovindasamy) | [GitHub Profile](https://github.com/sudhakargovindasamy)