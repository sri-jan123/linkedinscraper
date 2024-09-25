// Listen for messages from the background script

const scrapeBtn = document.getElementById("scrape-btn")
const inp = document.getElementById("inp")

scrapeBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    action: 'profileUrl',
    data: inp.value
  });
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.action === 'profileScraped') {
    const {profileData} = message.profile;
    console.log(profileData);


    const displayArea = document.getElementById('profile-display');
    const profileHTML = `
      <h3>${profileData.name}</h3>
      <p><strong>Location:</strong> ${profileData.location}</p>
      <p><strong>About:</strong> ${profileData.about}</p>
      <p><strong>Bio:</strong> ${profileData.bio}</p>
      <p><strong>Followers:</strong> ${profileData.followerCount}</p>
      <p><strong>Connections:</strong> ${profileData.connectionCount}</p>
    `;
    displayArea.innerHTML += profileHTML; // Append profile data
  }
});
