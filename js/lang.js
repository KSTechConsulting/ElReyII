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
        contactst2: 'Contact us with any questions',
        contactbooking: 'Booking',
        contactgeneral: 'General',
        contacttechnical: 'Technical',
        contactbootunsendmessage: 'Send Message',
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Leave a message here',
        namelabel: 'Your Name',
        emaillabel: 'Your Email',
        subjectlabel: 'Subject',
        messagelabel: 'Message',


    //footer
         footernew: 'Send us your email to stay informed about our offers and events',
         footerbootunnews: 'Newsletter',
         footerbootunsendnews: 'Send',
         footeryouremail: 'Your email',
         footeropening: 'Opening',
         footercontact: 'Contact',
         footercompny: 'Company',
         footercontactus: 'Contact Us', 

    
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
       contactus: 'Contáctanos',
       contactbd: 'Contacto',

        //Contact Start -->
        contactst1: 'Contáctanos',
        contactst2: 'Contacto Para Cualquier Consulta',
        contactbooking: 'Reserva',
        contactgeneral: 'General',
        contacttechnical: 'Técnico',
        contactbootunsendmessage: 'Enviar mensaje',
        name: 'Su nombre',
        email: 'Tu correo electrónico',
        subject: 'Asunto',
        message: 'Deja un mensaje aquí',
        namelabel: 'Su nombre',
        emaillabel: 'Tu correo electrónico',
        subjectlabel: 'Asunto',
        messagelabel: 'Mensaje',

        //footer
         footernew: 'Envianos tu email para mantenerte informado, sobre nuestras ofertas y eventos',
         footerbootunnews: 'Boletin informativo',
         footerbootunsendnews: 'Enviar',
         footeryouremail: 'Tu correo electrónico',
         footeropening: 'Apertura',
         footercontact: 'Contacto',
         footercompny: 'Compañía',
         footercontactus: 'Contacta con nosotros',



    }
        // Add more languages as needed
    };
    //var idiomaSeleccionado = document.getElementById('selectorIdioma').value;
    //document.getElementById('name').setAttribute('placeholder', languageData[lang].name);
     document.getElementById('footeryouremail').setAttribute('placeholder', languageData[lang].footeryouremail);
   
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
    $('#contactbooking').text(languageData[lang].contactbooking);
    $('#contactgeneral').text(languageData[lang].contactgeneral);
    $('#contacttechnical').text(languageData[lang].contacttechnical);
    $('#contactbootunsendmessage').text(languageData[lang].contactbootunsendmessage);
    $('#namelabel').text(languageData[lang].name);
    $('#emaillabel').text(languageData[lang].email);
    $('#subjectlabel').text(languageData[lang].subject);
    $('#messagelabel').text(languageData[lang].message);

    //footer
    $('#footernew').text(languageData[lang].footernew);
    $('#footerbootunnews').text(languageData[lang].footerbootunnews);
    $('#footerbootunsendnews').text(languageData[lang].footerbootunsendnews);
    //$('#footeryouremail').text(languageData[lang].footeryouremail);
    $('#footeropening').text(languageData[lang].footeropening);
    $('#footercontact').text(languageData[lang].footercontact);
    $('#footercompny').text(languageData[lang].footercompny);
    $('#footercontactus').text(languageData[lang].footercontactus);

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