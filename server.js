const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5050;

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Session Middleware (required for req.session)
app.use(session({
  secret: 'your_secret_key',        // 🔐 Replace with a secure random string in production
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,                  // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000     // Optional: session lasts 1 day
  }
}));

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "uniform_db"
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// ✅ API Start

// ✅ Admin API Start
/*------------------------------------------------------Log-In Page API Start---------------------------------------------------------------------------*/
// Login Route
app.post('/login', (req, res) => {
  const { UserName, Passwords } = req.body;
  const sql = 'SELECT * FROM mst_userdata WHERE UserName = ? AND Passwords = ?';
  db.query(sql, [UserName, Passwords], (err, results) => {
    if (err) {
      console.error('❌ Full DB Error:', err);
      return res.status(500).json({ success: false, message: 'DB error' });
    }

    if (results.length > 0) {
      req.session.user = results[0];
      return res.json({ success: true, message: 'Login successful' });
    } else {
      return res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

//Check Login
app.get('/check-login', (req, res) => {
  if (req.session.user) {
    return res.json({ loggedIn: true, user: req.session.user });
  } else {
    return res.json({ loggedIn: false });
  }
});

// Logout Route
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout failed:', err);
      return res.status(500).json({ success: false, message: 'Logout failed' });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    return res.json({ success: true, message: 'Logged out successfully' });
  });
});
/*------------------------------------------------------Log-In Page API End-----------------------------------------------------------------------------*/
/*------------------------------------------------------Contact Page API Start---------------------------------------------------------------------------*/
// Contact
app.get('/all_leads', (req, res) => {
  const sql = `SELECT FullName, PhoneNo, EmailID, Message, EnquiryType, EnquiryFor, PageName, PostedDate 
               FROM mst_contact_us ORDER BY ContactID DESC`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});
//------------------------------------------------------Contact Page API End-----------------------------------------------------------------------------//
// ✅ Admin API End

// ✅ Front End API Start
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM mst_userdata';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});
// ✅ Front End API End

// ✅ API END
// ✅ Start Server
app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Failed to start server:', err);
  } else {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  }
});
