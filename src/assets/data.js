import React from 'react';
import { nanoid } from 'nanoid';

import workKanukCover from './images/work/kanuk/cover-kanuk.webp';
import workKanukHome from './images/work/kanuk/kanuk-home.webp';
import workKanukCat from './images/work/kanuk/kanuk-cat.webp';
import workKanukProduct from './images/work/kanuk/kanuk-product.webp';
import workBenchCover from './images/work/bench/cover-bench.webp';
import workBenchHome from './images/work/bench/bench-home.webp';
import workBenchCat from './images/work/bench/bench-cat.webp';
import workBenchProduct from './images/work/bench/bench-product.webp';
import workMobiliaCover from './images/work/mobilia/cover-mobilia.webp';
import workMobiliaHome from './images/work/mobilia/mobilia-home.webp';
import workMobiliaCat from './images/work/mobilia/mobilia-cat.webp';
import workMobiliaProduct from './images/work/mobilia/mobilia-product.webp';
import workPranaCover from './images/work/prana/cover-prana.webp';
import workPranaHome from './images/work/prana/prana-home.webp';
import workPranaProduct from './images/work/prana/prana-product.webp';
import workPecheursCover from './images/work/pecheurs/cover-pecheurs.webp';
import workPecheursDesktop from './images/work/pecheurs/pecheurs-desktop.webp';
import workPecheursTablet1 from './images/work/pecheurs/peche-sugar-tablet.webp';
import workPecheursTablet2 from './images/work/pecheurs/peche-nav-tablet.webp';
import workPecheursTablet3 from './images/work/pecheurs/peche-home-tablet.webp';
import workPecheursTablet4 from './images/work/pecheurs/peche-dessous-tablet.webp';
import workDatsitCover from './images/work/datsit/cover-datsit.webp';
import workDatsitDesktop from './images/work/datsit/datsit-desktop.webp';
import workDatsitTablet from './images/work/datsit/datsit-tablet.webp';
import workBazzoCover from './images/work/bazzo/cover-bazzo.webp';
import workBazzo1 from './images/work/bazzo/bazzo-1.webp';
import workBazzo2 from './images/work/bazzo/bazzo-2.webp';
import workBazzo3 from './images/work/bazzo/bazzo-3.webp';
import workRupturesCover from './images/work/ruptures/cover-ruptures.webp';
import workRupturesDesktop from './images/work/ruptures/ruptures-desktop.webp';
import workRupturesDesktop2 from './images/work/ruptures/ruptures-desktop2.webp';
import workRupturesDesktop3 from './images/work/ruptures/ruptures-desktop3.webp';
import workRupturesTablet from './images/work/ruptures/ruptures-tablet.webp';
import workRupturesTablet2 from './images/work/ruptures/ruptures-tablet2.webp';
import workPharmachienCover from './images/work/pharmachien/cover-pharmachien.webp';
import workPharmachienDesktop from './images/work/pharmachien/pharmachien-desktop.webp';
import workPharmachienDesktop2 from './images/work/pharmachien/pharmachien-desktop2.webp';
import workPharmachienMobile from './images/work/pharmachien/pharmachien-mobile.webp';
import workCdfCover from './images/work/cdf/cover-cdf.webp';
import workCdfDesktop from './images/work/cdf/cdf-desktop.webp';
import workCdfDesktop2 from './images/work/cdf/cdf-desktop2.webp';
import workCdfMobile from './images/work/cdf/cdf-mobile.webp';
import workExploraCover from './images/work/explora/cover-explora.webp';
import workExploraDesktop1 from './images/work/explora/explora-desktop1.webp';
import workExploraMobile from './images/work/explora/explora-mobile.webp';
import workPontsCover from './images/work/ponts/cover-ponts.webp';
import workPonts1 from './images/work/ponts/enpc-1.webp';
import workPonts2 from './images/work/ponts/enpc-2.webp';
import workPonts3 from './images/work/ponts/enpc-3.webp';
import workPonts4 from './images/work/ponts/enpc-4.webp';
import workPonts5 from './images/work/ponts/enpc-5.webp';
import workPonts6 from './images/work/ponts/enpc-6.webp';
import labCvappCover from './images/lab/cvapp/cvapp-cover.webp';
import labCvappScreenshot from './images/lab/cvapp/cvapp-screenshot.webp';
import labQuizzyCover from './images/lab/quizzy/quizzy-cover.webp';
import labQuizzyScreenshot from './images/lab/quizzy/quizzy-screenshot.webp';
import labTenziesCover from './images/lab/tenzies/tenzies-cover.webp';
import labTenziesScreenshot from './images/lab/tenzies/tenzies-screenshot.webp';
import labEtchCover from './images/lab/etch/etch-cover.webp';
import labEtchScreenshot from './images/lab/etch/etch-screenshot.webp';
import labTictactoeCover from './images/lab/tictactoe/tictactoe-cover.webp';
import labTictactoeScreenshot from './images/lab/tictactoe/tictactoe-screenshot.webp';
import labWeatherCover from './images/lab/weather/weather-cover.webp';
import labWeatherScreenshot from './images/lab/weather/weather-screenshot.webp';
import skillsIconbootstrap from './icons/skills/icon-bootstrap.svg';
import skillsIconconfluence from './icons/skills/icon-confluence.svg';
import skillsIconfigma from './icons/skills/icon-figma.svg';
import skillsIconflask from './icons/skills/icon-flask.svg';
import skillsIconfoundation from './icons/skills/icon-foundation.svg';
import skillsIcongit from './icons/skills/icon-git.svg';
import skillsIconhtml from './icons/skills/icon-html.svg';
import skillsIconjs from './icons/skills/icon-js.svg';
import skillsIconjira from './icons/skills/icon-jira.svg';
import skillsIconless from './icons/skills/icon-less.svg';
import skillsIconmagento from './icons/skills/icon-magento.svg';
import skillsIconpsd from './icons/skills/icon-psd.svg';
import skillsIconphp from './icons/skills/icon-php.svg';
import skillsIconpython from './icons/skills/icon-python.svg';
import skillsIconreact from './icons/skills/icon-react.svg';
import skillsIconsass from './icons/skills/icon-sass.svg';
import skillsIconsketch from './icons/skills/icon-sketch.svg';
import skillsIcontrello from './icons/skills/icon-trello.svg';
import skillsIcontwig from './icons/skills/icon-twig.svg';
import skillsIconvscode from './icons/skills/icon-vscode.svg';
import skillsIconw3c from './icons/skills/icon-w3c.svg';
import skillsIconwordpres from './icons/skills/icon-wordpress.svg';
import socialsIconGithub from '../assets/icons/icon-github.svg';
import socialsIconLinkedin from '../assets/icons/icon-linkedin.svg';
const data = {
  common: {
    myName: 'Edouard Desgr??e',
    contactEmail: 'edouard@desgree.com',
    mainTitle: { fr: 'bonjour', en: 'hello' },

    skillsTitle: {
      fr: `Connaissances`,
      en: `Skills`
    },
    aboutTitle: {
      fr: `?? propos`,
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
      en: `What i did`
    },
    workTechUsedTitle: {
      fr: `Technologies utilis??es`,
      en: `Techs`
    },
    labelBack: {
      fr: `Retour`,
      en: `Back`
    },
    labelUp: {
      fr: `Allez en haut`,
      en: `Go Up`
    },
    labelSeeWork: {
      fr: `Mon portfolio`,
      en: `See my work`
    },
    contactTitle: {
      fr: `Contactez-moi ????`,
      en: `Say Hi ????`
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
      fr: `Je suis d??veloppeur front-end avec une expertise en UX/UI. Je tiens ?? trouver des solutions simples et modernes en utilisant les meilleures pratiques et les derni??res tendances de l'industrie. Je suis curieux et aime apprendre en permanence que ce soit en web ou pour mes inter??ts personnels.`,
      en: `I am a frontend developer with a strong background in UX/UI. I try to make things simple and modern using best practices and newest industry trends. I am always looking for new things to learn whether it be in web development or my personal interests. `
    },
    introTitle: {
      fr: `Salut ????,\n moi c'est Edouard.`,
      en: `Hi ????,\n I'm Edouard.`
    },
    introSubtitle: {
      fr: `D??veloppeur Front-end | Designer web`,
      en: `Front-end developer | web designer`
    },
    services: [
      {
        title: {
          fr: `D??veloppement Frontend `,
          en: `Frontend development`
        },
        text: {
          fr: `Je con??ois des exp??riences int??ractives en utilisant les derniers outils et standards web`,
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
          fr: `Je cr??e mes propres solutions design pour afficher des interfaces visuelles riches et coh??rentes.`,
          en: `I focus on designing user-friendly interfaces using my creativity and technical skills`
        },
        icon: 'ItemSage'
      },
      {
        title: {
          fr: `Travail en ??quipe`,
          en: `Team player`
        },
        text: {
          fr: `Je suis un joueur d'??quipe et mes connaissances multidisciplinaires m'aide ?? collaborer efficacement avec les diff??rents m??tiers.`,
          en: `My experience in code and design help me collaborate efficiently whithin my team`
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
        fr: `Contact`,
        en: `Contact`
      },
      slug: 'contact'
    }
  ],
  socials: [
    {
      id: nanoid(),
      name: 'Github',
      slug: 'github',
      url: 'https://github.com/edesgree',
      icon: socialsIconGithub
    },
    {
      id: nanoid(),
      name: 'Linkedin',
      slug: 'linkedin',
      url: 'https://www.linkedin.com/in/edouarddesgree/',
      icon: socialsIconLinkedin
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
        <p>Kanuk est un fabriquant de manteaux d'hiver bas?? depuis plus de 50 ans ?? Montr??al.</p>
        <p>J'ai particip?? avec mon ??quipe ?? la cr??ation compl??te du site sous Magento2. </p>
        `,
        en: `
        <p>Kanuk is a manufacturer of winter coats based for over 50 years in Montreal.</p>
        <p>I participated with my team in the complete creation of the site using Magento2.</p>
        `
      },
      mywork: {
        fr: `
        <p>Mon r??le ??tait d'int??grer les diff??rentes templates sur Magento en suivant les designs ainsi que les diff??rents ??l??ments int??ractifs (panier d'achat, page produit, image viewer...).</p>
        <p>J'ai aussi travaill?? en UX/UI et d??clin?? certaines sections en suivant la charte graphique (avec Sketch app).</p>
      `,
        en: `
        <p>My role was to integrate the different templates in Magento by following the designs as well as working on the different interactive elements (shopping cart, product page, category page, image viewer...).
        </p>
        <p>I also did some UX/UI, creating various pages based on the art direction (using Sketch app).</p>
        `
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: workKanukCover,
        screens: [
          { image: workKanukHome, title: 'Home page' },
          { image: workKanukCat, title: 'Category page' },
          { image: workKanukProduct, title: 'Product page' }
        ]
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
        <p>Bench est une marque britannique de v??tements vendue dans le monde entier.<br/>
        Nous avont r??cup??r?? le site Magento2 et l'avons fait ??voluer jusqu'?? sa version r??cente en y ajoutant diff??rents composants au fil du temps.</p>
      `,
        en: `<p>Bench is a British clothing brand sold worldwide.<br/>
        We took over the Magento2 site and evolved it to its recent version by adding different components over time.</p>`
      },
      mywork: {
        fr: `
        <p>Mon role ??tait de travailler sur le suivi frontend du site. En cr??ant des nouvelles templates Magento, en pr??parant le site pour des ??v??nements ponctuels (soldes, blackfriday...), en conseillant le client sur des solutions (design et frontend). J'ai travaill?? conjointement avec le client (anglais) pour mener ?? terme ce projet.(projet SCRUM)</p>
        <p>J'ai ??galement form?? le client ?? l'utilisation de Magento 2 concernant l'affichage du contenu dans le site.</p>`,
        en: `
        <p>My role was to work on the frontend of the site. By creating new Magento templates, by preparing the site for one-off events (sales, blackfriday...), by advising the client on solutions (design and frontend). I worked jointly with the client (English) to complete this project. (SCRUM project)</p>
        <p>I also did client training on Magento and how to use it.</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: workBenchCover,
        screens: [
          { image: workBenchHome, title: 'Home page' },
          { image: workBenchCat, title: 'Category page' },
          { image: workBenchProduct, title: 'Product page' }
        ]
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
        fr: `<p>Mobilia est une entreprise familiale de meubles qui regroupe neuf succursales au Qu??bec et en Ontario. Mobilia.ca offre plus de 300 produits et livre des produits de la Colombie-Britannique jusqu???au Nouveau-Brunswick. </p>
      <p>Nous avons travaill?? sur la refonte compl??te du site et le passage de Magento 1 ?? Magento 2.</p>`,
        en: `<p>Mobilia is a family furniture business with nine branches in Quebec and Ontario. Mobilia.ca offers more than 300 products and delivers products from British Columbia to New Brunswick.</p>
        <p>We worked on the complete redesign of the site and the transition from Magento 1 to Magento 2.</p>`
      },
      mywork: {
        fr: `<p>Mon r??le ??tait de travailler sur les diff??rents ??l??ments front end du site et de m'assurer du controle qualit?? durant les diff??rentes mises en ligne.</p>`,
        en: `<p>My role was to work on the various front-end elements of the site and to ensure the general quality of the site during the various deployments.</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: workMobiliaCover,
        screens: [
          { image: workMobiliaHome, title: 'Home page' },
          { image: workMobiliaCat, title: 'Category page' },
          { image: workMobiliaProduct, title: 'Product page' }
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
        fr: `<p>Prana est un fabricant de nourriture bio cr???? en 2005, c'est le leader du snack bio au Canada.</p>`,
        en: `<p>Prana is an organic food manufacturer created in 2005, it is the leader in organic snacks in Canada.</p>`
      },
      mywork: {
        fr: `<p>J'ai travaill?? ?? la cr??ation de templates Magento 2 ainsi qu'?? la maintenance r??guli??re du site.</p>`,
        en: `<p>I worked on the creation of Magento 2 templates as well as the regular maintenance of the site.</p>`
      },
      tech: ['Magento 2', 'SCSS', 'JS', 'Nwayo', 'Foundation'],
      images: {
        cover: workPranaCover,
        screens: [
          { image: workPranaHome, title: 'Home page' },
          { image: workPranaProduct, title: 'Product page' }
        ]
      },
      companyId: 'abso',
      url: 'https://pranafoods.ca/'
    },
    {
      id: nanoid(),
      name: 'Les p??cheurs',
      slug: 'pecheurs',
      subtitle: 'Website & tablet app',
      date: '2019',
      description: {
        fr: `<p><em>Les p??cheurs</em> est une ??mission humoristique de Martin Petit diffus??e sur radio-canada.</p>
      <p>J'ai travaill?? sur le volet num??rique de l'??mission qui contient un site web et un magazine num??rique disponible sur iPad/android ainsi qu'en version web. </p>`,
        en: `<p><em>Les P??cheurs</em> is a comedy show by Martin Petit broadcast on radio-canada.</p>
        <p>I worked on the digital part of the show which contains a website and a digital magazine available on iPad/android/web. </p>
        <p>Applications are native (iOS, Android) and use webviews to display HTML templates.</p>
        `
      },
      mywork: {
        fr: `<p>Mon travail ??tait le d??veloppement front-end du site web, du magazine web ainsi que des gabarits webview pour les applications tablettes. J'ai ??galement particip?? ?? la d??clinaison graphique de maquettes en suivant la direction artistique.</p>`,
        en: `<p>My work was the front-end development of the website, the web magazine as well as webview templates for tablet applications. I also participated in UI design of most of the pages based on the art direction.</p>
        `
      },
      tech: ['HTML', 'LESS', 'JS', 'Bootstrap', 'Photoshop', 'Templates TWIG'],
      images: {
        cover: workPecheursCover,
        screens: [
          { image: workPecheursDesktop, title: '' },
          { image: workPecheursTablet1, title: '' },
          { image: workPecheursTablet2, title: '' },
          { image: workPecheursTablet3, title: '' },
          { image: workPecheursTablet4, title: '' }
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
        fr: `<p>Site de la compagnie DATSIT, sp??cialis??e dans la production TV.</p><p>J'ai travaill?? sur la conception UX et le design du site ainsi que sur l'int??gration web responsive.</p>`,
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
        cover: workDatsitCover,
        screens: [
          { image: workDatsitDesktop, title: '' },
          { image: workDatsitTablet, title: '' }
        ]
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
        fr: `<p>BazzoMag est un mensuel num??rique gratuit s???ajoutant ?? l?????mission BazzoTV.</p>
      <p>Le magazine est disponible sur tablettes iOS et Android. J'ai travaill?? sur le d??veloppement front-end des diff??rentes templates du magazine.</p>
      <p>Les applications sont natives (iOS, Android) et utilisent des webviews pour afficher les templates HTML.</p>`,
        en: `<p>BazzoMag is a free digital monthly supplement to the BazzoTV show.</p>
        <p>The magazine is available on iOS and Android tablets. I worked on the front-end development of the different magazine layouts.</p>
        <p>Applications are native (iOS, Android) and use webviews to display HTML templates.</p>`
      },

      mywork: { fr: `Int??gration HTML/CSS`, en: `PSD to HTML/CSS` },
      tech: ['HTML', 'LESS', 'SASS'],
      images: {
        cover: workBazzoCover,
        screens: [
          { image: workBazzo1, title: '' },
          { image: workBazzo2, title: '' },
          { image: workBazzo3, title: '' }
        ]
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
        fr: `<p><em>Ruptures</em> est une s??rie tv difus??e sur radio-canada.</p>
      <p>J'ai travaill?? sur le volet num??rique de l'??mission qui contient un site web, un magazine web ainsi qu'une exp??rience de d??couverte int??ractive (type Google Street View).</p>
      <p>Mon travail ??tait le d??veloppement front-end du site web, du magazine web ainsi que du module de d??couverte "street-view" (utilisant l'api googlemaps).</p>`,
        en: `<p><em>Ruptures</em> is a tv series broadcast on radio-canada.</p>
        <p>I worked on the digital components of the show which contains a website, a web magazine as well as an interactive discovery experience (Google Street View type).</p>
        <p>My work was the front-end development of the website, the web magazine as well as the "street-view" discovery module (using the googlemaps api).</p>`
      },

      mywork: {
        fr: `HTML, CSS, d??clinaison de maquettes graphiques, cr??ation d'??l??ments graphiques en fausse 3D (pour le street-view 3D)`,
        en: `HTML, CSS, UI layouts creation, 3D models elements (for the 3D street-view experience section)`
      },
      tech: ['Photoshop', 'HTML', 'LESS', 'JS', 'Bootstrap', 'Templates TWIG'],
      images: {
        cover: workRupturesCover,
        screens: [
          { image: workRupturesDesktop, title: '' },
          { image: workRupturesDesktop2, title: '' },
          { image: workRupturesDesktop3, title: '' },
          { image: workRupturesTablet, title: '' },
          { image: workRupturesTablet2, title: '' }
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
        fr: `<p><em>Les aventures du Pharmachien</em> est une ??mission TV de vulgarisation scientifique sur la sant??.</p>
        <p>J'ai travaill?? sur l'int??gration web du site. Le site est bas?? sur <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> et utilise la technologie <a href="https://angularjs.org/" target="_blank">Angular JS</a>.</p>`,
        en: `<p><em>Les aventures du Pharmachien</em> is a popular science TV show on health.</p>
        <p>I worked on the web integration of the site. The site is <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> based and uses <a href="https://angularjs.org/" target="_blank">Angular JS</a> technology.</p>`
      },
      mywork: {
        fr: `HTML, CSS, d??clinaison de maquettes graphiques, cr??ation d'??l??ments graphiques`,
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
        cover: workPharmachienCover,
        screens: [
          { image: workPharmachienDesktop, title: '' },
          { image: workPharmachienDesktop2, title: '' },
          { image: workPharmachienMobile, title: '' }
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
        fr: `<p>Le site de <em>Conseils de famille</em> pr??sente le vlogue de Clovis, le personnage principal de la s??rie. Les contenus du site sont diffus??s en conjonction avec la cha??ne YouTube officielle du personnage.</p>
      <p>J'ai travaill?? sur le d??veloppement front-end des diff??rentes sections du site.</p>`,
        en: `<p>The <em>Conseils de famille</em> website presents the vlog of Clovis, the main character of the series. Site content is released in conjunction with the character's official YouTube channel.</p>
        <p>I worked on the front-end development of the different sections of the site.</p>`
      },

      mywork: {
        fr: `Int??gration HTML/CSS, design responsive`,
        en: `HTML/CSS layout integration, responsive design`
      },
      tech: ['HTML', 'LESS', 'jQuery', 'Bootstrap'],
      images: {
        cover: workCdfCover,
        screens: [
          { image: workCdfDesktop, title: '' },
          { image: workCdfDesktop2, title: '' },
          { image: workCdfMobile, title: '' }
        ]
      },
      companyId: 'version10',
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
      <p>J'ai travaill?? sur le d??veloppement front-end des diff??rentes sections du site. (Pr??sentation des ??missions, grille de programmes, concours...).</p>`,
        en: `<p>Information site on the programs of the Explora TV channel.</p>
        <p>I worked on the front-end development of the different sections of the site. (Presentation of programs, program schedule, competitions, etc.).</p>`
      },

      mywork: {
        fr: `Int??gration HTML/CSS, responsive design`,
        en: `HTML/CSS layout integration, responsive design`
      },
      tech: ['HTML', 'LESS', 'jQuery'],
      images: {
        cover: workExploraCover,
        screens: [
          { image: workExploraDesktop1, title: '' },
          { image: workExploraMobile, title: '' }
        ]
      },
      companyId: 'version10',
      url: ''
    },
    {
      id: nanoid(),
      name: '??cole des Ponts Paris Tech',
      slug: 'ponts',
      subtitle: 'School website',
      date: '2011',
      description: {
        fr: `<p>L'??cole des Ponts est une ??cole d'ing??nieurs fran??aise situ??e pr??s de Paris.</p>
      <p>J'ai travaill?? sur la refonte de leur site principal ainsi que sur diff??rents sites de l'??cole (intranet, biblioth??que, associations, newsletters ...).</p>
      <p>Mon r??le f??t la conception UX, la direction artistique ainsi que l'int??gration de ces maquettes en HTML/CSS.</p>`,
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
        cover: workPontsCover,
        screens: [
          { image: workPonts1, title: '' },
          { image: workPonts2, title: '' },
          { image: workPonts3, title: '' },
          { image: workPonts4, title: '' },
          { image: workPonts5, title: '' },
          { image: workPonts6, title: '' }
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
        fr: `Le projet consiste ?? cr??er une application en <a href="https://reactjs.org/" target="_blank">ReactJS</a> capable de g??n??rer un CV . La page se compose de plusieurs ??l??ments de contenu qui sont mise ?? jour en temps r??el avec l'entr??e de donn??es dans le formulaire par l'utilisateur. Il est install?? avec <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`,
        en: `The project is to create an app in <a href="https://reactjs.org/" target="_blank">ReactJS</a> that can generate a resume . The page consist of several content elements that gets updated with user input. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Bulma', 'Vite'],
      images: {
        cover: labCvappCover,
        screens: [labCvappScreenshot]
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
        fr: `Le projet est de construire une petite application de quizz en <a href="https://reactjs.org/" target="_blank">ReactJS</a>. On r??cup??re les questions ?? partir d'une API. Il est install?? avec <a href="https://vitejs.dev/" target="_blank">Vite.js</a>. `,
        en: `The project is to build a little quizz app in <a href="https://reactjs.org/" target="_blank">ReactJS</a>. It gets its questions from an API. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Bulma', 'Vite'],
      images: {
        cover: labQuizzyCover,
        screens: [labQuizzyScreenshot]
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
        fr: `Le projet est de construire un jeu de tenzies en utilisant <a href="https://reactjs.org/" target="_blank">ReactJS</a>`,
        en: `The project is to build a game of tenzies using <a href="https://reactjs.org/" target="_blank">ReactJS</a>. It is bootstraped with <a href="https://vitejs.dev/" target="_blank">Vite.js</a>.`
      },

      tech: ['React', 'HTML', 'SCSS', 'Vite'],
      images: {
        cover: labTenziesCover,
        screens: [labTenziesScreenshot]
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
        fr: `Le projet consiste ?? cr??er une version num??rique du c??l??bre jeu de l'<a href="https://en.wikipedia.org/wiki/Etch_A_Sketch" target="_blank">??cran magique</a> uniquement en utilisant HTML, CSS et Vanilla JS.`,
        en: `The project is to create a digital version of the game <a href="https://en.wikipedia.org/wiki/Etch_A_Sketch" target="_blank">Etch a Sketch</a> only using HTML, CSS and Vanilla JS.`
      },

      tech: ['HTML', 'CSS', 'Vanilla JS'],
      images: {
        cover: labEtchCover,
        screens: [labEtchScreenshot]
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
        fr: `Le projet consiste ?? cr??er un jeu de Tic Tac Toe en utilisant HTML, CSS et Vanilla JS.`,
        en: `The project is to create a Tic Tac Toe game using HTML, CSS and Vanilla JS.`
      },

      tech: ['HTML', 'CSS', 'Vanilla JS'],
      images: {
        cover: labTictactoeCover,
        screens: [labTictactoeScreenshot]
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
        fr: `<p>Ce projet consiste ?? cr??er une application m??t??o en utilisant diff??rentes API. L'application renvoie une pr??vision m??t??o pour un nom de ville fourni par l'utilisateur ainsi qu'un GIF associ?? ?? la m??t??o.</p>
        
        `,
        en: `<p>This project is to create an weather app using different API. The app return a weather forecast and a animated GIF for a provided city name.`
      },
      tech: ['Vanilla JS', 'Async/await', 'API calls', 'Giphy'],
      images: {
        cover: labWeatherCover,
        screens: [labWeatherScreenshot]
      },
      github: 'https://github.com/edesgree/odin-weather-app',
      preview: 'https://edesgree.github.io/odin-weather-app/dist/'
    }
  ],
  skills: [
    { id: nanoid(), name: 'HTML', slug: 'html', icon: skillsIconhtml },
    { id: nanoid(), name: 'SASS', slug: 'sass', icon: skillsIconsass },
    { id: nanoid(), name: 'Javascript', slug: 'js', icon: skillsIconjs },
    { id: nanoid(), name: 'React', slug: 'react', icon: skillsIconreact },
    { id: nanoid(), name: 'Git', slug: 'git', icon: skillsIcongit },
    { id: nanoid(), name: 'Figma', slug: 'figma', icon: skillsIconfigma },
    { id: nanoid(), name: 'Sketch', slug: 'sketch', icon: skillsIconsketch },
    { id: nanoid(), name: 'Photoshop', slug: 'psd', icon: skillsIconpsd },
    {
      id: nanoid(),
      name: 'Bootstrap',
      slug: 'bootstrap',
      icon: skillsIconbootstrap
    },
    {
      id: nanoid(),
      name: 'Foundation',
      slug: 'foundation',
      icon: skillsIconfoundation
    },
    {
      id: nanoid(),
      name: 'Wordpress',
      slug: 'wordpress',
      icon: skillsIconwordpres
    },
    { id: nanoid(), name: 'Magento', slug: 'magento', icon: skillsIconmagento },
    { id: nanoid(), name: 'LESS', slug: 'less', icon: skillsIconless },

    { id: nanoid(), name: 'Flask', slug: 'flask', icon: skillsIconflask },
    { id: nanoid(), name: 'Twig', slug: 'twig', icon: skillsIcontwig },
    { id: nanoid(), name: 'PHP', slug: 'php', icon: skillsIconphp },
    { id: nanoid(), name: 'Python', slug: 'python', icon: skillsIconpython },

    { id: nanoid(), name: 'VSCode', slug: 'vscode', icon: skillsIconvscode },
    { id: nanoid(), name: 'W3C', slug: 'w3c', icon: skillsIconw3c },
    { id: nanoid(), name: 'Jira', slug: 'jira', icon: skillsIconjira },
    { id: nanoid(), name: 'Trello', slug: 'trello', icon: skillsIcontrello },
    {
      id: nanoid(),
      name: 'Confluence',
      slug: 'confluence',
      icon: skillsIconconfluence
    }
  ],
  about: {
    text: {
      fr: `<p>Je suis actuellement bas?? ?? Nantes (fr). J'ai plus de 10 ans d'exp??rience et j'ai occup?? plusieurs postes dans l'industrie du web en Irlande, en France et au Canada. </p>
      <p>Je me consid??re comme un hybride entre code et design, j'aime pouvoir participer ?? la fois au processus de design et de d??veloppement. Mes exp??riences r??centes se sont principalement concentr??es sur le d??veloppement frontend. Je suis actuellement en train d'acqu??rir une expertise dans ReactJS.</p>
<p>Je suis disponible pour discuter d'un projet ou d'une nouvelle opportunit??.</p>`,
      en: `<p>I am based in Nantes (fr) at the moment. I have 10+ years of experience and worked in multiple jobs in the web industry in Ireland, France and Canada. </p>
      <p>I consider myself a hybrid between code and design, i love being able to participate in both design and development process. My recent experiences were mostly focus on frontend development. I am currently in the process of gaining expertise in ReactJS.</p>
<p>I am available to discuss a project or a new opportunity.</p>`
    },
    contactMe: {
      fr: 'Contactez-moi',
      en: `Let's talk!`
    }
  }
};

export default data;
