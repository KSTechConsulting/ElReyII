// Function to change language
function changeLanguage(lang) {
    // Update content based on selected language
    updateContent(lang);
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

 // Function to update content based on language
 function updateContent(lang) {
      // Fetch language data dynamically (from server or JSON file)
    // For the sake of simplicity, we'll use a simple object
    console.log(lang);
    const languageData = {
    'en': { 
        home: 'Home',
        menu: 'Menu',
        contact: 'Contact',
        language: 'Language',
    
    },
    'es': { 
        home: 'Inicio',
        menu: 'Menú',
        contact: 'Contacto',
        language: 'Idioma',
    }
        // Add more languages as needed
    };

    // Update content based on selected language
   
    $('#home').text(languageData[lang].home);
    $('#menu').text(languageData[lang].menu);
    $('#contact').text(languageData[lang].contact);
    $('#language').text(languageData[lang].language);
}

 // Function to initialize language on page load
 $(document).ready(function() {
    // Retrieve selected language from localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    // If a language is stored, update content with that language
    if (selectedLanguage) {
        updateContent(selectedLanguage);
    }
});