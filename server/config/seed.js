/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var ListedItem = require('../api/ListedItem/ListedItem.model');
var Category = require('../api/category/category.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

ListedItem.find({}).remove(function() {
  ListedItem.create({
    name: '***Size 9 Boots***',
    description: 'I am selling a pair of size 9 boots, picture is attached.  They are too small for me, and sending them back would not be profitable.  I have never worn them, they are brand new (ordered from Nordstrom rack).',
    price: 30,
    imagePath: 'assets/images/boots.jpg',
    category: 'Clothing',
    tags: ['new', 'stylish', 'size 9', 'boots', 'shoes'],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Graphing Calculator',
    description: 'TI-84 Plus Edition. New batteries, minor scuffs and scratches, fair condition.',
    price: 50,
    imagePath: "assets/images/calculator.jpg",
    category: 'Electronics',
    tags: ['used', 'calculator'],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Futon',
    description: 'A classic metal-framed futon with a fantastic mattress. It\'s satisfied many a butt over the years',
    price: 35,
    imagePath: "assets/images/futon.jpg",
    category: 'Furniture',
    tags: ['used', 'black', 'good'],
    negotiable: false,
    sellerInfo: {
      first: 'Jacob',
      last: 'Opdahl',
      email: 'opdah023@morris.umn.edu'
    }
  }, {
    name: 'GoPro Hero 3+ With Accessories',
    description: 'I have a GoPro Hero 3+ for sale! Along with the GoPro I will be selling a nine piece accessory set including a selfie stick, telescoping handheld monopod, waterproof frame, chest strap, head strap, chest strap, protective frame, and some other frames. I will also be selling a 32GB micro SD card to use with the GoPro! I have the original GoPro packaging as well with all of the camera information. I am asking $230.00 for the entire bundle or best offer! Feel free to contact me with any offers or questions.',
    price: 230,
    imagePath: "assets/images/gopro.jpg",
    category: 'Electronics',
    tags: ['like new', 'camera', 'accessories', 'gopro', 'waterproof', 'selfie stick', 'straps', 'frames', 'sd card'],
    negotiable: true,
    sellerInfo: {
      first: 'Kristin',
      last: 'Rachor',
      email: 'racho008@morris.umn.edu'
    }
  }, {
    name: 'You\'ll Love This Seat!',
    description: 'A lovely loveseat perfect for the lovely college homes of morris. $10 off if you pick it up!',
    price: 30,
    imagePath: "assets/images/loveseat.jpg",
    category: 'Furniture',
    tags: ['used', 'gray', 'couch', 'lovely'],
    negotiable: false,
    sellerInfo: {
      first: 'Andy',
      last: 'Peterson',
      email: 'pete9443@morris.umn.edu'
    }
  }, {
    name: 'love seat',
    description: 'cheap furniture for you\'re new house',
    price: 29,
    imagePath: "assets/images/loveseat2.jpg",
    category: 'Furniture',
    tags: [],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Bed Mattress',
    description: 'Got a mattress for sale, selling it cheap cuz it needs to be cleaned. Twin.',
    price: 20,
    imagePath: "assets/images/mattress.jpg",
    category: 'Furniture',
    tags: ['twin', 'bed'],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'MCAT Study Materials',
    description: 'I am selling my complete MCAT prep material for the new 2015 MCAT.  I am asking for $100, which is less than half of what it costs to buy it new, and it is in perfect condition.  Contact me if you are interested!',
    price: 100,
    imagePath: "assets/images/mcat.jpg",
    category: 'Academic',
    tags: ['MCAT', 'new', 'study', 'books'],
    negotiable: false,
    sellerInfo: {
      first: 'Ben',
      last: 'Bitdiddle',
      email: 'bitdi420@morris.umn.edu'
    }
  }, {
    name: 'Millenium Falcon Guitar!!!!!!!!!!!!!!!!',
    description: 'You\'ve never heard of the Millenium Guitar? It\'s the Guitar that made the Kessel run in less than twelve parsecs.',
    price: 250,
    imagePath: "assets/images/Millennium-Falcon-Guitar-3.jpg",
    category: 'Hobbies',
    tags: ['star', 'wars', 'star wars', 'Kessel run', 'parsecs'],
    negotiable: false,
    sellerInfo: {
      first: 'Han',
      last: 'Solo',
      email: 'solox007@morris.umn.edu'
    }
  }, {
    name: 'Dank ottoman 4 sale',
    description: 'Sweet blue ottoman for sale, legs not included.',
    price: 10,
    imagePath: "assets/images/ottoman.jpg",
    category: 'Furniture',
    tags: ['ottoman', 'blue', 'used', 'legs'],
    negotiable: true,
    sellerInfo: {
      first: 'Joe',
      last: 'Schmoe',
      email: 'schmo555@morris.umn.edu'
    }
  }, {
    name: 'Playstation Vita',
    description: 'I\'m selling my PS Vita to a fellow gamer. It\'s battery life is killer and works amazingly well, I just don\'t want it anymore. Asking for $100 or best offer for the Vita, it\'s charger, and an 8 GB memory card! Email me if you want to game on the go! ',
    price: 100,
    imagePath: "assets/images/psvita.jpg",
    category: 'Games',
    tags: ['playstation', 'bita', 'vita', 'whoops'],
    negotiable: true,
    sellerInfo: {
      first: 'Bill',
      last: 'Nye',
      email: 'scienceGuy@morris.umn.edu'
    }
  }, {
    name: 'Pokemon Soulsilver DS',
    description: 'Take this hard to find game of Pokemon with all the shiny pokemons on it, for a cheap cheap price.',
    price: 60,
    imagePath: "assets/images/soulsilver.jpg",
    category: 'Games',
    tags: ['legit', 'DS', 'not hacked', 'pokemon', 'lugia', 'shinies', '493'],
    negotiable: false,
    sellerInfo: {
      first: 'Ash',
      last: 'Ketchum',
      email: 'ketch411@morris.umn.edu'
    }
  }, {
    name: 'Xbox 360',
    description: 'Lots of both 360 and og xbox games. I think I have 3 or 4 controllers. Games, original console (with cables), and controllers for sale around 200 dollars/ obo. Let me know if you are interested and want pics of all the games, console etc. ',
    price: 200,
    imagePath: "assets/images/xbox.jpg",
    category: 'Games',
    tags: [],
    negotiable: true,
    sellerInfo: {
      first: 'Gandalf',
      last: 'da Grey',
      email: 'stormcrow@morris.umn.edu'
    }
  }, {
    name: 'Piper Kerman Tickets',
    description: 'For the talk! Even though it\'s free.',
    price: 5,
    imagePath: "assets/images/placeholder.png",
    category: 'Tickets',
    tags: ['suckers'],
    negotiable: false,
    sellerInfo: {
      first: 'Scalper',
      last: 'IsDumd',
      email: 'scalper@morris.umn.edu'
    }
  }, {
    name: '4X4 Truck for sale',
    description: 'Sellin\' my truck, new condition, pics on request.',
    price: 7000,
    imagePath: "assets/images/placeholder.png",
    category: 'Miscellaneous',
    tags: ['truck', 'fast', 'new', 'red', 'big'],
    negotiable: true,
    sellerInfo: {
      first: 'Dude',
      last: 'Manrod',
      email: 'bigma123@morris.umn.edu'
    }
  }, {
    name: 'MINI FRIDGE',
    description: 'Works! Only 7 years old',
    price: 25,
    imagePath: "assets/images/minifridge.jpg",
    category: 'Appliances',
    tags: ['small', 'refridgerator'],
    negotiable: true,
    sellerInfo: {
      first: 'Scalper',
      last: 'IsDumd',
      email: 'scalper@morris.umn.edu'
    }
  }, {
    name: 'Selling 2 sets of knitting needles',
    description: '.25 inch in gold and purple',
    price: 6,
    imagePath: "assets/images/needles.jpg",
    category: 'Hobbies',
    tags: ['needle', 'fun'],
    negotiable: false,
    sellerInfo: {
      first: 'Kristin',
      last: 'Rachor',
      email: 'racho008@morris.umn.edu'
    }
  }, {
    name: 'BRAND NEW flatscreen for sale',
    description: 'Has only been used once, got a bigger one. 40 inch',
    price: 300,
    imagePath: "assets/images/flatscreen.jpg",
    category: 'Electronics',
    tags: ['TV'],
    negotiable: true,
    sellerInfo: {
      first: 'Mike',
      last: 'Trout',
      email: 'trouty@morris.umn.edu'
    }
  }, {
    name: 'FUR Mittens and hat',
    description: 'Real fur. Perfect for keeping you warm on campus',
    price: 150,
    imagePath: "assets/images/mits.jpg",
    category: 'Clothing',
    tags: ['mits', 'furry'],
    negotiable: false,
    sellerInfo: {
      first: 'Jerry',
      last: 'Lemmoid',
      email: 'lemmoid@morris.umn.edu'
    }
  }, {
    name: 'Victoria Secret PINK sweatshirt',
    description: 'Size medium',
    price: 15,
    imagePath: "assets/images/pink.jpg",
    category: 'Clothing',
    tags: ['VS', 'shirt'],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Keurig',
    description: 'Great condition',
    price: 60,
    imagePath: "assets/images/keurig.jpg",
    category: 'Appliances',
    tags: ['coffee'],
    negotiable: false,
    sellerInfo: {
      first: 'Dude',
      last: 'Manrod',
      email: 'bigma123@morris.umn.edu'
    }
  }, {
    name: 'Samsung Captivate Glide',
    description: 'Works, 5 years old',
    price: 30,
    imagePath: "assets/images/phone.jpg",
    category: 'Electronics',
    tags: ['phone'],
    negotiable: false,
    sellerInfo: {
      first: 'Andy',
      last: 'Peterson',
      email: 'pete9443@morris.umn.edu'
    }
  }, {
    name: 'Antique Mug',
    description: 'My great great great great grandmother made this',
    price: 6000,
    imagePath: "assets/images/mug.jpg",
    category: 'Miscellaneous',
    tags: ['coffee'],
    negotiable: false,
    sellerInfo: {
      first: 'Jacob',
      last: 'Opdahl',
      email: 'opdah023@morris.umn.edu'
    }
  }, {
    name: 'Microsoft office',
    description: 'The full package',
    price: 60,
    imagePath: "assets/images/office.jpg",
    category: 'Academic',
    tags: ['old'],
    negotiable: false,
    sellerInfo: {
      first: 'Andy',
      last: 'Peterson',
      email: 'pete9443@morris.umn.edu'
    }
  }, {
    name: 'The Avengers - DVD',
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
    price: 2,
    imagePath: "assets/images/placeholder.png",
    category: 'Electronics',
    tags: ['new', 'movie', 'avengers'],
    negotiable: true,
    sellerInfo: {
      first: 'Andy',
      last: 'Peterson',
      email: 'pete9443@morris.umn.edu'
    }
  }, {
    name: '3 Kittens need a home FREE',
    description: 'Born on April 1, these little kittens are little bundles of fur and love. These are just piles of fur, don\'t be fooled by the title.',
    price: 0,
    imagePath: "assets/images/3Kittens.jpg",
    category: 'Miscellaneous',
    tags: ['fresh', 'cute', 'cats', 'organic'],
    negotiable: false,
    sellerInfo: {
      first: 'Jeremy',
      last: 'McMeowers',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Bodybag - used',
    description: 'See title.',
    price: 20,
    imagePath: "assets/images/trashBag.jpg",
    category: 'Hobbies',
    tags: ['bag', 'trash'],
    negotiable: true,
    sellerInfo: {
      first: 'Andy',
      last: 'Peterson',
      email: 'pete9443@morris.umn.edu'
    }
  }, {
    name: 'Pearl Earrings',
    description: 'Never been worn, fake pearls. Bought from Target.',
    price: 3,
    imagePath: "assets/images/earring.jpg",
    category: 'Clothing',
    tags: ['fake', 'ear'],
    negotiable: false,
    sellerInfo: {
      first: 'Kristin',
      last: 'Rachor',
      email: 'racho008@morris.umn.edu'
    }
  }, {
    name: 'Printer Paper',
    description: 'My printer broke, and I have a lot of perfectly fine paper. 700 sheets.',
    price: 5,
    imagePath: "assets/images/paper.jpg",
    category: 'Academic',
    tags: ['good'],
    negotiable: true,
    sellerInfo: {
      first: 'Jacob',
      last: 'Opdahl',
      email: 'opdah023@morris.umn.edu'
    }
  }, {
    name: 'Cards Against Humanity Expansion Pack',
    description: 'The Christmas Edition from 2013 (I think). Only 3 cards are missing that I know of. Potential stains.',
    price: 10,
    imagePath: "assets/images/placeholder.png",
    category: 'Games',
    tags: ['terrible', 'not funny', 'stupid'],
    negotiable: true,
    sellerInfo: {
      first: 'Jeremy',
      last: 'Eberhardt',
      email: 'eberh060@morris.umn.edu'
    }
  }, {
    name: 'Parking Pass',
    description: 'Parking pass for Science building. Year long.',
    price: 82,
    imagePath: "assets/images/parkingPass.jpg",
    category: 'Tickets',
    tags: ['permit', 'parking', 'car', 'park', 'lot'],
    negotiable: true,
    sellerInfo: {
      first: 'Kristin',
      last: 'Rachor',
      email: 'racho008@morris.umn.edu'
    }
  }, {
    name: 'Ouija board',
    description: 'Good for connecting with loved ones and hated ones that are dead. Also good for accepting blood oaths.',
    price: 666,
    imagePath: "assets/images/ouija.jpg",
    category: 'Games',
    tags: ['dead', 'scary', 'satanic', 'ritual', 'blood'],
    negotiable: false,
    sellerInfo: {
      first: 'Lucy',
      last: 'Fur',
      email: 'furxx666@morris.umn.edu'
    }
  });
});

Category.find({}).remove(function() {
  Category.create({
    name: 'Clothing',
    description: 'Do you wear it? Then it\'s clothing.'
  }, {
    name: 'Electronics',
    description: 'For any electrical devices you use other than video games and their systems.'
  }, {
    name: 'Games',
    description: 'For video games and tabletop games.'
  }, {
    name: 'Tickets',
    description: 'For tickets to school related or non-school related events.'
  }, {
    name: 'Furniture',
    description: 'For regular furniture as well as mattresses and other bedding items.'
  }, {
    name: 'Academic',
    description: 'For school supplies, parking passes, and other academic materials.'
  }, {
    name: 'Hobbies',
    description: 'For any items that may be related to a hobby. For example: music equipment, collectibles, trading cards, etc.'
  }, {
    name: 'Appliances',
    description: 'For refrigerators, microwaves, or any other appliance.'
  }, {
    name: 'Miscellaneous',
    description: 'For any items that don\'t fit anywhere else.'
  });
});
