const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    let friends = ['Nitin','Eric','Jeddy','Cameron','Riley'];
    return res.status(200).send(friends);
});

// app.get('/weather/:temp', (req, res) => {
//     const phrase = `<h3>It was ${req.params.temp} today</h3>`;
//     return res.status(200).send(phrase);
// });

app.get('/weather/:temp', (req, res) => {
    const { temp } = req.params;
    const phrase = `<h3>It was ${temp} today</h3>`;
    return res.status(200).send(phrase);
});

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});

