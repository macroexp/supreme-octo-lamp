import express from 'express';
import cors from 'cors'; 
import parser from './serial';


const app = express();

app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send("Poopdddddddddddddd")
});

app.route('/:name/:age')
    .get((req, res) => {
        res.send("Poopdddddddddddddd" + req.params.name + req.params.age)
    })
    .post((req, res) => {
        console.log('working')
        res.send({...req.body, yourname: req.params.name, yourage: req.params.age})
    });

app.route('/light')
    .get((req, res) => {
        res.send({lightstate: parser.lightState})
    });

const server = app.listen(7000, () => {
    console.log('Listening on port 7000');
});



