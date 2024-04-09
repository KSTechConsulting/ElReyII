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

        //Contact page up
        homecontactbd:'Home', 
        pagescontactbd: 'Pages',
        contactus: 'Contact Us',
        contactbd: 'Contact',

        //Menu page up
        menuup1: 'Food Menu',
        menuup2: 'Home',
        menuup3: 'Pages',
        menuup4: 'Menu',

        //Home page up
        indbutonmenu: 'Menu',
        indfmmenu: 'Food Menu',
        indmpimenu: 'Most Popular Items',
        indtmenu: 'Testimonial',
        indocsmenu: 'Our Clients Say!!!',
        indmsg: 'Enjoy Our' + ' ' +
        'Delicious Meal',
        idpopbreak: 'Breakfast',
        idpop: 'Popular',
        idspclanc: 'Lunch/Dinner',
        idspc: 'Special',
        idlovedinner: 'Drinks',
        idlove: 'Lovely',

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

        //Menu Start
        menuup5: 'Food Menu',
        menuup6: 'Breakfast',
        menuup7: 'Dinner / Lunch',
        menuup8: 'Lunch / Dinner',
        menuup9: 'Desserts',
        menuup10: 'Drinks',
        menuup11: 'Catering',
        menuup12: 'Combos',

//tab-content
       
        //Breakfast home page

        homemenutab: '2 Eggs any style w. ',
        homemenutab1: 'Bacon, ham, sausage, potateos, toast, coffe or tea',
        homemenutab2: 'Pancakes',
        homemenutab3: 'With egg & sausage',
        homemenutab4: 'French toast',
        homemenutab5: 'With egg & sausage',
        homemenutab6: 'Dominican Breakfast',
        homemenutab7: '1 Meat / 1 Choice',
        homemenutab8: 'Cuban',
        homemenutab9: '',
        homemenutab10: 'Beef tripe',
        homemenutab11: '(Wed, Sat, Sun)',

         //Lunch/dinner home page
        homemenutab12: 'Grilled chicken breast',
        homemenutab13: '',
        homemenutab14: 'Chicken cordon blue',
        homemenutab15: '(no side)',
        homemenutab16: 'Skirt steak w/ shrimp',
        homemenutab17: '',
        homemenutab18: 'Chicken with rice',
        homemenutab19: '',
        homemenutab20: 'Pork chops',
        homemenutab21: '(1PC)',
        homemenutab22: 'Mofongo W.roast pork',
        homemenutab23: 'Mashed fried green plantain',
        homemenutab24: 'Beef chimichurri',
        homemenutab25: '',
       
        //Drinks home page
        homemenutab26: 'Non - Alcoholic',
        homemenutab27: 'Alcoholic',
        homemenutab28: 'Orange juice',
        homemenutab29: 'Piña colada',
        homemenutab30: 'Pineapple juice',
        homemenutab31: 'Sangria',
        homemenutab31a: 'White/Red', 
        homemenutab32: 'Carrot juice',
        homemenutab33: 'Margarita',
        homemenutab33a: 'Lemon/Strawberry',
        homemenutab34: 'Orange with milk',
        homemenutab35: 'Mojito',
        homemenutab36: 'Wine',
        homemenutab36a: 'Red/White',

        //Breakfast
        menutab1: 'Omelettes',
        menutab11: 'Swiss cheese',
        menutab12: 'American cheese',
        menutab13: 'Western',
        menutab14: 'Ham',
        menutab15: 'Spanish',
        menutab16: 'Bacon',
        menutab17: 'Onions',
        menutab18: 'Mushroom',
        menutab19: 'Ham & American cheese',
        menutab110: 'Bacon & cheese',
        menutab111: 'Shrimp',
        menutab112: 'Sausage',
        menutab112: 'Turkey',
        menutab114: 'Veggie omelette',
        menutab115: 'Pancakes or French Toast',
        menutab116: 'Extra meat $1.00',
        menutab117: 'Pancakes or French toast(plain)',
        menutab118: 'Pancakes with egg & sausage',
        menutab119: 'French toast with egg & sausage',
        menutab120: 'Breakfast Specials',
        menutab121: '2 Eggs and philly steak w. home fries and toast',
        menutab122: '1 Egg any style w. potatoes, toast and coffee or tea',
        menutab123: '1 Egg any style w. ham or bacon or sausage, potatoes, toast, and coffee or tea',
        menutab124: '2 Eggs any w. potateos, toast, coffee or tea',
        menutab125: '2 Eggs any style w. bacon or ham or sausage, potateos, toast, coffe or tea',
        menutab126: 'Dominican Breakfast',
        menutab127: 'Served from 7:00 AM - 11: 00 A, after 11:00 AM.',
        menutab127a: '$1.00 extra / served with mangu & egg',
        menutab128: '1 Meat / 1 Choice',
        menutab129: '2 Meat / 2 Choice',
        menutab130: '3 Meat / 3 Choice',
        menutab131: '4 Meat / 4 Choice',
        menutab132: 'Extra meat or cheese $2.00',
        menutab133: 'Breakfast / Sandwiches',
        menutab134: 'BLT Bacon lettuce & tomato',
        menutab135: 'Bacon & eggs',
        menutab136: 'Ham & eggs',
        menutab137: 'Salami & eggs',
        menutab138: 'Eggs salad',
        menutab139: 'Corned beef & eggs',
        menutab140: 'Pastrami & eggs',
        menutab141: 'Prices subject to change without notice',

         //Dinner / Lunch  
        menutab21: 'Burgers',
        menutab22: 'Hamburger',
        menutab23: 'Hamburger deluxe',
        menutab24: 'Cheeseburger',
        menutab25: 'Cheeseburger deluxe',
        menutab26: 'Hamburger deluxe w bacon',
        menutab27: 'Bacon cheeseburger',
        menutab28: 'Bacon cheesseburger deluxe',
        menutab29: 'Sandwiches',
        menutab210: 'Pastrami',
        menutab211: 'Chicken parmigiana',
        menutab212: 'Shrimp parmigiana',
        menutab213: 'Roast pork',
        menutab214: 'Turkey breast',
        menutab215: 'Beef salami',
        menutab216: 'Cuban',
        menutab217: 'Steak',
        menutab218: 'Philly cheese steak',
        menutab219: 'Breaded steak',
        menutab220: 'Pork chop',
        menutab221: 'Baked chicken',
        menutab222: 'Swiss cheese',
        menutab223: 'Grilled cheese',
        menutab224: 'Tuna salad',
        menutab225: 'Shrimp salad',
        menutab226: 'Chicken salad',
        menutab227: 'Grilled chicken breast',
        menutab228: 'Fish',
        menutab229: 'Chicken chimichurri',
        menutab230: 'Beef chimichurri',
        menutab231: 'Breaded chicken',
        menutab232: 'Appetizer',
        menutab233: '2 Seafood mini mofongos',
        menutab234: '2 Shrimp mini mofongos',
        menutab235: '2 Chicken mini mofongos',
        menutab236: '2 Beef mini mofongos',
        menutab237: 'Shrimp cocktail',
        menutab238: 'Fresh clams',
        menutab239: 'Combo mix meats (3p)',
        menutab240: 'Combo mix meats (2P)',
        menutab241: 'Combo mix meats (1P)',
        menutab242: 'Beef, Pork, Chicken and Cheese',
        menutab243: 'Fried calamari',
        menutab244: 'Grilled clams',
        menutab245: 'Rice',
        menutab246: 'Lobster soupy rice',
        menutab247: 'Rice with lobster',
        menutab248: 'Shrimp soupy rice',
        menutab249: 'Rice with shrimp',
        menutab250: 'Chicken with rice',
        menutab251: 'Chicken soupy rice',
        menutab252: 'Calamari with rice',
        menutab253: 'Rice with spanish sauce',
        menutab254: 'Sausage with rice',
        menutab255: 'Chofán',
        menutab256: 'Soups',
        menutab257: 'Seafood (1P)',
        menutab258: 'Seafood (2P)',
        menutab259: 'Oxtail',
        menutab260: '(to order)',
        menutab261: 'Chicken (Everyday)',
        menutab262: 'Beef tripe (Wed, Sat, Sun)',
        menutab263: 'Beef soup',
        menutab264: '(to order)',
        menutab265: 'Spanish (Tues, Fri)',
        menutab266: 'Cow feet soup(Thur)',
        menutab267: 'Vegetable',
        menutab268: 'Fish',
        menutab269: 'Shrimp',
        menutab270: 'Salads',
        menutab271: 'Caesar salad',
        menutab272: 'Grilled chicken salad',
        menutab273: 'Lodster',
        menutab274: 'Shrimp',
        menutab275: 'Octopus',
        menutab276: 'Tuna fish',
        menutab277: 'Cosfish',
        menutab278: 'Avocado in season',
        menutab279: 'Mixed vegetables',
        menutab280: 'Lettuce & tomatoes',
        menutab281: 'Potatoes (1P)',
        menutab282: 'Potatoes (2P)',
        menutab283: 'Seafood (1P)',
        menutab284: 'Seafood (2P)',
        menutab285: 'Typical plate',
        menutab286: 'Seafood canoe',
        menutab287: 'Shrimp canoe',
        menutab288: 'Codfish canoe',
        menutab289: 'Cheese canoe',
        menutab290: 'Beef canoe',
        menutab291: 'Chicken canoe',
        menutab292: 'Shrimp ceviche',
        menutab293: 'Fish ceviche',

        //Lunch / Dinner 
        menutab3: 'Meat',
        menutab31: 'Skirt steak',
        menutab32: 'Skirt steak w/ shrimp',
        menutab33: 'T-bone steak',
        menutab34: 'T-bone steak w/ shrimp',
        menutab35: 'Grilled sirloin steak',
        menutab36: 'Steak sauteed with onons',
        menutab37: 'Shoulder steak',
        menutab38: 'Steak in sauce',
        menutab39: 'Pepper steak',
        menutab310: 'Steak topped w. two eggs',
        menutab311: 'Breaded steak',
        menutab312: 'Beef oxtail stew',
        menutab313: 'Beef stew',
        menutab314: 'Cow feet stew',
        menutab315: 'Goat stew',
        menutab316: 'Beef liver stew',
        menutab317: 'Sauteed beef liver steak',
        menutab318: 'Pork chops (1PC)',
        menutab319: 'Pork chops (2PC)',
        menutab320: 'Grilled pork Chops (1PC)',
        menutab321: 'Grilled pork Chops (2PC)',
        menutab322: '(2P) Spring pork chop primavera',
        menutab323: '(2P) Pork chop in sauce',
        menutab324: '(2P) Breaded pork chops',
        menutab325: 'BBQ Spare ribs',
        menutab326: 'Eggplant',
        menutab327: 'Roast pork',
        menutab328: 'Seafood',
        menutab329: 'Paella(1P)',
        menutab330: 'Paella(2P)',
        menutab331: 'Seafood casserole',
        menutab332: 'Lobster cantonense',
        menutab333: 'Lobster w. chili sauce',
        menutab334: 'Grilled lobster',
        menutab335: 'Termidor lobster',
        menutab336: 'Shrimp w/ broccoli (only)',
        menutab337: 'Shrimp parmigiana',
        menutab338: 'Shrimp in green sauce',
        menutab339: 'Shrimp scampi',
        menutab340: 'Fried breaded shrimp',
        menutab341: 'Shrimp w/ chili sauce',
        menutab342: 'Shrimp w/ vegetables',
        menutab343: 'Shrimp french style',
        menutab344: 'Red snapper any style',
        menutab345: 'Blue fish any style',
        menutab346: 'Octopus with chili sauce',
        menutab347: 'Codfish stew',
        menutab348: 'Surf and turf',
        menutab349: 'French fish fillet',
        menutab350: 'Stuffed seafood fish fillet',
        menutab351: 'Fish fillet any style',
        menutab352: 'Fried calamari',
        menutab353: 'Grilled salmon',
        menutab354: '"All the seafood selections are served with rice and beans or green plantains & salad or fried yellow plantains & salad or french fries & salad"',
        menutab355: 'Chicken',
        menutab356: '1/2 Fried chicken',
        menutab357: '1/2 Rotisserie chicken',
        menutab358: 'Breaded chicken',
        menutab359: 'Chicken chunks',
        menutab360: 'Boneless chicken chunks',
        menutab361: 'BBQ chicken',
        menutab362: 'Wine chicken',
        menutab363: 'French chicken',
        menutab364: 'Grilled chicken',
        menutab365: 'Chicken breast stuffed with shrimp',
        menutab366: 'Chicken breast stuffed w/ seafood',
        menutab367: 'Grilled chicken breast w/ shrimp',
        menutab368: 'Chicken breast in sauce',
        menutab369: 'Lemon chicken',
        menutab370: 'Chicken cordon blue(no side)',
        menutab371: 'Grilled chicked cutlet sauteed(no side) with vegetables',
        menutab372: 'Chicken breast stuffed w/ crabmeat',
        menutab373: '"All the plate above are served with rice and beans or fried yellow plantains or french fried"',
        menutab374: 'Pasta',
        menutab375: 'Chicken parmigiana',
        menutab376: 'Spaghetti with chicken',
        menutab377: 'Spaghetti with meat ball',
        menutab378: 'Spaghetti with shrimp',
        menutab379: 'Spaghetti with clams',
        menutab380: 'Spaghetti with lobster',
        menutab381: 'Shrimp parmigiana',
        menutab382: 'Shrimp with vegetables',
        menutab383: 'Shrimp french style',
        menutab384: 'Spaghetti alfredo or fettuccini alfredo',
        menutab385: 'Fettuccini alfreso w/ shrimp',
        menutab386: 'Pasta alfredo w/ shrimp',
        menutab387: 'Plantain cake',
        menutab388: 'Baked ziti',
        menutab389: 'Lasagna',
        menutab390: 'Mofongo',
        menutab391: 'Mashed fried green plantain',
        menutab392: 'W.jumbo shrimp',
        menutab393: 'W.shrimp',
        menutab394: 'W.meat',
        menutab395: 'W.roast pork',
        menutab396: 'W.fried pork skin',
        menutab397: 'W.fried pork skin & cheese',
        menutab398: 'W.goat stew',
        menutab399: 'W.crab meat',
        menutab3100: 'W.chicken',
        menutab3101: 'W.cheese',
        menutab3102: 'W.octopus',
        menutab3103: '3 Octopus mini mofongos',
        menutab3104: '3 Seafood mini mofongos',
        menutab3105: '3 Shrimp mini mofongos',
        menutab3106: '3 Chicken mini mofongos',
        menutab3107: '3 Beef mini mofongos',

        //Desserts
        menutab4: 'Jello',
        menutab41: 'Flan',
        menutab42: 'Bread pudding',
        menutab43: 'Rice pudding',
        menutab44: 'Arepa',
        menutab45: '3 Leches',
        menutab46: 'Cheese cake',
        menutab47: 'Habichuelas con dulce',

        //Drinks
        menutab5: 'Shakes',
        menutab51: 'Soursop',
        menutab52: 'Strawberry',
        menutab53: 'Chocolate',
        menutab54: 'Mamey',
        menutab55: 'Papaya',
        menutab56: 'Orange with milk',
        menutab57: 'Natural juices',
        menutab58: 'Orange',
        menutab59: 'Carrot',
        menutab510: 'Orange with carrot',
        menutab511: 'Lemonade',
        menutab512: 'Passion fruit',
        menutab513: 'Pineapple',
        menutab514: 'Hot beverages',
        menutab515: 'Coffee or tea',
        menutab516: 'Sanka',
        menutab517: 'Hot chocolate',
        menutab518: 'Herbal tea',
        menutab519: 'Hot oatmeal',
        menutab520: 'Expresso',
        menutab521: 'Cappuccino',
        menutab522: 'Ponche dominicano',
        menutab523: 'Beers',
        menutab524: 'Guinnes',
        menutab525: 'Corona',
        menutab526: 'Heineken',
        menutab527: 'Presidente',
        menutab528: 'Becks',
        menutab529: 'Budweiser',
        menutab530: 'Coors light',
        menutab531: 'Bud light',
        menutab532: 'Miller light',
        menutab533: 'Odools',
        menutab534: 'Blue moon',
        menutab535: 'Ciclon',
        menutab536: 'Red bull',
        menutab537: 'Cocktails',

        //Catering
        menutab6: 'Appetizer',
        menutab61: '50 Beef, cheese or chicken empanadas',
        menutab62: '50 Empanadas de pollo, queso o carne',
        menutab63: 'Shrimp empanadas',
        menutab64: 'Empanadas de camarones',
        menutab65: '50 Alcapurrias or quipes',
        menutab66: 'Salads',
        menutab67: 'NAME',
        menutab68: 'SM. TRAY',
        menutab69: 'MD. TRAY',
        menutab610: 'LG. TRAY',        
        menutab611: 'Green',
        menutab612: 'Potato',
        menutab613: 'Shrimp',
        menutab614: 'Seafood',
        menutab615: 'Octopus',
        menutab616: 'Macaroni',
        menutab617: 'Vegetables',
        menutab618: 'Rices',
        menutab619: 'NAME',
        menutab620: 'SM. TRAY',
        menutab621: 'MD. TRAY',
        menutab622: 'LG. TRAY',
        menutab623: 'Black',
        menutab624: 'White',
        menutab625: 'Yellow',
        menutab626: 'Vegetables',
        menutab627: 'Pigeon pea',
        menutab628: 'Rice w/ crab',
        menutab629: 'Rice w/ shrimp',
        menutab630: 'Mix black rice combination',
        menutab631: 'Chofan chicken, pork, beef & shrimp',
        menutab632: 'Chofan chicken, pernil, meat and shrimp',
        menutab633: 'Paella',
        menutab634: 'NAME',
        menutab635: 'SM. TRAY',
        menutab636: 'MD. TRAY',
        menutab637: 'LG. TRAY',
        menutab638: 'Paella',
        menutab639: 'Ceviche',
        menutab640: 'NAME',
        menutab641: 'SM. TRAY',
        menutab642: 'MD. TRAY',
        menutab643: 'LG. TRAY',
        menutab644: 'Shrimp',
        menutab645: 'Side orders',
        menutab646: 'NAME',
        menutab647: 'SM. TRAY',
        menutab648: 'MD. TRAY',
        menutab649: 'LG. TRAY',
        menutab650: 'Cassava',
        menutab651: 'Lasagna',
        menutab652: 'Pastelón',
        menutab653: 'Green banana',
        menutab654: 'Sweet plantains',
        menutab655: 'Green plantains',
        menutab656: 'Stuffed eggplaint w/ beef or checken',
        menutab657: 'Eggplant stuffed with meat or chicken',
        menutab658: 'Meat',
        menutab659: 'NAME',
        menutab660: 'SM. TRAY',
        menutab661: 'MD. TRAY',
        menutab662: 'LG. TRAY',
        menutab663: 'Beef stew',
        menutab664: 'Goat stew',
        menutab665: 'Fried steak',
        menutab666: 'Pepper steak',
        menutab667: 'Roast Pork(2PCS)',
        menutab668: 'Roast Pork(4PCS)',
        menutab669: 'Breaded beef',
        menutab670: 'BBQ spare ribs',
        menutab671: 'Seafood',
        menutab672: 'NAME',
        menutab673: 'SM. TRAY',
        menutab674: 'MD. TRAY',
        menutab675: 'LG. TRAY',
        menutab676: 'Seafood casserole',
        menutab677: 'Shrimp parmigiana',
        menutab678: 'Shrimp in red sauce',
        menutab679: 'Shrimp in garlic sauce',
        menutab680: 'Chicken',
        menutab681: 'NAME',
        menutab682: 'SM. TRAY',
        menutab683: 'MD. TRAY',
        menutab684: 'LG. TRAY',
        menutab685: '6 Chicken',
        menutab686: 'Chicken stew',
        menutab687: 'Chicken chunks',
        menutab688: 'Chicken cordon blue',
        menutab689: 'Sauteed chicken breast',
        menutab690: 'Breaded chicken breast',
        menutab691: 'Chicken breast french style',
        menutab692: 'Chicken breast w/ vegetables',
        menutab693: 'Chicken breast in lemon sauce',
        menutab694: 'Chicken breast stuffed w/ Shrimp',
        menutab695: 'Picadera',
        menutab696: 'NAME',
        menutab697: 'SM. TRAY',
        menutab698: 'MD. TRAY',
        menutab699: 'LG. TRAY',
        menutab6100: 'Fried mixed meats',
        menutab6101: 'Chicken, beef, pork, salami, sausage, cheese & green plantains',
        menutab6102: 'Spaghetti',
        menutab6103: 'NAME',
        menutab6104: 'SM. TRAY',
        menutab6105: 'MD. TRAY',
        menutab6106: 'LG. TRAY',
        menutab6107: 'Spaghetti w/ shrimp',
        menutab6108: 'Spaghetti w/ chicken',
        menutab6109: 'Spaghetti w/ seafood',
        menutab6110: '"Prices subject to change without notice + TAX"',
 
        //Combos
        menutab7: 'Combos',
        menutab71: 'Combo #1',
        menutab72: '"1 Whole rotisserie chicken, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab73: 'Combo #2',
        menutab74: '"Chicken chunks, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab75: 'Combo #3',
        menutab76: 'Boneless',
        menutab77: '"Chicken chunks, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab78: 'Combo #4',
        menutab79: '"Pork chops, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab710: 'Combo #5',
        menutab711: '"Chicken stew, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab712: 'Combo #6',
        menutab713: '"Beef stew, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab714: 'Combo #7',
        menutab715: '"Pepper steak, rice, beans, sweet plantains, salad & 2 Lt. soda free."',
        menutab716: 'Combo #8',
        menutab717: '"Roast pork, rice, beans, sweet plantains, salad & 2 Lt. soda free."',




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

       //Contact up
       homecontactbd: 'Inicio', 
       pagescontactbd: 'Páginas',
       contactus: 'Contáctanos',
       contactbd: 'Contacto',

       //Menu up
       menuup1: 'Menú de comida',
       menuup2: 'Inicio',
       menuup3: 'Páginas',
       menuup4: 'Menú',
       
        //Home up
        indbutonmenu: 'Menú',
        indfmmenu: 'Menú de comida',
        indmpimenu: 'Artículos más populares',
        indtmenu: 'Testimonio',
        indocsmenu: 'Nuestros Clientes Dicen!!!',
        indmsg: 'Disfrute de nuestra' + ' ' +
        'deliciosa comida',
        idpopbreak: 'Desayuno',
        idpop: 'Popular',
        idspclanc: 'Almuerzo/Cena',
        idspc: 'Especial',
        idlovedinner: 'Bebidas',
        idlove: 'Hermosa',
 

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

        //Menu Start
        menuup5: 'Menú de comida',
        menuup6: 'Desayuno',
        menuup7: 'Cena / Almuerzo',
        menuup8: 'Almuerzo / Cena',
        menuup9: 'Postres',
        menuup10: 'Bebidas',
        menuup11: 'Catering',
        menuup12: 'Combinaciones',

