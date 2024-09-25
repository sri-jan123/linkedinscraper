const puppeteer = require('puppeteer');

const scrapeProfile = async (url) => {
  const browser = await puppeteer.launch({ headless: false }); // Set to false to visually see the browser
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extracting data from the profile
  const data = await page.evaluate(() => {
    const name = document.querySelector('.top-card-layout__title')?.innerText || '';
    const location = document.querySelector('.top-card__subline-item')?.innerText || '';
    const about = document.querySelector('.summary')?.innerText || '';
    const bio = document.querySelector('.top-card-layout__headline')?.innerText || '';
    const followerCount = parseInt(document.querySelector('.follower-count')?.innerText.replace(/\D/g, ''), 10) || 0;
    const connectionCount = parseInt(document.querySelector('.connection-count')?.innerText.replace(/\D/g, ''), 10) || 0;

    return { name, location, about, bio, followerCount, connectionCount };
  });

  await browser.close();
  return data;
};

module.exports = scrapeProfile;
