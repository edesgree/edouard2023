import { nanoid } from 'nanoid';
const data = {
  common: {
    myName: 'Edouard Desgrée',
    contactEmail: 'edouard@desgree.com',
    mainTitle: { fr: 'bonjour', en: 'hello' },

    skillsTitle: {
      fr: `Connaissances`,
      en: `Skills`
    },
    aboutTitle: {
      fr: `À propos`,
      en: `About me`
    },
    workTitle: {
      fr: `Portfolio`,
      en: `Work`
    },
    workSubTitle: {
      fr: `Une collection de mes derniers projets`,
      en: `A collection of my recent work`
    },
    labTitle: {
      fr: `Labo`,
      en: `Lab`
    },
    labSubTitle: {
      fr: `Des petits projets perso en React et Vanilla JS`,
      en: `Some small personal projects in React and Vanilla JS`
    },
    workMyworkTitle: {
      fr: `Mon travail`,
      en: `My contribution`
    },
    workTechUsedTitle: {
      fr: `Technologies utilisées`,
      en: `Techs`
    },
    labelBack: {
      fr: `Retour`,
      en: `Back`
    },
    labelUp: {
      fr: `Haut`,
      en: `Up`
    },
    labelSeeWork: {
      fr: `Mon portfolio`,
      en: `See my work`
    },
    contactTitle: {
      fr: `Contactez-moi 👋\n⬇️`,
      en: `Say Hi 👋`
    },
    companies: [
      {
        name: 'Absolunet',
        id: 'abso',
        url: 'http://www.absolunet.com'
      },
      {
        name: 'Version 10',
        id: 'version10',
        url: 'http://www.version10.ca'
      },
      {
        name: 'Comptoirs',
        id: 'comptoirs',
        url: 'https://www.comptoirs.co/'
      }
    ]
  },
  home: {
    introTxt: {
      fr: `Je suis développeur front-end avec une expertise en UX/UI. Je tiens à trouver des solutions simples et modernes en utilisant les meilleures pratiques et les dernières tendances de l'industrie. Je suis curieux et aime apprendre en permanence que ce soit en web ou pour mes interêts personnel.`,
      en: `I am a frontend developer with a strong background in UX/UI. I try to make things simple and modern using best practices and newest industry trends. I am always looking for new things to learn whether it be in web development or my personal interests.  `
    },
    introTitle: {
      fr: `Salut 👋,\n moi c'est Edouard.`,
      en: `Hi 👋,\n I'm Edouard.`
    },
    introSubtitle: {
      fr: `Développeur Front-end | Designer web`,
      en: `Front-end developer | web designer`
    },
    services: [
      {
        title: {
          fr: `Développement Frontend `,
          en: `Frontend development`
        },
        text: {
          fr: `Je conçois des expériences intéractives en utilisant les derniers outils et standards web`,
          en: `I implement visuals and interactive elements using latest web tech and trends`
        },
        icon: 'ItemSage'
      },
      {
        title: {
          fr: `Design UI/UX`,
          en: `UI/UX Design`
        },
        text: {
          fr: `Je crée mes propres solutions design pour afficher des interfaces visuelles riches et cohérentes.`,
          en: `I focus on designing user-friendly interfaces using my creativity and technical skills`
        },
        icon: 'ItemSage'
      },
      {
        title: {
          fr: `Travail en équipe`,
          en: `Team player`
        },
        text: {
          fr: `Je suis un joueur d'équipe et mes connaissances multidisciplinaires m'aide à collaborer efficacement avec les différents métiers.`,
          en: `My experience in code and design help me collaborate efficiently whitin my team`
        },
        icon: 'ItemSage'
      }
    ]
  },
  menu: [
    {
      id: nanoid(),
      name: {
        fr: `Portfolio`,
        en: `Work`
      },
      slug: 'work'
    },
    {
      id: nanoid(),
      name: {
        fr: `Labo`,
        en: `Lab`
      },
      slug: 'lab'
    },
    {
      id: nanoid(),
      name: {
        fr: `À propos`,
        en: `About`
      },
      slug: 'about'
    },
    {
      id: nanoid(),
      name: {
        fr: `Contact`,
        en: `Contact`
      },
      slug: 'contact'
    }
  ],
  social: [
    { id: nanoid(), name: 'Github', url: 'https://github.com/edesgree' },
    {
      id: nanoid(),
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/edouarddesgree/'
    }
  ],
  work: [
    {
      id: nanoid(),
      name: 'Kanuk',
      slug: 'kanuk',
      subtitle: 'Magento 2 ecommerce',
      date: '2020',
      description: {
        fr: `
        <p>Kanuk est un fabriquant de manteaux d'hiver basé depuis plus de 50 ans à Montréal.</p>
        <p>J'ai participé avec mon équipe à la création complète du site sous Magento2. </p>
        `,
        en: `
        <p>Kanuk is a manufacturer of winter coats based for over 50 years in Montreal.</p>
        <p>I participated with my team in the complete creation of the site using Magento2.</p>
        `
      },
      mywork: {
        fr: `
        <p>Mon rôle était d'intégrer les différentes templates sur Magento en suivant les designs ainsi que les différents éléments interactifs (panier d'achat, page produit, image viewer...).</p>
        <p>J'ai aussi travaillé en UX/UI et décliné certaines sections en suivant la charte graphique (avec Sketch app).</p>
      `,
        en: `
        <p>My role was to integrate the different templates in Magento by following the designs as well as the different interactive elements (shopping cart, product page, category page, image viewer...).
        </p>
        <p>I also worked did some UX/UI creating various pages based on the art direction (using Sketch app).</p>
        `
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: 'cover-kanuk.webp',
        screens: ['kanuk-home.webp', 'kanuk-cat.webp', 'kanuk-product.webp']
      },
      companyId: 'abso',
      url: 'https://www.kanuk.com/fr_ca/'
    },
    {
      id: nanoid(),
      name: 'Bench',
      slug: 'bench',
      subtitle: 'Magento 2 ecommerce',
      date: '2020',
      description: {
        fr: `
        <p>Bench est une marque britannique de vêtements vendue dans le monde entier.<br/>
        Nous avont récupérer le site Magento2 et l'avons fait évoluer jusqu'à sa version récente en y ajoutant différents composants au fil du temps.</p>
      
      
      `,
        en: `<p>Bench is a British clothing brand sold worldwide.<br/>
        We took over the Magento2 site and evolved it to its recent version by adding different components over time.</p>`
      },
      mywork: {
        fr: `
        <p>Mon role était de travailler sur le suivi frontend du site. En créant des nouvelles templates Magento, en préparant le site pour des évènements ponctuels (soldes, blackfriday...), en conseillant le client sur des solutions (design et frontend). J'ai travaillé conjointement avec le client (anglais) pour mener à terme ce projet.(projet SCRUM)</p>
        <p>J'ai également formé le client à l'utilisation de Magento2 concernant l'affichage du contenu dans le site.</p>`,
        en: `
        <p>My role was to work on the frontend of the site. By creating new Magento templates, by preparing the site for one-off events (sales, blackfriday...), by advising the client on solutions (design and frontend). I worked jointly with the client (English) to complete this project. (SCRUM project)</p>
        <p>I also did client formation on Magento and how to use it</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: 'cover-bench.webp',
        screens: ['bench-home.webp', 'bench-cat.webp', 'bench-product.webp']
      },
      companyId: 'abso',
      url: 'https://bench.ca/'
    },
    {
      id: nanoid(),
      name: 'Mobilia',
      slug: 'mobilia',
      subtitle: 'Magento 2 ecommerce',
      date: '2019',
      description: {
        fr: `<p>Mobilia est une entreprise familiale de meubles qui regroupe neuf succursales au Québec et en Ontario. Mobilia.ca offre plus de 300 produits et livre des produits de la Colombie-Britannique jusqu’au Nouveau-Brunswick. </p>
      <p>Nous avons travaillé sur la refonte complète du site et le passage de Magento 1 à Magento 2.</p>`,
        en: `<p>Mobilia is a family furniture business with nine branches in Quebec and Ontario. Mobilia.ca offers more than 300 products and delivers products from British Columbia to New Brunswick.</p>
        <p>We worked on the complete redesign of the site and the transition from Magento 1 to Magento 2.</p>`
      },
      mywork: {
        fr: `<p>Mon rôle était de travailler sur les différents éléments front end du site et de m'assurer de la qualité générale aux différentes mises en ligne.</p>`,
        en: `<p>My role was to work on the various front-end elements of the site and to ensure the general quality of the various uploads.</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: 'cover-mobilia.webp',
        screens: [
          'mobilia-home.webp',
          'mobilia-cat.webp',
          'mobilia-product.webp'
        ]
      },
      companyId: 'abso',
      url: 'https://mobilia.ca/'
    },
    {
      id: nanoid(),
      name: 'Prana Organic',
      slug: 'prana',
      subtitle: 'Magento 2 ecommerce',
      date: '2019',
      description: {
        fr: `<p>Prana est un fabricant de nourriture bio créé en 2005, c'est le leader du snack bio au Canada.</p>`,
        en: `<p>Prana is an organic food manufacturer created in 2005, it is the leader in organic snacks in Canada.</p>`
      },
      mywork: {
        fr: `<p>J'ai travaillé à la création de templates Magento 2 ainsi qu'à la maintenance régulière du site.</p>`,
        en: `<p>I worked on the creation of Magento 2 templates as well as the regular maintenance of the site.</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: 'cover-prana.webp',
        screens: ['prana-home.webp', 'prana-product.webp']
      },
      url: 'https://pranafoods.ca/'
    },
    {
      id: nanoid(),
      name: 'Les pêcheurs',
      slug: 'pecheurs',
      subtitle: 'Website & tablet app',
      date: '2019',
      description: {
        fr: `<p><em>Les pêcheurs</em> est une émission humoristique de Martin Petit diffusée sur radio-canada.</p>
      <p>J'ai travaillé sur le volet numérique de l'émission qui contient un site web et un magazine numérique disponible sur iPad/android ainsi qu'en version web. </p>`,
        en: `<p><em>Les Pêcheurs</em> is a comedy show by Martin Petit broadcast on radio-canada.</p>
        
        <p>I worked on the digital part of the show which contains a website and a digital magazine available on iPad/android/web. </p>
        <p>Applications are native (iOS, Android) and use webviews to display HTML templates.</p>
        `
      },
      mywork: {
        fr: `<p>Mon travail était le développement front-end du site web, du magazine web ainsi que des gabarits webview pour les applications tablettes. J'ai également participé à la déclinaison graphique de maquettes en suivant la direction artistique.</p>`,
        en: `        <p>My work was the front-end development of the website, the web magazine as well as webview templates for tablet applications. I also participated in UI design of most of the pages based on the art direction.</p>
        `
      },
      tech: ['HTML', 'LESS', 'JS', 'Bootstrap', 'Photoshop', 'Templates TWIG'],
      images: {
        cover: 'cover-pecheurs.webp',
        screens: [
          'pecheurs-desktop.webp',
          'peche-sugar-tablet.webp',
          'peche-nav-tablet.webp',
          'peche-home-tablet.webp',
          'peche-dessous-tablet.webp'
        ]
      },
      companyId: 'version10',
      url: 'https://ici.radio-canada.ca/tele/les-pecheurs/site'
    },
    {
      id: nanoid(),
      name: 'Datsit',
      slug: 'datsit',
      subtitle: 'Corporate website',
      date: '2018',
      description: {
        fr: `<p>Site de la compagnie DATSIT, spécialisée dans la production TV.</p><p>J'ai travaillé sur la conception UX et le design du site ainsi que sur l'intégration web responsive.</p>`,
        en: `<p>Site of the company DATSIT, specialized in TV production.</p><p>I worked on the UX conception and the design of the site as well as on the responsive web integration.</p>`
      },

      mywork: { fr: `UX/UI Design, HTML, CSS`, en: `UX/UI Design, HTML, CSS` },
      tech: [
        'Photoshop',
        'Axure',
        'HTML',
        'LESS',
        'Bootstrap',
        'jQuery',
        'Templates TWIG'
      ],
      images: {
        cover: 'cover-datsit.webp',
        screens: ['datsit-desktop.webp', 'datsit-tablet.webp']
      },
      companyId: 'version10',
      url: ''
    },
    {
      id: nanoid(),
      name: 'Bazzo',
      slug: 'bazzo',
      subtitle: 'Tablet magazine',
      date: '2018',
      description: {
        fr: `<p>BazzoMag est un mensuel numérique gratuit s’ajoutant à l’émission BazzoTV.</p>
      <p>Le magazine est disponible sur tablettes iOS et Android. J'ai travaillé sur le développement front-end des différentes maquettes du magazine.</p>
      <p>Les applications sont natives (iOS, Android) et utilisent des webviews pour afficher les templates HTML.</p>`,
        en: `<p>BazzoMag is a free digital monthly supplement to the BazzoTV show.</p>
        <p>The magazine is available on iOS and Android tablets. I worked on the front-end development of the different magazine layouts.</p>
        <p>Applications are native (iOS, Android) and use webviews to display HTML templates.</p>`
      },

      mywork: { fr: `Intégration HTML/CSS`, en: `PSD to HTML/CSS` },
      tech: ['HTML', 'LESS', 'SASS'],
      images: {
        cover: 'cover-bazzo.webp',
        screens: ['bazzo-1.webp', 'bazzo-2.webp', 'bazzo-3.webp']
      },
      companyId: 'version10',
      url: ''
    },
    {
      id: nanoid(),
      name: 'Ruptures',
      slug: 'ruptures',
      subtitle: 'Web magazine & Tablet game',
      date: '2018',
      description: {
        fr: `<p><em>Ruptures</em> est une série tv difusée sur radio-canada.</p>
      <p>J'ai travaillé sur le volet numérique de l'émission qui contient un site web, un magazine web ainsi qu'une expérience de découverte intéractive (type street view).</p>
      <p>Mon travail était le développement front-end du site web, du magazine web ainsi que du module de découverte "street-view" (utilisant l'api googlemaps).</p>`,
        en: `<p><em>Ruptures</em> is a tv series broadcast on radio-canada.</p>
        <p>I worked on the digital components of the show which contains a website, a web magazine as well as an interactive discovery experience (street view type).</p>
        <p>My work was the front-end development of the website, the web magazine as well as the "street-view" discovery module (using the googlemaps api).</p>`
      },

      mywork: {
        fr: `HTML, CSS, déclinaison de maquettes graphiques, création d'éléments graphiques en fausse 3D (pour le street-view 3D)`,
        en: `HTML, CSS, UI layouts creation, 3D models elements (for the 3D street-view experience section)`
      },
      tech: ['Photoshop', 'HTML', 'LESS', 'JS', 'Bootstrap', 'Templates TWIG'],
      images: {
        cover: 'cover-ruptures.webp',
        screens: [
          'ruptures-desktop.webp',
          'ruptures-desktop2.webp',
          'ruptures-desktop3.webp',
          'ruptures-tablet.webp',
          'ruptures-tablet2.webp'
        ]
      },
      companyId: 'version10',
      url: ''
    },
    {
      id: nanoid(),
      name: 'Le pharmachien',
      slug: 'pharmachien',
      subtitle: 'Responsive Website',
      date: '2018',
      description: {
        fr: `<p><em>Les aventures du Pharmachien</em> est une émission TV de vulgarisation scientifique sur la santé.</p>
        <p>J'ai travaillé sur l'intégration web du site. Le site est basé sur <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> et utilise la technologie <a href="https://angularjs.org/" target="_blank">Angular JS</a>.</p>`,
        en: `<p><em>Les aventures du Pharmachien</em> is a popular science TV show on health.</p>
        <p>I worked on the web integration of the site. The site is <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> based and uses <a href="https://angularjs.org/" target="_blank">Angular JS</a> technology.</p>`
      },
      mywork: {
        fr: `HTML, CSS, déclinaison de maquettes graphiques, création d'éléments graphiques`,
        en: `HTML, CSS, UI layouts creation, various graphic design`
      },
      tech: [
        'Photoshop',
        'HTML',
        'LESS',
        'JS',
        'Bootstrap',
        'Templates AngularJS'
      ],
      images: {
        cover: 'cover-pharmachien.webp',
        screens: [
          'pharmachien-desktop.webp',
          'pharmachien-desktop2.webp',
          'pharmachien-mobile.webp'
        ]
      },
      companyId: 'version10',
      url: ''
    },
    {
      id: nanoid(),
      name: 'Conseils de famille',
      slug: 'cdf',
      subtitle: 'Web & mobile site',
      date: '2017',
      description: {
        fr: `<p>Le site de <em>Conseils de famille</em> présente le vlogue de Clovis, le personnage principal de la série. Les contenus du site sont diffusés en conjonction avec la chaîne YouTube officielle du personnage.</p>
      <p>J'ai travaillé sur le front-end developpement des différentes sections du site.</p>`,
        en: `<p>The <em>Conseils de famille</em> website presents the vlog of Clovis, the main character of the series. Site content is released in conjunction with the character's official YouTube channel.</p>
        <p>I worked on the front-end development of the different sections of the site.</p>`
      },

      mywork: {
        fr: `Intégration HTML/CSS, design responsive`,
        en: `HTML/CSS layout integration, responsive design`
      },
      tech: ['HTML', 'LESS', 'jQuery', 'Bootstrap'],
      images: {
        cover: 'cover-cdf.webp',
        screens: ['cdf-desktop.webp', 'cdf-desktop2.webp', 'cdf-mobile.webp']
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'Explora TV',
      slug: 'explora',
      subtitle: 'TV channel website',
      date: '2017',
      description: {
        fr: `<p>Site d'informations sur les programmes de la chaine Explora TV.</p>
      <p>J'ai travaillé sur le développement front-end des différentes sections du site. (Présentation des émissions, grille de programmes, concours...).</p>`,
        en: `<p>Information site on the programs of the Explora TV channel.</p>
        <p>I worked on the front-end development of the different sections of the site. (Presentation of programs, program schedule, competitions, etc.).</p>`
      },

      mywork: {
        fr: `Intégration HTML/CSS, responsive design`,
        en: `HTML/CSS layout integration, responsive design`
      },
      tech: ['HTML', 'LESS', 'jQuery'],
      images: {
        cover: 'cover-explora.webp',
        screens: ['explora-desktop1.webp', 'explora-mobile.webp']
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'École des Ponts Paris Tech',
      slug: 'ponts',
      subtitle: 'School website',
      date: '2011',
      description: {
        fr: `<p>L'école des Ponts est une école d'ingénieurs française située près de Paris.</p>
      <p>J'ai travaillé sur la refonte de leur site principal ainsi que sur différents sites de l'école (intranet, bibliothèque, associations, newsletters ...).</p>
      <p>Mon rôle fût la conception UX, la direction artistique ainsi que l'intégration de ces maquettes en HTML/CSS.</p>`,
        en: `<p>Ecole des Ponts is a French engineering school located near Paris.</p>
        <p>I worked on the redesign of their main site as well as on various school sites (intranet, library, associations, newsletters ...).</p>
        <p>My role was the UX/UI design, the artistic direction as well as the integration of these models in HTML/CSS within a Drupal solution.</p>`
      },

      mywork: {
        fr: `Direction Artistique, UX/UI, HTML, CSS, templates Drupal`,
        en: `Art direction, UX/UI, HTML, CSS, Drupal templates`
      },
      tech: ['Photoshop', 'HTML', 'CSS', 'Templates Drupal'],
      images: {
        cover: 'cover-ponts.webp',
        screens: [
          'enpc-1.webp',
          'enpc-2.webp',
          'enpc-3.webp',
          'enpc-4.webp',
          'enpc-5.webp',
          'enpc-6.webp'
        ]
      },
      companyId: 'comptoirs',
      url: 'https://ecoledesponts.fr/'
    }
  ],
  lab: [
    {
      id: nanoid(),
      name: 'CV Generator',
      slug: 'cvapp',
      subtitle: 'React app',
      date: '15-01-2023',
      description: {
        fr: `Le projet consiste à créer une application en ReactJS capable de générer un CV . La page se compose de plusieurs éléments de contenu qui sont mise à jour en temps réel avec l'entrée de données dans le formulaire par l'utilisateur. Il est installé avec <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`,
        en: `The project is to create an app in ReactJS that can generate a resume . The page consist of several form elements that gets updated with user input. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Bulma', 'Vite'],
      images: {
        cover: 'cvapp-cover.webp',
        screens: ['cvapp-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-cv-app',
      preview: 'https://velvety-treacle-40877e.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'Quizzy',
      slug: 'quizzy',
      subtitle: 'React quiz app',
      date: '01-01-2023',
      description: {
        fr: `Le projet est de construire une petite application de quizz en ReactJS. On récupère les questions à partir d'une API. Il est installé avec <a href="https://vitejs.dev/" target="_blank">Vite.js</a>. `,
        en: `The project is to build a little quizz app in ReactJS. It gets its questions from an API. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Bulma', 'Vite'],
      images: {
        cover: 'quizzy-cover.webp',
        screens: ['quizzy-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-quizzy',
      preview: 'https://astonishing-custard-e140b8.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'Tenzies',
      slug: 'tenzies',
      subtitle: 'React rolling dice game',
      date: '01-01-2023',
      description: {
        fr: `Le projet est de construire un jeu de tenzies en utilisant ReactJS`,
        en: `The project is to build a game of tenzies. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Vite'],
      images: {
        cover: 'tenzies-cover.webp',
        screens: ['tenzies-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-tenzies-game',
      preview: 'https://singular-concha-d934bf.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'Etch-a-sketch',
      slug: 'etch',
      subtitle: 'Drawing game in JS',
      date: '01-10-2022',
      description: {
        fr: `Le projet consiste à créer une version numérique du célèbre jeu de l'<a href="https://en.wikipedia.org/wiki/Etch_A_Sketch" target="_blank">écran magique</a> uniquement en utilisant HTML, CSS et Vanilla JS.`,
        en: `The project is to create a digital version of the game <a href="https://en.wikipedia.org/wiki/Etch_A_Sketch" target="_blank">Etch a Sketch</a> only using HTML, CSS and Vanilla JS.`
      },

      tech: ['HTML', 'CSS', 'Vanilla JS'],
      images: {
        cover: 'etch-cover.webp',
        screens: ['etch-screenshot.webp']
      },
      github: 'https://github.com/edesgree/odin-etchasketch',
      preview: 'https://edesgree.github.io/odin-etchasketch/public/'
    },
    {
      id: nanoid(),
      name: 'Tic Tac Toe',
      slug: 'tictactoe',
      subtitle: 'JS game',
      date: '01-11-2022',
      description: {
        fr: `Le projet consiste à créer un jeu de Tic Tac Toe en utilisant HTML, CSS et Vanilla JS.`,
        en: `The project is to create a Tic Tac Toe game using HTML, CSS and Vanilla JS.`
      },

      tech: ['HTML', 'CSS', 'Vanilla JS'],
      images: {
        cover: 'tictactoe-cover.webp',
        screens: ['tictactoe-screenshot.webp']
      },
      github: 'https://github.com/edesgree/odin-tictactoe',
      preview: 'https://edesgree.github.io/odin-tictactoe/public/'
    },
    {
      id: nanoid(),
      name: 'Weather app',
      slug: 'weather',
      subtitle: 'Rect weather app',
      date: '02-10-2022',
      description: {
        fr: `<p>Ce projet consiste à créer une application météo en utilisant différentes API. L'application renvoie une prévision météo pour un nom de ville fourni par l'utilisateur ainsi qu'un GIF associé à la météo.</p>
        
        `,
        en: `<p>This project is to create an weather app using different API. The app return a weather forecast and a animated GIF for a provided city name.`
      },
      tech: ['Vanilla JS', 'Async/await', 'API calls', 'Giphy'],
      images: {
        cover: 'weather-cover.webp',
        screens: ['weather-screenshot.webp']
      },
      github: 'https://github.com/edesgree/odin-weather-app',
      preview: 'https://edesgree.github.io/odin-weather-app/dist/'
    }
  ],
  skills: [
    { id: nanoid(), name: 'Bootstrap', slug: 'bootstrap' },
    { id: nanoid(), name: 'Confluence', slug: 'confluence' },
    { id: nanoid(), name: 'Figma', slug: 'figma' },
    { id: nanoid(), name: 'Flask', slug: 'flask' },
    { id: nanoid(), name: 'Foundation', slug: 'foundation' },
    { id: nanoid(), name: 'Git', slug: 'git' },
    { id: nanoid(), name: 'HTML', slug: 'html' },
    { id: nanoid(), name: 'Javascript', slug: 'js' },
    { id: nanoid(), name: 'Jira', slug: 'jira' },
    { id: nanoid(), name: 'LESS', slug: 'less' },
    { id: nanoid(), name: 'Magento', slug: 'magento' },
    { id: nanoid(), name: 'Photoshop', slug: 'psd' },
    { id: nanoid(), name: 'PHP', slug: 'php' },
    { id: nanoid(), name: 'Python', slug: 'python' },
    { id: nanoid(), name: 'React', slug: 'react' },
    { id: nanoid(), name: 'SASS', slug: 'sass' },
    { id: nanoid(), name: 'Sketch', slug: 'sketch' },
    { id: nanoid(), name: 'Trello', slug: 'trello' },
    { id: nanoid(), name: 'Twig', slug: 'twig' },
    { id: nanoid(), name: 'VSCode', slug: 'vscode' },
    { id: nanoid(), name: 'W3C', slug: 'w3c' },
    { id: nanoid(), name: 'Wordpress', slug: 'wordpress' }
  ]
};

export default data;
