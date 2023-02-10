import { nanoid } from 'nanoid';
const data = {
  common: {
    myName: 'Edouard Desgrée',
    contactEmail: 'edouard@desgree.com',
    mainTitle: { fr: 'bonjour', en: 'hello' },
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
    labTitle: {
      fr: `Labo`,
      en: `Lab`
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
    }
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
      subtitle: 'Magento 2 frontend',
      date: '',
      description: ``,
      mywork: ``,
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo'],
      images: {
        cover: 'cover-kanuk.webp',
        screens: ['kanuk-home.webp', 'kanuk-cat.webp', 'kanuk-product.webp']
      },

      url: ''
    },
    {
      id: nanoid(),
      name: 'Bench',
      slug: 'bench',
      subtitle: 'Magento 2 frontend',
      date: '',
      description: ``,
      mywork: ``,
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo'],
      images: {
        cover: 'cover-bench.webp',
        screens: ['bench-home.webp', 'bench-cat.webp', 'bench-product.webp']
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'Mobilia',
      slug: 'mobilia',
      subtitle: 'Magento 2 frontend',
      date: '',
      description: ``,
      mywork: ``,
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo'],
      images: {
        cover: 'cover-mobilia.webp',
        screens: [
          'mobilia-home.webp',
          'mobilia-cat.webp',
          'mobilia-product.webp'
        ]
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'Prana Organic',
      slug: 'prana',
      subtitle: 'Magento 2 frontend',
      date: '',
      description: ``,
      mywork: ``,
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo'],
      images: {
        cover: 'cover-prana.webp',
        screens: ['prana-home.webp', 'prana-product.webp']
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'Les pêcheurs',
      slug: 'pecheurs',
      subtitle: 'Website & tablet app',
      date: '',
      description: `<p><em>Les pêcheurs</em> est une émission humoristique de Martin Petit diffusée sur radio-canada.</p>
      <p>J'ai travaillé sur le volet numérique de l'émission qui contient un site web et un magazine numérique disponible sur iPad/android ainsi qu'en version web. </p>
      <p>Mon travail était le développement front-end du site web, du magazine web ainsi que des gabarits webview pour les applications tablettes. J'ai également participé à la déclinaison graphique de maquettes en suivant la direction artistique.</p>`,
      mywork: `HTML, CSS, déclinaison de maquettes graphiques, création d'éléments graphiques`,
      tech: ['HTML', 'LESS', 'JS', 'Bootstrap', 'Templates TWIG'],
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
      url: 'https://ici.radio-canada.ca/tele/les-pecheurs/site'
    },
    {
      id: nanoid(),
      name: 'Datsit',
      slug: 'datsit',
      subtitle: '',
      date: '',
      description: `<p>Site de la compagnie DATSIT, spécialisée dans la production TV.</p><p>J'ai travaillé sur la conception UX et le design du site ainsi que sur l'intégration web responsive.</p>`,
      mywork: 'Design, HTML, CSS',
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
      url: 'http://datsit.tv/'
    },
    {
      id: nanoid(),
      name: 'Bazzo',
      slug: 'bazzo',
      subtitle: 'magazine tablette',
      date: '',
      description: `<p>BazzoMag est un mensuel numérique gratuit s’ajoutant à l’émission BazzoTV.</p>
      <p>Le magazine est disponible sur tablettes iOS et Android. J'ai travaillé sur le développement front-end des différentes maquettes du magazine.</p>
      <p>Les applications sont natives (iOS, Android) et utilisent des webviews pour afficher les templates HTML.</p>`,
      mywork: `Intégration HTML/CSS`,
      tech: ['HTML', 'LESS', 'SASS'],
      images: {
        cover: 'cover-bazzo.webp',
        screens: ['bazzo-1.webp', 'bazzo-2.webp', 'bazzo-3.webp']
      },
      url: ''
    },
    {
      id: nanoid(),
      name: 'Ruptures',
      slug: 'ruptures',
      subtitle: '',
      date: '',
      description: `<p>Ruptures est une série tv difusée sur radio-canada.</p>
      <p>J'ai travaillé sur le volet numérique de l'émission qui contient un site web, un magazine web ainsi qu'une expérience de découverte intéractive (type street view).</p>
      <p>Mon travail était le développement front-end du site web, du magazine web ainsi que du module de découverte "street-view" (utilisant l'api googlemaps).</p>`,
      mywork: `HTML, CSS, déclinaison de maquettes graphiques, création d'éléments graphiques en fausse 3D (pour le street-view 3D)`,
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
      url: ''
    },
    {
      id: nanoid(),
      name: 'Le pharmachien',
      slug: 'pharmachien',
      subtitle: '',
      date: '',
      description: `<p>Les aventures du Pharmachien est une émission TV de vulgarisation scientifique sur la santé.</p>
        <p>J'ai travaillé sur l'intégration web du site. Le site est basé sur bootstrap et utilise la technologie Angular JS.</p>`,
      mywork: `HTML, CSS, déclinaison de maquettes graphiques, création d'éléments graphiques`,
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
      url: ''
    },
    {
      id: nanoid(),
      name: 'Conseils de famille',
      slug: 'cdf',
      subtitle: '',
      date: '',
      description: `<p>Le site de Conseils de famille présente le vlogue de Clovis, le personnage principal de la série. Les contenus du site sont diffusés en conjonction avec la chaîne YouTube officielle du personnage.</p>
      <p>J'ai travaillé sur le front-end developpement des différentes sections du site.</p>`,
      mywork: `Intégration HTML/CSS, responsive design`,
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
      subtitle: '',
      date: '',
      description: `<p>Site d'informations sur les programmes de la chaine Explora TV.</p>
      <p>J'ai travaillé sur le développement front-end des différentes sections du site. (Présentation des émissions, grille de programmes, concours...).</p>`,
      mywork: `Intégration HTML/CSS, responsive design`,
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
      subtitle: '',
      date: '',
      description: `<p>L'école des Ponts est une école d'ingénieurs française située près de Paris.</p>
      <p>J'ai travaillé sur la refonte de leur site principal ainsi que sur différents sites de l'école (intranet, bibliothèque, associations, newsletters ...).</p>
      <p>Mon rôle fût la conception UX, la direction artistique ainsi que l'intégration de ces maquettes en HTML/CSS.</p>`,
      mywork: `UX/UI, direction artistique, HTML, CSS`,
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
      url: ''
    }
  ],
  lab: [
    {
      id: nanoid(),
      name: 'React CV App',
      slug: 'cvapp',
      subtitle: 'React app',
      date: '15-01-2023',
      description: `The project is to create an app that can generate a resume in ReactJS. The page consist of several form elements that gets updated with user input. It is bootstraped with Vite.js.`,
      mywork: ``,
      tech: ['React', 'HTML', 'SCSS', 'Bulma'],
      images: {
        cover: 'cvapp-cover.webp',
        screens: ['cvapp-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-cv-app',
      preview: 'https://velvety-treacle-40877e.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'React Quizzy',
      slug: 'quizzy',
      subtitle: 'React game',
      date: '01-01-2023',
      description: `The project is to build a little quizz app in react. It gets its questions from an API. It is bootstraped with Vite.js.`,
      mywork: ``,
      tech: ['React', 'HTML', 'SCSS', 'Bulma'],
      images: {
        cover: 'quizzy-cover.webp',
        screens: ['quizzy-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-quizzy',
      preview: 'https://astonishing-custard-e140b8.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'React Tenzies game',
      slug: 'tenzies',
      subtitle: 'React game',
      date: '',
      description: `The project is to build a game of tenzies. It is bootstraped with Vite.js.`,
      mywork: ``,
      tech: ['React', 'HTML', 'SCSS'],
      images: {
        cover: 'tenzies-cover.webp',
        screens: ['tenzies-screenshot.webp']
      },
      github: 'https://github.com/edesgree/react-tenzies-game',
      preview: 'https://singular-concha-d934bf.netlify.app/'
    },
    {
      id: nanoid(),
      name: 'Etch a sketch',
      slug: 'etch',
      subtitle: 'JS game',
      date: '01-10-2022',
      description: `The project is to create a digital version of the game Etch a Sketch only using HTML, CSS and Vanilla JS.`,
      mywork: ``,
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
      name: 'Tic tac toe',
      slug: 'tictactoe',
      subtitle: 'JS game',
      date: '01-11-2022',
      description: `The project is to create a Tic Tac Toe game using HTML, CSS and Vanilla JS.`,
      mywork: ``,
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
      date: '01-11-2022',
      description: `This project is to create an weather app using different API. The app return a weather forecast for a user provided city name.`,
      mywork: ``,
      tech: ['Vanilla JS', 'Async/await', 'API calls'],
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
