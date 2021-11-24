const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

mongoose
    .connect(
        'mongodb://federation2021:federation2021@cluster0-shard-00-00.pqja5.mongodb.net:27017,cluster0-shard-00-01.pqja5.mongodb.net:27017,cluster0-shard-00-02.pqja5.mongodb.net:27017/federation2021?ssl=true&replicaSet=atlas-10qenf-shard-0&authSource=admin&retryWrites=true&w=majority',
    )
    .then(() => {
        console.log('connected')
    })
    .catch((err) => console.log(err));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const fleetRoutes = require('./routes/fleetRoutes')

app.use('/fleet', fleetRoutes)

app.get('/', (req, res) => {
    

    res.json({ message: 'Open'})
});

app.listen(3000);