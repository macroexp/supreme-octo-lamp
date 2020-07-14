import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Poopdddddddddddddd")
});

app.get('/:name', (req, res) => {
    res.send("Poopdddddddddddddd" + req.params.name)
});

app.post('/:name', (req, res) => {
    console.log('working')
    res.send({...req.body, yourname: req.params.name})
});



const server = app.listen(7000, () => {
    console.log('Listening on port 7000');
});


