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
    basic: {
      en: `
        <h2>Learn Basics</h2>
        <ul>
          <li>An email is like sending a letter, but digitally!</li>
          <li>Facebook is like a digital diary where you share updates.</li>
          <li>Instagram is for sharing photos and moments with friends.</li>
        </ul>
      `,
      hi: `
        <h2>बुनियादी जानकारी सीखें</h2>
        <ul>
          <li>ईमेल एक डिजिटल चिट्ठी की तरह होता है।</li>
          <li>फेसबुक एक डिजिटल डायरी जैसा है जहाँ आप अपडेट्स शेयर कर सकते हैं।</li>
          <li>इंस्टाग्राम फोटो और यादों को शेयर करने के लिए है।</li>
        </ul>
      `
    },
    help: {
      en: `<h2>Help</h2><p>If you need assistance, please ask your digital buddy or visit the help section.</p>`,
      hi: `<h2>मदद</h2><p>अगर आपको सहायता चाहिए, तो अपने डिजिटल दोस्त से पूछें या सहायता अनुभाग देखें।</p>`
    },
    header: {
      en: "Digital Guruji",
      hi: "डिजिटल गुरुजी"
    },
    buttons: {
      quick: {
        en: "Quick Tech Tips",
        hi: "त्वरित तकनीकी सुझाव"
      },
      basic: {
        en: "Learn Basics",
        hi: "बुनियादी जानकारी सीखें"
      },
      help: {
        en: "Get Help",
        hi: "मदद प्राप्त करें"
      }
    },
    footer: {
      en: "&copy; 2025 Digital Guruji. All rights reserved.",
      hi: "&copy; 2025 डिजिटल गुरुजी. सर्वाधिकार सुरक्षित।"
    }
};

function showTips(type) {
    const lang = document.getElementById("languageSwitcher").value;
    document.getElementById("tipsSection").innerHTML = content[type][lang] || content[type]["en"];
}

function updateStaticContent() {
    const lang = document.getElementById("languageSwitcher").value;
    // Update header
    document.querySelector(".header h1").textContent = content.header[lang] || content.header["en"];
    
    // Update button labels
    document.getElementById("btnQuick").textContent = content.buttons.quick[lang] || content.buttons.quick["en"];
    document.getElementById("btnBasic").textContent = content.buttons.basic[lang] || content.buttons.basic["en"];
    document.getElementById("btnHelp").textContent = content.buttons.help[lang] || content.buttons.help["en"];
    
    // Update footer
    document.querySelector("footer p").innerHTML = content.footer[lang] || content.footer["en"];
}

function switchLanguage() {
    // Update content if tips are already shown
    const section = document.querySelector("#tipsSection h2");
    if (section) {
        const id = section.textContent.toLowerCase().includes("quick") ? 'quick'
                 : section.textContent.toLowerCase().includes("basic") ? 'basic'
                 : 'help';
        showTips(id);
    }
    
    // Update static content (header, buttons, footer)
    updateStaticContent();
}

// Call updateStaticContent on page load to set default language
window.onload = updateStaticContent;