//tab-content

        //Breakfast Home page
         homemenutab: '2 huevos de cualquier estilo con. ',
         homemenutab1: 'Tocino, jamón, salchicha, patatas, tostadas, café o té',
         homemenutab2: 'Panqueques',
         homemenutab3: 'Con huevo y salchicha',
         homemenutab4: 'tostadas francesas',
         homemenutab5: 'Con huevo y salchicha',
         homemenutab6: 'Desayuno dominicano',
         homemenutab7: '1 carne / 1 elección',
         homemenutab8: 'cubano',
         iniciomenutab9: '',
         homemenutab10: 'tripas de ternera',
         homemenutab11: '(miércoles, sábado, domingo)',
         
        //Lunch/dinner home page
         homemenutab12: 'Pechuga de pollo a la parrilla',
         homemenutab13: '',
         homemenutab14: 'Pollo cordon blue',
         homemenutab15: '(sin lado)',
         homemenutab16: 'Arrachera con camarones',
         homemenutab17: '',
         homemenutab18: 'Pollo con arroz',
         homemenutab19: '',
         homemenutab20: 'Chuletas de cerdo',
         homemenutab21: '(1PC)',
         homemenutab22: 'W.cerdo asado',
         homemenutab23: 'Plátano verde frito triturado',
         homemenutab24: 'Chimichurri de ternera',
         homemenutab25: '',

        //Drinks home page
        homemenutab26: 'Sin alcohol',
        homemenutab27: 'Alcohólico',
        homemenutab28: 'Jugo de naranja',
        homemenutab29: 'Piña colada',
        homemenutab30: 'Jugo de piña',
        homemenutab31: 'Sangría',
        homemenutab31a: 'Blanco/Rojo',
        homemenutab32: 'Jugo de zanahoria',
        homemenutab33: 'Margarita',
        homemenutab33a: 'Limón/Fresa',
        homemenutab34: 'Naranja con leche',
        homemenutab35: 'Mojito',
        homemenutab36: 'Vino',
        homemenutab36a: 'Rojo/Blanco',

         //Breakfast
         menutab1: 'Tortillas',
         menutab11: 'queso suizo',
         menutab12: 'queso americano',
         menutab13: 'occidental',
         menutab14: 'Jamón',
         menutab15: 'español',
         menutab16: 'Tocino',
         menutab17: 'Cebollas',
         menutab18: 'Hongo',
         menutab19: 'Jamón y queso americano',
         menutab110: 'Tocino y queso',
         menutab111: 'Camarones',
         menutab112: 'Salchicha',
         menutab113: 'Pavo',
         menutab114: 'Tortilla de verduras',
         menutab115: 'Panqueques o tostadas francesas',
         menutab116: 'Carne extra $1.00',
         menutab117: 'Panqueques o tostadas francesas (simples)',
         menutab118: 'Tortitas con huevo y salchicha',
         menutab119: 'Tostadas francesas con huevo y salchicha',
         menutab120: 'Especiales de desayuno',
         menutab121: '2 huevos y filete philly con patatas fritas y tostadas caseras',
         menutab122: '1 huevo de cualquier estilo con patatas, tostadas y café o té',
         menutab123: '1 huevo de cualquier estilo con jamón, tocino o salchicha, patatas, tostadas y café o té',
         menutab124: '2 huevos de cualquier tamaño potateos, tostadas, café o té',
         menutab125: '2 huevos de cualquier estilo con tocino o jamón o salchicha, patatas, tostadas, café o té',
         menutab126: 'Desayuno dominicano',
         menutab127: 'Servido de 7:00 AM a 11:00 AM, después de las 11:00 AM.',
         menutab127a: '$1.00 extra / servido con mangú y huevo',
         menutab128: '1 carne / 1 opción',
         menutab129: '2 carnes / 2 opciones',
         menutab130: '3 carnes / 3 opciones',
         menutab131: '4 carnes / 4 opciones',
         menutab132: 'Carne o queso extra $2.00',
         menutab133: 'Desayuno / Sándwiches',
         menutab134: 'BLT tocino, lechuga y tomate',
         menutab135: 'Tocino y huevos',
         menutab136: 'Jamón y huevos',
         menutab137: 'Salami y huevos',
         menutab138: 'Ensalada de huevos',
         menutab139: 'Carne en conserva y huevos',
         menutab140: 'Pastrami y huevos',
         menutab141: 'Precios sujetos a cambio sin previo aviso',

         //Dinner / Lunch 
         menutab21: 'Hamburguesas',
         menutab22: 'Hamburguesa',
         menutab23: 'Hamburguesa de lujo',
         menutab24: 'Hamburguesa con queso',
         menutab25: 'Hamburguesa con queso de lujo',
         menutab26: 'Hamburguesa de lujo con tocino',
         menutab27: 'Hamburguesa con queso y tocino',
         menutab28: 'Hamburguesa con queso y tocino de lujo',
         menutab29: 'Sándwiches',
         menutab210: 'Pastrami',
         menutab211: 'Pollo a la parmesana',
         menutab212: 'Camarones a la parmesana',
         menutab213: 'Cerdo asado',
         menutab214: 'Pechuga de pavo',
         menutab215: 'Salami de ternera',
         menutab216: 'cubano',
         menutab217: 'Filete',
         menutab218: 'filete con queso Filadelfia',
         menutab219: 'Filete empanizado',
         menutab220: 'Chuleta de cerdo',
         menutab221: 'Pollo al horno',
         menutab222: 'queso suizo',
         menutab223: 'Queso asado',
         menutab224: 'Ensalada de atún',
         menutab225: 'Ensalada de camarones',
         menutab226: 'Ensalada de pollo',
         menutab227: 'Pechuga de pollo a la parrilla',
         menutab228: 'Pescado',
         menutab229: 'Chimichurri de pollo',
         menutab230: 'Chimichurri de ternera',
         menutab231: 'Pollo empanizado',
         menutab232: 'Aperitivo',
         menutab233: '2 mini mofongos de mariscos',
         menutab234: '2 mini mofongos de camarones',
         menutab235: '2 mini mofongos de pollo',
         menutab236: '2 mini mofongos de res',
         menutab237: 'Cóctel de camarones',
         menutab238: 'Almejas frescas',
         menutab239: 'Combo mezcla de carnes (3p)',
         menutab240: 'Combo mezcla de carnes (2P)',
         menutab241: 'Combo de carnes mixtas (1P)',
         menutab242: 'Carne de res, cerdo, pollo y queso',
         menutab243: 'Calamares fritos',
         menutab244: 'Almejas a la parrilla',
         menutab245: 'Arroz',
         menutab246: 'Arroz caldoso de bogavante',
         menutab247: 'Arroz con bogavante',
         menutab248: 'Arroz caldoso con gambas',
         menutab249: 'Arroz con gambas',
         menutab250: 'pollo con arroz',
         menutab251: 'Arroz caldoso con pollo',
         menutab252: 'Calamares con arroz',
         menutab253: 'Arroz con salsa española',
         menutab254: 'Salchicha con arroz',
         menutab255: 'Chofán',
         menutab256: 'Sopas',
         menutab257: 'Mariscos (1P)',
         menutab258: 'Mariscos (2P)',
         menutab259: 'Rabo de toro',
         menutab260: '(para ordenar)',
         menutab261: 'Pollo (todos los días)',
         menutab262: 'Callos de ternera (miércoles, sábado, domingo)',
         menutab263: 'Sopa de carne',
         menutab264: '(para ordenar)',
         menutab265: 'Español (martes, viernes)',
         menutab266: 'Sopa de patas de vaca (jueves)',
         menutab267: 'Verdura',
         menutab268: 'Pescado',
         menutab269: 'Camarones',
         menutab270: 'Ensaladas',
         menutab271: 'ensalada César',
         menutab272: 'Ensalada de pollo a la parrilla',
         menutab273: 'Langosta',
         menutab274: 'Camarones',
         menutab275: 'Pulpo',
         menutab276: 'Atún',
         menutab277: 'Cosfish',
         menutab278: 'Aguacate en temporada',
         menutab279: 'Verduras mixtas',
         menutab280: 'Lechuga y tomates',
         menutab281: 'Patatas (1P)',
         menutab282: 'Patatas (2P)',
         menutab283: 'Mariscos (1P)',
         menutab284: 'Mariscos (2P)',
         menutab285: 'Plato típico',
         menutab286: 'Canoa de mariscos',
         menutab287: 'Canoa camaronera',
         menutab288: 'Canoa de bacalao',
         menutab289: 'Canoa de queso',
         menutab290: 'Canoa de ternera',
         menutab291: 'Canoa de pollo',
         menutab292: 'Ceviche de camarón',
         menutab293: 'Ceviche de pescado',

         //Lunch / Dinner
         menutab3: 'Carne',
         menutab31: 'filete de falda',
         menutab32: 'Arrachera con camarones',
         menutab33: 'chuletón',
         menutab34: 'chuletón con camarones',
         menutab35: 'Solomillo a la plancha',
         menutab36: 'Filete salteado con cebollas',
         menutab37: 'Paleta',
         menutab38: 'Filete en salsa',
         menutab39: 'Filete a la pimienta',
         menutab310: 'Filete cubierto con. dos huevos',
         menutab311: 'Filete empanizado',
         menutab312: 'Estofado de rabo de toro',
         menutab313: 'Estofado de ternera',
         menutab314: 'Guiso de patas de vaca',
         menutab315: 'Estofado de cabra',
         menutab316: 'Estofado de hígado de ternera',
         menutab317: 'Filete de hígado de res salteado',
         menutab318: 'Chuletas de cerdo (1 pieza)',
         menutab319: 'Chuletas de cerdo (2 piezas)',
         menutab320: 'Chuletas de cerdo a la parrilla (1 pieza)',
         menutab321: 'Chuletas de cerdo a la parrilla (2 piezas)',
         menutab322: '(2P) Chuleta de cerdo primavera primavera',
         menutab323: '(2P) Chuleta de cerdo en salsa',
         menutab324: '(2P) Chuletas de cerdo empanizadas',
         menutab325: 'Costillas a la barbacoa',
         menutab326: 'Berenjena',
         menutab327: 'Cerdo asado',
         menutab328: 'Mariscos',
         menutab329: 'Paella(1P)',
         menutab330: 'Paella(2P)',
         menutab331: 'Cazuela de mariscos',
         menutab332: 'Langosta cantonense',
         menutab333: 'Langosta con. salsa de chile',
         menutab334: 'Langosta a la parrilla',
         menutab335: 'langosta Termidor',
         menutab336: 'Camarones con brócoli (solo)',
         menutab337: 'Camarones a la parmesana',
         menutab338: 'Camarones en salsa verde',
         menutab339: 'Langostinos al ajillo',
         menutab340: 'Camarones empanizados fritos',
         menutab341: 'Camarones con salsa de chile',
         menutab342: 'Camarones con verduras',
         menutab343: 'Camarones a la francesa',
         menutab344: 'Pargo rojo de cualquier estilo',
         menutab345: 'Pescado azul al gusto',
         menutab346: 'Pulpo con salsa de chile',
         menutab347: 'Guiso de bacalao',
         menutab348: 'Mare y tierra',
         menutab349: 'filete de pescado francés',
         menutab350: 'Filete de pescado relleno de marisco',
         menutab351: 'Filete de pescado al gusto',
         menutab352: 'Calamares fritos',
         menutab353: 'Salmón a la parrilla',
         menutab354: '"Todas las selecciones de mariscos se sirven con arroz y frijoles o plátanos verdes y ensalada o plátanos amarillos fritos y ensalada o papas fritas y ensalada"',
         menutab355: 'Pollo',
         menutab356: '1/2 pollo frito',
         menutab357: '1/2 pollo asado',
         menutab358: 'Pollo empanizado',
         menutab359: 'Trozos de pollo',
         menutab360: 'Trozos de pollo deshuesados',
         menutab361: 'Pollo a la barbacoa',
         menutab362: 'Pollo al vino',
         menutab363: 'pollo francés',
         menutab364: 'Pollo a la parrilla',
         menutab365: 'Pechuga de pollo rellena de camarones',
         menutab366: 'Pechuga de pollo rellena de marisco',
         menutab367: 'Pechuga de pollo a la parrilla con camarones',
         menutab368: 'Pechuga de pollo en salsa',
         menutab369: 'Pollo al limón',
         menutab370: 'Cordón de pollo azul (sin acompañamiento)',
         menutab371: 'Chuleta de pollo a la parrilla salteada(sin acompañamiento) con verduras',
         menutab372: 'Pechuga de pollo rellena con carne de cangrejo',
         menutab373: '"Todos los platos de arriba se sirven con arroz y frijoles o plátanos amarillos fritos o fritos"',
         menutab374: 'Pasta',
         menutab375: 'Pollo a la parmesana',
         menutab376: 'Espaguetis con pollo',
         menutab377: 'Espaguetis con albóndigas',
         menutab378: 'Espaguetis con camarones',
         menutab379: 'Espaguetis con almejas',
         menutab380: 'Espaguetis con bogavante',
         menutab381: 'Camarones a la parmesana',
         menutab382: 'Camarones con verduras',
         menutab383: 'Camarones a la francesa',
         menutab384: 'Espaguetis alfredo o fettuccini alfredo',
         menutab385: 'Fettuccini al aire libre con camarones',
         menutab386: 'Pasta alfredo con camarones',
         menutab387: 'Pastel de plátano',
         menutab388: 'Ziti al horno',
         menutab389: 'Lasaña',
         menutab390: 'Mofongo',
         menutab391: 'Plátano verde frito triturado',
         menutab392: 'W.camarones jumbo',
         menutab393: 'W.camarones',
         menutab394: 'W.carne',
         menutab395: 'W.cerdo asado',
         menutab396: 'W.piel de cerdo frita',
         menutab397: 'W.piel de cerdo frita y queso',
         menutab398: 'W.guiso de cabra',
         menutab399: 'W.carne de cangrejo',
         menutab3100: 'W.pollo',
         menutab3101: 'W.queso',
         menutab3102: 'W.pulpo',
         menutab3103: '3 mini mofongos de pulpo',
         menutab3104: '3 mini mofongos de mariscos',
         menutab3105: '3 mini mofongos de camarones',
         menutab3106: '3 mini mofongos de pollo',
         menutab3107: '3 mini mofongos de res', 

         //Desserts
         menutab4: 'gelatina',
         menutab41: 'Flan',
         menutab42: 'Pudín de pan',
         menutab43: 'Arroz con leche',
         menutab44: 'Arepa',
         menutab45: '3 Leches',
         menutab46: 'Tarta de queso',
         menutab47: 'Habichuelas con dulce',

         //Drinks
         menutab5: 'Batidos',
         menutab51: 'Guanábana',
         menutab52: 'Fresa',
         menutab53: 'Chocolate',
         menutab54: 'Mamey',
         menutab55: 'Papaya',
         menutab56: 'Naranja con leche',
         menutab57: 'Jugos naturales',
         menutab58: 'Naranja',
         menutab59: 'Zanahoria',
         menutab510: 'Naranja con zanahoria',
         menutab511: 'Limonada',
         menutab512: 'Maracuyá',
         menutab513: 'Piña',
         menutab514: 'Bebidas calientes',
         menutab515: 'Café o té',
         menutab516: 'Sanka',
         menutab517: 'Chocolate caliente',
         menutab518: 'Té de hierbas',
         menutab519: 'Avena caliente',
         menutab520: 'Expreso',
         menutab521: 'Capuchino',
         menutab522: 'Ponche dominicano',
         menutab523: 'Cervezas',
         menutab524: 'Guinnes',
         menutab525: 'Corona',
         menutab526: 'Heineken',
         menutab527: 'Presidente',
         menutab528: 'Becks',
         menutab529: 'Budweiser',
         menutab530: 'Coors light',
         menutab531: 'Bud light',
         menutab532: 'Miller light',
         menutab533: 'Odools',
         menutab534: 'Blue moon',
         menutab535: 'Ciclon',
         menutab536: 'Red bull',
         menutab537: 'Cócteles',

         //Catering
         menutab6: 'Aperitivo',
         menutab61: '50 Empanadas de carne, queso o pollo',
         menutab62: '50 Empanadas de pollo, queso o carne',
         menutab63: 'Empanadas de camarón',
         menutab64: 'Empanadas de camarones',
         menutab65: '50 Alcapurrias o quipes',
         menutab66: 'Ensaladas',
         menutab67: 'NOMBRE',
         menutab68: 'SM. BANDEJA',
         menutab69: 'MD. BANDEJA',
         menutab610: 'LG. BANDEJA',
         menutab611: 'Verde',
         menutab612: 'Patata',
         menutab613: 'Camarones',
         menutab614: 'Mariscos',
         menutab615: 'Pulpo',
         menutab616: 'Macarrones',
         menutab617: 'Verduras',
         menutab618: 'Arroces',
         menutab619: 'NOMBRE',
         menutab620: 'SM. BANDEJA',
         menutab621: 'MD. BANDEJA',
         menutab622: 'LG. BANDEJA',
         menutab623: 'Negro',
         menutab624: 'Blanco',
         menutab625: 'Amarillo',
         menutab626: 'Verduras',
         menutab627: 'Gandul',
         menutab628: 'Arroz con cangrejo',
         menutab629: 'Arroz con camarones',
         menutab630: 'Mezclar combinación de arroz negro',
         menutab631: 'Chofan de pollo, cerdo, ternera y camarones',
         menutab632: 'Chofan de pollo, pernil, carne y camarones',
         menutab633: 'Paella',
         menutab634: 'NOMBRE',
         menutab635: 'SM. BANDEJA',
         menutab636: 'MD. BANDEJA',
         menutab637: 'LG. BANDEJA',
         menutab638: 'Paella',
         menutab639: 'Ceviche',
         menutab640: 'NOMBRE',
         menutab641: 'SM. BANDEJA',
         menutab642: 'MD. BANDEJA',
         menutab643: 'LG. BANDEJA',
         menutab644: 'Camarones',
         menutab645: 'Acompañamientos',
         menutab646: 'NOMBRE',
         menutab647: 'SM. BANDEJA',
         menutab648: 'MD. BANDEJA',
         menutab649: 'LG. BANDEJA',
         menutab650: 'Yuca',
         menutab651: 'Lasaña',
         menutab652: 'Pastelón',
         menutab653: 'Plátano verde',
         menutab654: 'Plátanos dulces',
         menutab655: 'Plátanos verdes',
         menutab656: 'Berenjena rellena con carne o checken',
         menutab657: 'Berenjenas rellenas de carne o pollo',
         menutab658: 'Carne',
         menutab659: 'NOMBRE',
         menutab660: 'SM. BANDEJA',
         menutab661: 'MD. BANDEJA',
         menutab662: 'LG. BANDEJA',
         menutab663: 'Estofado de ternera',
         menutab664: 'Estofado de cabra',
         menutab665: 'Filete frito',
         menutab666: 'Filete a la pimienta',
         menutab667: 'Cerdo asado (2PCS)',
         menutab668: 'Cerdo asado (4PCS)',
         menutab669: 'Carne empanizada',
         menutab670: 'Costillas a la barbacoa',
         menutab671: 'Mariscos',
         menutab672: 'NOMBRE',
         menutab673: 'SM. BANDEJA',
         menutab674: 'MD. BANDEJA',
         menutab675: 'LG. BANDEJA',
         menutab676: 'Cazuela de mariscos',
         menutab677: 'Camarones a la parmesana',
         menutab678: 'Camarones en salsa roja',
         menutab679: 'Camarones al ajillo',
         menutab680: 'Pollo',
         menutab681: 'NOMBRE',
         menutab682: 'SM. BANDEJA',
         menutab683: 'MD. BANDEJA',
         menutab684: 'LG. BANDEJA',
         menutab685: '6 pollo',
         menutab686: 'Estofado de pollo',
         menutab687: 'Trozos de pollo',
         menutab688: 'Pollo cordón azul',
         menutab689: 'Pechuga de pollo salteada',
         menutab690: 'Pechuga de pollo empanizada',
         menutab691: 'Pechuga de pollo a la francesa',
         menutab692: 'Pechuga de pollo con verduras',
         menutab693: 'Pechuga de pollo en salsa de limón',
         menutab694: 'Pechuga de pollo rellena con camarones',
         menutab695: 'Picadera',
         menutab696: 'NOMBRE',
         menutab697: 'SM. BANDEJA',
         menutab698: 'MD. BANDEJA',
         menutab699: 'LG. BANDEJA',
         menutab6100: 'Carnes mixtas fritas',
         menutab6101: 'Pollo, res, cerdo, salami, salchicha, queso y plátanos verdes',
         menutab6102: 'Espaguetis',
         menutab6103: 'NOMBRE',
         menutab6104: 'SM. BANDEJA',
         menutab6105: 'MD. BANDEJA',
         menutab6106: 'LG. BANDEJA',
         menutab6107: 'Espaguetis con camarones',
         menutab6108: 'Espaguetis con pollo',
         menutab6109: 'Espaguetis con marisco',
         menutab6110: '"Precios sujetos a cambio sin previo aviso + IVA"',

         //Combos
         menutab7: 'Combos',
         menutab71: 'Combo #1',
         menutab72: '"1 pollo entero asado, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',
         menutab73: 'Combo #2',
         menutab74: '"Trozos de pollo, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',
         menutab75: 'Combo #3',
         menutab76: 'Deshuesado',
         menutab77: '"Trozos de pollo, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',
         menutab78: 'Combo #4',
         menutab79: '"Chuletas de cerdo, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',
         menutab710: 'Combo #5',
         menutab711: '"Pollo guisado, arroz, frijoles, maduros, ensalada y 2 Lt. refresco gratis."',
         menutab712: 'Combo #6',
         menutab713: '"Estofado de carne, arroz, frijoles, maduros, ensalada y 2 Lt. refresco gratis."',
         menutab714: 'Combo #7',
         menutab715: '"Filete a la pimienta, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',
         menutab716: 'Combo #8',
         menutab717: '"Cerdo asado, arroz, frijoles, plátanos maduros, ensalada y 2 Lt. refresco gratis."',

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

    //Contact up
    $('#homecontactbd').text(languageData[lang].homecontactbd);
    $('#pagescontactbd').text(languageData[lang].pagescontactbd);
    $('#contactus').text(languageData[lang].contactus);
    $('#contactbd').text(languageData[lang].contactbd);

    //Menu up
    $('#menuup1').text(languageData[lang].menuup1);
    $('#menuup2').text(languageData[lang].menuup2);
    $('#menuup3').text(languageData[lang].menuup3);
    $('#menuup4').text(languageData[lang].menuup4);

    //Home up
    $('#indbutonmenu').text(languageData[lang].indbutonmenu);
    $('#indfmmenu').text(languageData[lang].indfmmenu);
    $('#indmpimenu').text(languageData[lang].indmpimenu);
    $('#indtmenu').text(languageData[lang].indtmenu);
    $('#indocsmenu').text(languageData[lang].indocsmenu);
    $('#indmsg').text(languageData[lang].indmsg);
    $('#idpopbreak').text(languageData[lang].idpopbreak);
    $('#idpop').text(languageData[lang].idpop); 
    $('#idspclanc').text(languageData[lang].idspclanc);
    $('#idspc').text(languageData[lang].idspc); 
    $('#idlovedinner').text(languageData[lang].idlovedinner); 
    $('#idlove').text(languageData[lang].idlove); 

    //Contact Start -->
    $('#contactst1').text(languageData[lang].contactst1);
    $('#contactst2').text(languageData[lang].contactst2);
    $('#contactbooking').text(languageData[lang].contactbooking);
    $('#contactgeneral').text(languageData[lang].contactgeneral);
    $('#contacttechnical').text(languageData[lang].contacttechnical);
    $('#contactbootunsendmessage').text(languageData[lang].contactbootunsendmessage);
    $('#namelabel').text(languageData[lang].name);

     //Menu Start
     $('#menuup5').text(languageData[lang].menuup5);
     $('#menuup6').text(languageData[lang].menuup6);
     $('#menuup7').text(languageData[lang].menuup7);
     $('#menuup8').text(languageData[lang].menuup8);
     $('#menuup9').text(languageData[lang].menuup9);
     $('#menuup10').text(languageData[lang].menuup10);
     $('#menuup11').text(languageData[lang].menuup11);
     $('#menuup12').text(languageData[lang].menuup12);

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

