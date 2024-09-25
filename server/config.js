const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Profile = require('./models/profile');
const profileRouter = require('./routes/profileRoutes')
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}))
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/linkedinScraper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// POST API to save LinkedIn profile data
app.use("/api", profileRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
