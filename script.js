const content = {
  quick: {
    en: `
      <h2>Quick Tech Tips</h2>
      <ul>
        <li>To install an app, open Play Store and tap on the search bar.</li>
        <li>Type the app name (like WhatsApp), then click Install.</li>
        <li>Tap on the icon to open the app.</li>
        <li>Use Google search to find anything on the internet.</li>
      </ul>
    `,
    hi: `
      <h2>त्वरित तकनीकी सुझाव</h2>
      <ul>
        <li>ऐप इंस्टॉल करने के लिए, प्ले स्टोर खोलें और सर्च बार पर टैप करें।</li>
        <li>ऐप का नाम (जैसे व्हाट्सएप) टाइप करें और इंस्टॉल पर क्लिक करें।</li>
        <li>ऐप खोलने के लिए आइकन पर टैप करें।</li>
        <li>गूगल पर कोई भी जानकारी खोज सकते हैं।</li>
      </ul>
    `
  },
  // Add 'tutorials' content here for each app as needed (WhatsApp, Paytm, Google Maps)
  tutorials: {
    whatsapp: {
      en: `
        <h2>WhatsApp Tutorial</h2>
        <p>WhatsApp is a messaging app used to send texts, images, videos, and make voice/video calls.</p>
        <ol>
          <li>Download WhatsApp from Play Store or App Store.</li>
          <li>Open the app and verify your mobile number.</li>
          <li>Set your profile name and photo.</li>
          <li>Tap on a contact to start chatting.</li>
          <li>Use the camera icon to send pictures or videos.</li>
          <li>Use the call button to make a voice or video call.</li>
        </ol>
      `,
      hi: `
        <h2>व्हाट्सएप ट्यूटोरियल</h2>
        <p>व्हाट्सएप एक मैसेजिंग ऐप है जिसका उपयोग टेक्स्ट, इमेज, वीडियो भेजने और वॉयस/वीडियो कॉल करने के लिए किया जाता है।</p>
        <ol>
          <li>प्ले स्टोर या ऐप स्टोर से व्हाट्सएप डाउनलोड करें।</li>
          <li>ऐप खोलें और अपना मोबाइल नंबर सत्यापित करें।</li>
          <li>अपना प्रोफाइल नाम और फोटो सेट करें।</li>
          <li>चैटिंग शुरू करने के लिए किसी संपर्क पर टैप करें।</li>
          <li>चित्र या वीडियो भेजने के लिए कैमरा आइकन का उपयोग करें।</li>
          <li>वॉयस या वीडियो कॉल करने के लिए कॉल बटन का उपयोग करें।</li>
        </ol>
      `
    },
    paytm: {
      en: `
        <h2>Paytm Tutorial</h2>
        <p>Paytm is a mobile payment and financial services app used for money transfer, bill payments, and online shopping.</p>
        <ol>
          <li>Download Paytm from Play Store or App Store.</li>
          <li>Sign up or log in with your mobile number.</li>
          <li>Link your bank account using UPI.</li>
          <li>Tap on 'Pay' to scan QR and send money.</li>
          <li>Use 'Recharge & Pay Bills' for utilities like mobile, electricity, etc.</li>
          <li>Use 'Passbook' to check transaction history.</li>
        </ol>
      `,
      hi: `
        <h2>पेमेंट ट्यूटोरियल</h2>
        <p>Paytm एक मोबाइल पेमेंट और वित्तीय सेवाओं की ऐप है जिसका उपयोग पैसे ट्रांसफर, बिल भुगतान और ऑनलाइन शॉपिंग के लिए किया जाता है।</p>
        <ol>
          <li>प्ले स्टोर या ऐप स्टोर से Paytm डाउनलोड करें।</li>
          <li>मोबाइल नंबर से साइन अप या लॉगिन करें।</li>
          <li>UPI का उपयोग करके अपने बैंक खाते को लिंक करें।</li>
          <li>'पे' पर टैप करें और QR कोड स्कैन करके पैसे भेजें।</li>
          <li>'रीचार्ज और बिल भुगतान' का उपयोग करें जैसे मोबाइल, बिजली आदि के लिए।</li>
          <li>'पासबुक' का उपयोग करके लेन-देन का इतिहास देखें।</li>
        </ol>
      `
    },
    maps: {
      en: `
        <h2>Google Maps Tutorial</h2>
        <p>Google Maps helps you navigate, find directions, and explore nearby places.</p>
        <ol>
          <li>Open Google Maps app on your phone.</li>
          <li>Use the search bar to type a place or address.</li>
          <li>Tap on 'Directions' and choose your starting point.</li>
          <li>Select the mode of transport (car, walking, bus, etc.).</li>
          <li>Tap on 'Start' to begin navigation.</li>
          <li>Use 'Explore Nearby' to find restaurants, ATMs, hospitals, etc.</li>
        </ol>
      `,
      hi: `
        <h2>गूगल मैप्स ट्यूटोरियल</h2>
        <p>गूगल मैप्स आपकी मदद करता है यात्रा मार्गदर्शन में, दिशा पता लगाने और नजदीकी स्थानों को खोजने में।</p>
        <ol>
          <li>अपने फोन पर गूगल मैप्स ऐप खोलें।</li>
          <li>सर्च बार में किसी स्थान या पते को टाइप करें।</li>
          <li>'दिशा-निर्देश' पर टैप करें और अपनी शुरुआत का बिंदु चुनें।</li>
          <li>यातायात के साधन (कार, चलना, बस आदि) का चयन करें।</li>
          <li>'शुरू करें' पर टैप करें ताकि नेविगेशन शुरू हो सके।</li>
          <li>'Explore Nearby' का उपयोग करके रेस्तरां, एटीएम, अस्पताल आदि ढूंढें।</li>
        </ol>
      `
    }
  },
  // Existing content for other sections like quick, basic, help, etc.
};

