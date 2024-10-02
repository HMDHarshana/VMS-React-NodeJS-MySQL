const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactdemo'
});

// Connecting to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// User sign-up endpoint
app.post('/SignUp', (req, res) => {
  const { name, email, password, roll } = req.body;

  // Check if the user already exists
  const checkUserSql = "SELECT * FROM signupdetails WHERE email = ?";
  db.query(checkUserSql, [email], (err, result) => {
    if (err) {
      console.error('Error checking user:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    } else {
      const insertUserSql = "INSERT INTO signupdetails (name, email, password, roll) VALUES (?, ?, ?, ?)";
      db.query(insertUserSql, [name, email, password, roll], (err, result) => {
        if (err) {
          console.error('Error in /SignUp query:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'User registered successfully', data: result });
      });
    }
  });
});


// User login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT email,password, roll FROM signupdetails WHERE email = ? AND password = ?";
  const values = [email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error in /login query:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (result.length > 0) {
      const user = result[0];
      res.status(200).json({ message: 'Success', roll: user.roll });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  });
});

app.post('/Organizationhome', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT name FROM signupdetails WHERE name =? ";
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error in /login query:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (result.length > 0) {
        const user = result[0];
        res.status(200).json({ name: user.name });
      } else {
        res.status(400).json({ message: 'Invalid credentials' });
      }
    });

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
