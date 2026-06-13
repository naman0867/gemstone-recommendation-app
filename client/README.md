# 🔮 Humara Pandit

Humara Pandit is a full-stack gemstone recommendation platform that provides personalized gemstone suggestions based on a user's birth date, zodiac sign, and life goals.

## Features

### Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes

### Gemstone Recommendation Engine

* Birth Date Input
* Zodiac Sign Calculation
* Personalized Gemstone Recommendation
* Purpose-based Suggestions

### Recommendation History

* View Previous Recommendations
* Store Recommendations in MongoDB
* User-specific Recommendation Records

### User Interface

* Responsive Design
* Modern Tailwind CSS UI
* Gemstone Images
* Easy Navigation

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## Project Structure

```text
gemstone-recommendation-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── README.md
└── AI_USAGE.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/naman0867/gemstone-recommendation-app.git
cd gemstone-recommendation-app
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Application Workflow

1. User registers an account.
2. User logs in.
3. JWT token is generated.
4. User accesses Dashboard.
5. User enters birth date and purpose.
6. Backend calculates zodiac sign.
7. Appropriate gemstone recommendation is generated.
8. Recommendation is stored in MongoDB.
9. User can view recommendation history.

---

## Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* Protected API Routes
* User-specific Data Access

---

## Future Improvements

* AI-powered Recommendation Engine
* Detailed Astrology Reports
* Astrologer Consultation Booking
* Admin Dashboard
* Recommendation Analytics
* Mobile Application

---

## Author

Naman Kumar

Project developed as part of the technical assignment submission.
