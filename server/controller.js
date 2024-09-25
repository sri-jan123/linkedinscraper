const scrapeProfile = require('./scrape');

const scrapeAndPostProfiles = async (profileUrls) => {

    const profileData = await scrapeProfile(profileUrls);
    profileData.url = profileUrls;  
    return profileData
};

module.exports = scrapeAndPostProfiles;
