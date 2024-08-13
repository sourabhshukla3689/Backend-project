import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: '1 Dham', content: 'shri vrindavan' },
        { id: 2, title: '2 Dham', content: 'shri ayodhya' },
        { id: 3, title: '3 Dham', content: 'shri chitrakoot' },
        { id: 4, title: '4 Dham', content: 'shri mithila' },
    ];

    res.setHeader('Content-Type', 'application/json');
    res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