//tab-content

     //Breakfast Home page
     $('#homemenutab').text(languageData[lang].homemenutab);
     $('#homemenutab1').text(languageData[lang].homemenutab1);
     $('#homemenutab2').text(languageData[lang].homemenutab2);
     $('#homemenutab3').text(languageData[lang].homemenutab3);
     $('#homemenutab4').text(languageData[lang].homemenutab4);
     $('#homemenutab5').text(languageData[lang].homemenutab5);
     $('#homemenutab6').text(languageData[lang].homemenutab6);
     $('#homemenutab7').text(languageData[lang].homemenutab7);
     $('#homemenutab8').text(languageData[lang].homemenutab8); 
     $('#iniciomenutab9').text(languageData[lang].iniciomenutab9);
     $('#homemenutab10').text(languageData[lang].homemenutab10);
     $('#homemenutab11').text(languageData[lang].homemenutab11);

    //Lunch/dinner home page
    $('#homemenutab12').text(languageData[lang].homemenutab12);
    $('#homemenutab13').text(languageData[lang].homemenutab13);
    $('#homemenutab14').text(languageData[lang].homemenutab14);
    $('#homemenutab15').text(languageData[lang].homemenutab15);
    $('#homemenutab16').text(languageData[lang].homemenutab16);
    $('#homemenutab17').text(languageData[lang].homemenutab17);
    $('#homemenutab18').text(languageData[lang].homemenutab18);
    $('#homemenutab19').text(languageData[lang].homemenutab19);
    $('#homemenutab20').text(languageData[lang].homemenutab20);
    $('#homemenutab21').text(languageData[lang].homemenutab21);
    $('#homemenutab22').text(languageData[lang].homemenutab22);
    $('#homemenutab23').text(languageData[lang].homemenutab23);
    $('#homemenutab24').text(languageData[lang].homemenutab24);
    $('#homemenutab25').text(languageData[lang].homemenutab25);

    //Drinks home page
    $('#homemenutab26').text(languageData[lang].homemenutab26);
    $('#homemenutab27').text(languageData[lang].homemenutab27);
    $('#homemenutab28').text(languageData[lang].homemenutab28);
    $('#homemenutab29').text(languageData[lang].homemenutab29);
    $('#homemenutab30').text(languageData[lang].homemenutab30);
    $('#homemenutab31').text(languageData[lang].homemenutab31);
    $('#homemenutab31a').text(languageData[lang].homemenutab31a);
    $('#homemenutab32').text(languageData[lang].homemenutab32);
    $('#homemenutab33').text(languageData[lang].homemenutab33);
    $('#homemenutab33a').text(languageData[lang].homemenutab33a);
    $('#homemenutab34').text(languageData[lang].homemenutab34);
    $('#homemenutab35').text(languageData[lang].homemenutab35);
    $('#homemenutab36').text(languageData[lang].homemenutab36);
    $('#homemenutab36a').text(languageData[lang].homemenutab36a);

     //Breakfast
     $('#menutab1').text(languageData[lang].menutab1);
     $('#menutab11').text(languageData[lang].menutab11);
     $('#menutab12').text(languageData[lang].menutab12);
     $('#menutab13').text(languageData[lang].menutab13);
     $('#menutab14').text(languageData[lang].menutab14);
     $('#menutab15').text(languageData[lang].menutab15);
     $('#menutab16').text(languageData[lang].menutab16);
     $('#menutab17').text(languageData[lang].menutab17);
     $('#menutab18').text(languageData[lang].menutab18);
     $('#menutab19').text(languageData[lang].menutab19);
     $('#menutab110').text(languageData[lang].menutab110);
     $('#menutab111').text(languageData[lang].menutab111);
     $('#menutab112').text(languageData[lang].menutab112);
     $('#menutab113').text(languageData[lang].menutab113);
     $('#menutab114').text(languageData[lang].menutab114);
     $('#menutab115').text(languageData[lang].menutab115);
     $('#menutab116').text(languageData[lang].menutab116);
     $('#menutab117').text(languageData[lang].menutab117);
     $('#menutab118').text(languageData[lang].menutab118);
     $('#menutab119').text(languageData[lang].menutab119);
     $('#menutab120').text(languageData[lang].menutab120);
     $('#menutab121').text(languageData[lang].menutab121);
     $('#menutab122').text(languageData[lang].menutab122);
     $('#menutab123').text(languageData[lang].menutab123);
     $('#menutab124').text(languageData[lang].menutab124);
     $('#menutab125').text(languageData[lang].menutab125);
     $('#menutab126').text(languageData[lang].menutab126);
     $('#menutab127').text(languageData[lang].menutab127);
     $('#menutab128').text(languageData[lang].menutab128);
     $('#menutab129').text(languageData[lang].menutab129);
     $('#menutab130').text(languageData[lang].menutab130);
     $('#menutab131').text(languageData[lang].menutab131);
     $('#menutab132').text(languageData[lang].menutab132);
     $('#menutab133').text(languageData[lang].menutab133);
     $('#menutab134').text(languageData[lang].menutab134);
     $('#menutab135').text(languageData[lang].menutab135);
     $('#menutab136').text(languageData[lang].menutab136);
     $('#menutab137').text(languageData[lang].menutab137);
     $('#menutab138').text(languageData[lang].menutab138);
     $('#menutab139').text(languageData[lang].menutab139);
     $('#menutab140').text(languageData[lang].menutab140);
     $('#menutab141').text(languageData[lang].menutab141);

     //Dinner / Lunch
     $('#menutab21').text(languageData[lang].menutab21);
     $('#menutab22').text(languageData[lang].menutab22);
     $('#menutab23').text(languageData[lang].menutab23);
     $('#menutab24').text(languageData[lang].menutab24);
     $('#menutab25').text(languageData[lang].menutab25);
     $('#menutab26').text(languageData[lang].menutab26);
     $('#menutab27').text(languageData[lang].menutab27);
     $('#menutab28').text(languageData[lang].menutab28);
     $('#menutab29').text(languageData[lang].menutab29);
     $('#menutab210').text(languageData[lang].menutab210);
     $('#menutab211').text(languageData[lang].menutab211);
     $('#menutab212').text(languageData[lang].menutab212);
     $('#menutab213').text(languageData[lang].menutab213);
     $('#menutab214').text(languageData[lang].menutab214);
     $('#menutab215').text(languageData[lang].menutab215);
     $('#menutab216').text(languageData[lang].menutab216);
     $('#menutab217').text(languageData[lang].menutab217);
     $('#menutab218').text(languageData[lang].menutab218);
     $('#menutab219').text(languageData[lang].menutab219);
     $('#menutab220').text(languageData[lang].menutab220);
     $('#menutab221').text(languageData[lang].menutab221);
     $('#menutab222').text(languageData[lang].menutab222);
     $('#menutab223').text(languageData[lang].menutab223);
     $('#menutab224').text(languageData[lang].menutab224);
     $('#menutab225').text(languageData[lang].menutab225);
     $('#menutab226').text(languageData[lang].menutab226);
     $('#menutab227').text(languageData[lang].menutab227);
     $('#menutab228').text(languageData[lang].menutab228);
     $('#menutab229').text(languageData[lang].menutab229);
     $('#menutab230').text(languageData[lang].menutab230);
     $('#menutab231').text(languageData[lang].menutab231);
     $('#menutab232').text(languageData[lang].menutab232);
     $('#menutab233').text(languageData[lang].menutab233);
     $('#menutab234').text(languageData[lang].menutab234);
     $('#menutab235').text(languageData[lang].menutab235);
     $('#menutab236').text(languageData[lang].menutab236);
     $('#menutab237').text(languageData[lang].menutab237);
     $('#menutab238').text(languageData[lang].menutab238);
     $('#menutab239').text(languageData[lang].menutab239);
     $('#menutab240').text(languageData[lang].menutab240);
     $('#menutab241').text(languageData[lang].menutab241);
     $('#menutab242').text(languageData[lang].menutab242);
     $('#menutab243').text(languageData[lang].menutab243);
     $('#menutab244').text(languageData[lang].menutab244);
     $('#menutab245').text(languageData[lang].menutab245);
     $('#menutab246').text(languageData[lang].menutab246);
     $('#menutab247').text(languageData[lang].menutab247);
     $('#menutab248').text(languageData[lang].menutab248);
     $('#menutab249').text(languageData[lang].menutab249);
     $('#menutab250').text(languageData[lang].menutab250);
     $('#menutab251').text(languageData[lang].menutab251);
     $('#menutab152').text(languageData[lang].menutab252);
     $('#menutab253').text(languageData[lang].menutab253);
     $('#menutab254').text(languageData[lang].menutab254);
     $('#menutab255').text(languageData[lang].menutab255);
     $('#menutab256').text(languageData[lang].menutab256);
     $('#menutab257').text(languageData[lang].menutab257);
     $('#menutab258').text(languageData[lang].menutab258);
     $('#menutab259').text(languageData[lang].menutab259);
     $('#menutab260').text(languageData[lang].menutab260);
     $('#menutab261').text(languageData[lang].menutab261);
     $('#menutab262').text(languageData[lang].menutab262);
     $('#menutab263').text(languageData[lang].menutab263);
     $('#menutab264').text(languageData[lang].menutab264);
     $('#menutab265').text(languageData[lang].menutab265);
     $('#menutab266').text(languageData[lang].menutab266);
     $('#menutab267').text(languageData[lang].menutab267);
     $('#menutab268').text(languageData[lang].menutab268);
     $('#menutab269').text(languageData[lang].menutab269);
     $('#menutab270').text(languageData[lang].menutab270);
     $('#menutab271').text(languageData[lang].menutab271);
     $('#menutab272').text(languageData[lang].menutab272);
     $('#menutab273').text(languageData[lang].menutab273);
     $('#menutab274').text(languageData[lang].menutab274);
     $('#menutab275').text(languageData[lang].menutab275);
     $('#menutab276').text(languageData[lang].menutab276);
     $('#menutab277').text(languageData[lang].menutab277);
     $('#menutab278').text(languageData[lang].menutab278);
     $('#menutab279').text(languageData[lang].menutab279);
     $('#menutab280').text(languageData[lang].menutab280);
     $('#menutab281').text(languageData[lang].menutab281);
     $('#menutab282').text(languageData[lang].menutab282);
     $('#menutab283').text(languageData[lang].menutab283);
     $('#menutab284').text(languageData[lang].menutab284);
     $('#menutab285').text(languageData[lang].menutab285);
     $('#menutab286').text(languageData[lang].menutab286);
     $('#menutab287').text(languageData[lang].menutab287);
     $('#menutab288').text(languageData[lang].menutab288);
     $('#menutab289').text(languageData[lang].menutab289);
     $('#menutab290').text(languageData[lang].menutab290);
     $('#menutab291').text(languageData[lang].menutab291);
     $('#menutab292').text(languageData[lang].menutab292);
     $('#menutab293').text(languageData[lang].menutab293);

     // Lunch / Dinner
     $('#menutab3').text(languageData[lang].menutab3);
     $('#menutab31').text(languageData[lang].menutab31);
     $('#menutab32').text(languageData[lang].menutab32);
     $('#menutab33').text(languageData[lang].menutab33);
     $('#menutab34').text(languageData[lang].menutab34);
     $('#menutab35').text(languageData[lang].menutab35);
     $('#menutab36').text(languageData[lang].menutab36);
     $('#menutab37').text(languageData[lang].menutab37);
     $('#menutab38').text(languageData[lang].menutab38);
     $('#menutab39').text(languageData[lang].menutab39);
     $('#menutab310').text(languageData[lang].menutab310);
     $('#menutab311').text(languageData[lang].menutab311);
     $('#menutab312').text(languageData[lang].menutab312);
     $('#menutab313').text(languageData[lang].menutab313);
     $('#menutab314').text(languageData[lang].menutab314);
     $('#menutab315').text(languageData[lang].menutab315);
     $('#menutab316').text(languageData[lang].menutab316);
     $('#menutab317').text(languageData[lang].menutab317);
     $('#menutab318').text(languageData[lang].menutab318);
     $('#menutab319').text(languageData[lang].menutab319);
     $('#menutab320').text(languageData[lang].menutab320);
     $('#menutab321').text(languageData[lang].menutab321);
     $('#menutab322').text(languageData[lang].menutab322);
     $('#menutab323').text(languageData[lang].menutab323);
     $('#menutab324').text(languageData[lang].menutab324);
     $('#menutab325').text(languageData[lang].menutab325);
     $('#menutab326').text(languageData[lang].menutab326);
     $('#menutab327').text(languageData[lang].menutab327);
     $('#menutab328').text(languageData[lang].menutab328);
     $('#menutab329').text(languageData[lang].menutab329);
     $('#menutab330').text(languageData[lang].menutab330);
     $('#menutab331').text(languageData[lang].menutab331);
     $('#menutab332').text(languageData[lang].menutab332);
     $('#menutab333').text(languageData[lang].menutab333);
     $('#menutab334').text(languageData[lang].menutab334);
     $('#menutab335').text(languageData[lang].menutab335);
     $('#menutab336').text(languageData[lang].menutab336);
     $('#menutab337').text(languageData[lang].menutab337);
     $('#menutab338').text(languageData[lang].menutab338);
     $('#menutab339').text(languageData[lang].menutab339);
     $('#menutab340').text(languageData[lang].menutab340);
     $('#menutab341').text(languageData[lang].menutab341);
     $('#menutab342').text(languageData[lang].menutab342);
     $('#menutab343').text(languageData[lang].menutab343);
     $('#menutab344').text(languageData[lang].menutab344);
     $('#menutab345').text(languageData[lang].menutab345);
     $('#menutab346').text(languageData[lang].menutab346);
     $('#menutab347').text(languageData[lang].menutab347);
     $('#menutab348').text(languageData[lang].menutab348);
     $('#menutab349').text(languageData[lang].menutab349);
     $('#menutab350').text(languageData[lang].menutab350);
     $('#menutab351').text(languageData[lang].menutab351);
     $('#menutab352').text(languageData[lang].menutab352);
     $('#menutab353').text(languageData[lang].menutab353);
     $('#menutab354').text(languageData[lang].menutab354);
     $('#menutab355').text(languageData[lang].menutab355);
     $('#menutab356').text(languageData[lang].menutab356);
     $('#menutab357').text(languageData[lang].menutab357);
     $('#menutab358').text(languageData[lang].menutab358);
     $('#menutab359').text(languageData[lang].menutab359);
     $('#menutab360').text(languageData[lang].menutab360);
     $('#menutab361').text(languageData[lang].menutab361);
     $('#menutab362').text(languageData[lang].menutab362);
     $('#menutab363').text(languageData[lang].menutab363);
     $('#menutab364').text(languageData[lang].menutab364);
     $('#menutab365').text(languageData[lang].menutab365);
     $('#menutab366').text(languageData[lang].menutab366);
     $('#menutab367').text(languageData[lang].menutab367);
     $('#menutab368').text(languageData[lang].menutab368);
     $('#menutab369').text(languageData[lang].menutab369);
     $('#menutab370').text(languageData[lang].menutab370);
     $('#menutab371').text(languageData[lang].menutab371);
     $('#menutab372').text(languageData[lang].menutab372);
     $('#menutab373').text(languageData[lang].menutab373);
     $('#menutab374').text(languageData[lang].menutab374);
     $('#menutab375').text(languageData[lang].menutab375);
     $('#menutab376').text(languageData[lang].menutab376);
     $('#menutab377').text(languageData[lang].menutab377);
     $('#menutab378').text(languageData[lang].menutab378);
     $('#menutab379').text(languageData[lang].menutab379);
     $('#menutab380').text(languageData[lang].menutab380);
     $('#menutab381').text(languageData[lang].menutab381);
     $('#menutab382').text(languageData[lang].menutab382);
     $('#menutab383').text(languageData[lang].menutab383);
     $('#menutab384').text(languageData[lang].menutab384);
     $('#menutab385').text(languageData[lang].menutab385);
     $('#menutab386').text(languageData[lang].menutab386);
     $('#menutab387').text(languageData[lang].menutab387);
     $('#menutab388').text(languageData[lang].menutab388);
     $('#menutab389').text(languageData[lang].menutab389);
     $('#menutab390').text(languageData[lang].menutab390);
     $('#menutab391').text(languageData[lang].menutab391);
     $('#menutab392').text(languageData[lang].menutab392);
     $('#menutab393').text(languageData[lang].menutab393);
     $('#menutab394').text(languageData[lang].menutab394);
     $('#menutab395').text(languageData[lang].menutab395);
     $('#menutab396').text(languageData[lang].menutab396);
     $('#menutab397').text(languageData[lang].menutab397);
     $('#menutab398').text(languageData[lang].menutab398);
     $('#menutab399').text(languageData[lang].menutab399);
     $('#menutab3100').text(languageData[lang].menutab3100);
     $('#menutab3101').text(languageData[lang].menutab3101);
     $('#menutab3102').text(languageData[lang].menutab3102);
     $('#menutab3103').text(languageData[lang].menutab3103);
     $('#menutab3104').text(languageData[lang].menutab3104);
     $('#menutab3105').text(languageData[lang].menutab3105);
     $('#menutab3106').text(languageData[lang].menutab3106);
     $('#menutab3107').text(languageData[lang].menutab3107);

      //Desserts
      $('#menutab4').text(languageData[lang].menutab4);
      $('#menutab41').text(languageData[lang].menutab41);
      $('#menutab42').text(languageData[lang].menutab42);
      $('#menutab43').text(languageData[lang].menutab43);
      $('#menutab44').text(languageData[lang].menutab44);
      $('#menutab45').text(languageData[lang].menutab45);
      $('#menutab46').text(languageData[lang].menutab46);
      $('#menutab47').text(languageData[lang].menutab47);

      //Drinks
      $('#menutab5').text(languageData[lang].menutab5);
      $('#menutab51').text(languageData[lang].menutab51);
      $('#menutab52').text(languageData[lang].menutab52);
      $('#menutab53').text(languageData[lang].menutab53);
      $('#menutab54').text(languageData[lang].menutab54);
      $('#menutab55').text(languageData[lang].menutab55);
      $('#menutab56').text(languageData[lang].menutab56);
      $('#menutab57').text(languageData[lang].menutab57);
      $('#menutab58').text(languageData[lang].menutab58);
      $('#menutab59').text(languageData[lang].menutab59);
      $('#menutab510').text(languageData[lang].menutab510);
      $('#menutab511').text(languageData[lang].menutab511);
      $('#menutab512').text(languageData[lang].menutab512);
      $('#menutab513').text(languageData[lang].menutab513);
      $('#menutab514').text(languageData[lang].menutab514);
      $('#menutab515').text(languageData[lang].menutab515);
      $('#menutab516').text(languageData[lang].menutab516);
      $('#menutab517').text(languageData[lang].menutab517);
      $('#menutab518').text(languageData[lang].menutab518);
      $('#menutab519').text(languageData[lang].menutab519);
      $('#menutab520').text(languageData[lang].menutab520);
      $('#menutab521').text(languageData[lang].menutab521);
      $('#menutab522').text(languageData[lang].menutab522);
      $('#menutab523').text(languageData[lang].menutab523);
      $('#menutab524').text(languageData[lang].menutab524);
      $('#menutab525').text(languageData[lang].menutab525);
      $('#menutab526').text(languageData[lang].menutab526);
      $('#menutab527').text(languageData[lang].menutab527);
      $('#menutab528').text(languageData[lang].menutab528);
      $('#menutab529').text(languageData[lang].menutab529);
      $('#menutab530').text(languageData[lang].menutab530);
      $('#menutab531').text(languageData[lang].menutab531);
      $('#menutab532').text(languageData[lang].menutab532);
      $('#menutab533').text(languageData[lang].menutab533);
      $('#menutab534').text(languageData[lang].menutab534);
      $('#menutab535').text(languageData[lang].menutab535);
      $('#menutab536').text(languageData[lang].menutab536);
      $('#menutab537').text(languageData[lang].menutab537);

    //Catering
     $('#menutab6').text(languageData[lang].menutab6);
     $('#menutab61').text(languageData[lang].menutab61);
     $('#menutab62').text(languageData[lang].menutab62);
     $('#menutab63').text(languageData[lang].menutab63);
     $('#menutab64').text(languageData[lang].menutab64);
     $('#menutab65').text(languageData[lang].menutab65);
     $('#menutab66').text(languageData[lang].menutab66);
     $('#menutab67').text(languageData[lang].menutab67);
     $('#menutab68').text(languageData[lang].menutab68);
     $('#menutab69').text(languageData[lang].menutab69);
     $('#menutab610').text(languageData[lang].menutab610);
     $('#menutab611').text(languageData[lang].menutab611);
     $('#menutab612').text(languageData[lang].menutab612);
     $('#menutab613').text(languageData[lang].menutab613);
     $('#menutab614').text(languageData[lang].menutab614);
     $('#menutab615').text(languageData[lang].menutab615);
     $('#menutab616').text(languageData[lang].menutab616);
     $('#menutab617').text(languageData[lang].menutab617);
     $('#menutab618').text(languageData[lang].menutab618);
     $('#menutab619').text(languageData[lang].menutab619);
     $('#menutab620').text(languageData[lang].menutab620);
     $('#menutab621').text(languageData[lang].menutab621);
     $('#menutab622').text(languageData[lang].menutab622);
     $('#menutab623').text(languageData[lang].menutab623);
     $('#menutab624').text(languageData[lang].menutab624);
     $('#menutab625').text(languageData[lang].menutab625);
     $('#menutab626').text(languageData[lang].menutab626);
     $('#menutab627').text(languageData[lang].menutab627);
     $('#menutab628').text(languageData[lang].menutab628);
     $('#menutab629').text(languageData[lang].menutab629);
     $('#menutab630').text(languageData[lang].menutab630);
     $('#menutab631').text(languageData[lang].menutab631);
     $('#menutab632').text(languageData[lang].menutab632);
     $('#menutab633').text(languageData[lang].menutab633);
     $('#menutab634').text(languageData[lang].menutab634);
     $('#menutab635').text(languageData[lang].menutab635);
     $('#menutab636').text(languageData[lang].menutab636);
     $('#menutab637').text(languageData[lang].menutab637);
     $('#menutab638').text(languageData[lang].menutab638);
     $('#menutab639').text(languageData[lang].menutab639);
     $('#menutab640').text(languageData[lang].menutab640);
     $('#menutab641').text(languageData[lang].menutab641);
     $('#menutab642').text(languageData[lang].menutab642);
     $('#menutab643').text(languageData[lang].menutab643);
     $('#menutab644').text(languageData[lang].menutab644);
     $('#menutab645').text(languageData[lang].menutab645);
     $('#menutab646').text(languageData[lang].menutab646);
     $('#menutab647').text(languageData[lang].menutab647);
     $('#menutab648').text(languageData[lang].menutab648);
     $('#menutab649').text(languageData[lang].menutab649);
     $('#menutab650').text(languageData[lang].menutab650);
     $('#menutab651').text(languageData[lang].menutab651);
     $('#menutab652').text(languageData[lang].menutab652);
     $('#menutab653').text(languageData[lang].menutab653);
     $('#menutab654').text(languageData[lang].menutab654);
     $('#menutab655').text(languageData[lang].menutab655);
     $('#menutab656').text(languageData[lang].menutab656);
     $('#menutab657').text(languageData[lang].menutab657);
     $('#menutab658').text(languageData[lang].menutab658);
     $('#menutab659').text(languageData[lang].menutab659);
     $('#menutab660').text(languageData[lang].menutab660);
     $('#menutab661').text(languageData[lang].menutab661);
     $('#menutab662').text(languageData[lang].menutab662);
     $('#menutab663').text(languageData[lang].menutab663);
     $('#menutab664').text(languageData[lang].menutab664);
     $('#menutab665').text(languageData[lang].menutab665);
     $('#menutab666').text(languageData[lang].menutab666);
     $('#menutab667').text(languageData[lang].menutab667);
     $('#menutab668').text(languageData[lang].menutab668);
     $('#menutab669').text(languageData[lang].menutab669);
     $('#menutab670').text(languageData[lang].menutab670);
     $('#menutab671').text(languageData[lang].menutab671);
     $('#menutab672').text(languageData[lang].menutab672);
     $('#menutab673').text(languageData[lang].menutab673);
     $('#menutab674').text(languageData[lang].menutab674);
     $('#menutab675').text(languageData[lang].menutab675);
     $('#menutab676').text(languageData[lang].menutab676);
     $('#menutab677').text(languageData[lang].menutab677);
     $('#menutab678').text(languageData[lang].menutab678);
     $('#menutab679').text(languageData[lang].menutab679);
     $('#menutab680').text(languageData[lang].menutab680);
     $('#menutab681').text(languageData[lang].menutab681);
     $('#menutab682').text(languageData[lang].menutab682);
     $('#menutab683').text(languageData[lang].menutab683);
     $('#menutab684').text(languageData[lang].menutab684);
     $('#menutab685').text(languageData[lang].menutab685);
     $('#menutab686').text(languageData[lang].menutab686);
     $('#menutab687').text(languageData[lang].menutab687);
     $('#menutab688').text(languageData[lang].menutab688);
     $('#menutab689').text(languageData[lang].menutab689);
     $('#menutab690').text(languageData[lang].menutab690);
     $('#menutab691').text(languageData[lang].menutab691);
     $('#menutab692').text(languageData[lang].menutab692);
     $('#menutab693').text(languageData[lang].menutab693);
     $('#menutab694').text(languageData[lang].menutab694);
     $('#menutab695').text(languageData[lang].menutab695);
     $('#menutab696').text(languageData[lang].menutab696);
     $('#menutab697').text(languageData[lang].menutab697);
     $('#menutab698').text(languageData[lang].menutab698);
     $('#menutab699').text(languageData[lang].menutab699);
     $('#menutab6100').text(languageData[lang].menutab6100);
     $('#menutab6101').text(languageData[lang].menutab6101);
     $('#menutab6102').text(languageData[lang].menutab6102);
     $('#menutab6103').text(languageData[lang].menutab6103);
     $('#menutab6104').text(languageData[lang].menutab6104);
     $('#menutab6105').text(languageData[lang].menutab6105);
     $('#menutab6106').text(languageData[lang].menutab6106);
     $('#menutab6107').text(languageData[lang].menutab6107);
     $('#menutab6108').text(languageData[lang].menutab6108);
     $('#menutab6109').text(languageData[lang].menutab6109);
     $('#menutab6110').text(languageData[lang].menutab6110);


     //Combos
     $('#menutab7').text(languageData[lang].menutab7);
     $('#menutab71').text(languageData[lang].menutab71);
     $('#menutab72').text(languageData[lang].menutab72);
     $('#menutab73').text(languageData[lang].menutab73);
     $('#menutab74').text(languageData[lang].menutab74);
     $('#menutab75').text(languageData[lang].menutab75);
     $('#menutab76').text(languageData[lang].menutab76);
     $('#menutab77').text(languageData[lang].menutab77);
     $('#menutab78').text(languageData[lang].menutab78);
     $('#menutab79').text(languageData[lang].menutab79);
     $('#menutab710').text(languageData[lang].menutab710);
     $('#menutab711').text(languageData[lang].menutab711);
     $('#menutab712').text(languageData[lang].menutab712);
     $('#menutab713').text(languageData[lang].menutab713);
     $('#menutab714').text(languageData[lang].menutab714);
     $('#menutab715').text(languageData[lang].menutab715);
     $('#menutab716').text(languageData[lang].menutab716);
     $('#menutab717').text(languageData[lang].menutab717);  


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