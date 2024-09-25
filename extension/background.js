async function getData(url){
    const res = await fetch('http://localhost:5000/api/scrape?url='+url);
    const result = await res.json();
    console.log(result)
    chrome.runtime.sendMessage({
        action: 'profileScraped',
        profile: result,
      });

}
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    
    if(message.action === "profileUrl"){
        const {data} = message;
        await getData(data);
    }

    
    if (message.action === 'sendProfileData') {
        const profileData = {
          name: "Sample Name", // Replace with actual scraped data
          location: "Sample Location",
          about: "Sample About",
          bio: "Sample Bio",
          followerCount: 1000,
          connectionCount: 500
        };
  
        console.log(`Sending data for`); // Log for debugging
        chrome.runtime.sendMessage({
          action: 'profileScraped',
          profile: profileData,
        });
    //   });
  
      sendResponse({ success: true });
    }
  });
  