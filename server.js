var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hellllloooo')
});

// Routes
const postsRoutes = require('./routes/api/posts');

// User routes
app.use('/api/posts', postsRoutes);

// BodyParser Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));
