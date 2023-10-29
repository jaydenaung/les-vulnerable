const express = require('express');
const app = express();

// Sample data (for illustration purposes)
const users = {
    user1: 'Jayden',
    user2: 'Jacq',
    user3: 'Bob',
    user4: 'Alice',
    user5: 'Emily'
};

app.get('/', (req, res) => {
    res.send('Welcome to the web application!');
});

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    if (users[username]) {
        res.send(`User Profile: ${users[username]}`);
    } else {
        res.send('User not found');
    }
});

app.get('/search', (req, res) => {
    const query = req.query.SearchUser;
    if (users[query]) {
        res.send(`Search Result: ${users[query]}`);
    } else {
        res.send('User not found');
    }
});

app.get('/xss', (req, res) => {
    const user_input = req.query.input;
    res.send(`
        <h1>XSS Example</h1>
        <p>User Input: ${user_input}</p>
    `);
});

app.listen(3000, () => {
    console.log('Web application is running on port 3000');
});
