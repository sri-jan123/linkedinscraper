(function () {
    const name = document.querySelector('.top-card-layout__title')?.innerText || 'N/A';
    const location = document.querySelector('.top-card__subline-item')?.innerText || 'N/A';
    const about = document.querySelector('.pv-about-section')?.innerText || 'N/A';
    const bio = document.querySelector('.mt2.relative')?.innerText || 'N/A';
    const followerCount = document.querySelector('.pv-recent-activity-section__follower-count')?.innerText || '0';
    const connectionCount = document.querySelector('.ci-vanity-url.t-16')?.innerText || '0';
  
    const profileData = {
      name,
      location,
      about,
      bio,
      followerCount,
      connectionCount
    };
  
    console.log(profileData);
    
    // Send the scraped data back to the popup
    chrome.runtime.sendMessage({
      action: 'sendProfileData',
      data: profileData
    });
  })();
  