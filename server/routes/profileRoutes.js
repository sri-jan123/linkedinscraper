const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const scrapeAndPostProfiles = require('../controller');

router.post('/profiles', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send({ message: 'Profile created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating profile' });
  }
});

router.get("/scrape", async (req, res)=>{
  try {
    const {url} = req.query;
    const profileData = await scrapeAndPostProfiles(url)

    res.status(201).send({ message: 'Scrape created successfully', profileData });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating profile' });
  }
})

module.exports = router;