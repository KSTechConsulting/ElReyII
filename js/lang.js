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
       //header

        home: 'Home',
        menu: 'Menu',
        contact: 'Contact',
        language: 'Language',

        //body

        homecontactbd:'Home', 
        pagescontactbd: 'Pages',
        contactus: 'Contact Us',
        contactbd: 'Contact',

    //Contact Start -->
        contactst1: 'Contact Us',
        contactst2: 'Contact For Any Query',
       

    
    },
    'es': {
        //header

        home: 'Inicio',
        menu: 'Menú',
        contact: 'Contacto',
        language: 'Idioma',

       //body
       homecontactbd: 'Inicio', 
       pagescontactbd: 'Páginas',
       contactus: 'Contacta con nosotros',
       contactbd: 'Contacto',

        //Contact Start -->
        contactst1: 'Contacta con nosotros',
        contactst2: 'Contacto Para Cualquier Consulta',



    }
        // Add more languages as needed
    };

    // Update content based on selected language
   
    $('#home').text(languageData[lang].home);
    $('#menu').text(languageData[lang].menu);
    $('#contact').text(languageData[lang].contact);
    $('#language').text(languageData[lang].language);

    $('#homecontactbd').text(languageData[lang].homecontactbd);
    $('#pagescontactbd').text(languageData[lang].pagescontactbd);
    $('#contactus').text(languageData[lang].contactus);
    $('#contactbd').text(languageData[lang].contactbd);

    //Contact Start -->
    $('#contactst1').text(languageData[lang].contactst1);
    $('#contactst2').text(languageData[lang].contactst2);
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