// Function to display the selected tutorial
function showTutorial(app) {
  const lang = document.getElementById("languageSwitcher").value;
  const tutorialContent = content.tutorials[app][lang] || content.tutorials[app]["en"];
  
  document.getElementById("tutorialTitle").innerHTML = tutorialContent.match(/<h2>(.*?)<\/h2>/)[1];
  document.getElementById("tutorialUse").innerHTML = tutorialContent.match(/<p>(.*?)<\/p>/)[1];
  document.getElementById("tutorialSteps").innerHTML = tutorialContent.match(/<ol>(.*?)<\/ol>/)[1];
  
  document.querySelector('.projects__container').style.display = 'none';
  document.getElementById('tutorialDetails').style.display = 'block';
}

// Function to return to tutorials cards
function goBackToCards() {
  document.querySelector('.projects__container').style.display = 'grid';
  document.getElementById('tutorialDetails').style.display = 'none';
}

// Existing code for switching language and updating content
function updateStaticContent() {
  const lang = document.getElementById("languageSwitcher").value;
  // Update header, button labels, footer etc.
  document.querySelector(".header h1").textContent = content.header[lang] || content.header["en"];
  document.getElementById("btnQuick").textContent = content.buttons.quick[lang] || content.buttons.quick["en"];
  document.getElementById("btnBasic").textContent = content.buttons.basic[lang] || content.buttons.basic["en"];
  document.getElementById("btnHelp").textContent = content.buttons.help[lang] || content.buttons.help["en"];
  document.querySelector("footer p").innerHTML = content.footer[lang] || content.footer["en"];
}

function switchLanguage() {
  const section = document.querySelector("#tipsSection h2");
  if (section) {
    const id = section.textContent.toLowerCase().includes("quick") ? 'quick'
                 : section.textContent.toLowerCase().includes("basic") ? 'basic'
                 : 'help';
    showTips(id);
  }
  updateStaticContent();
}

window.onload = updateStaticContent;
