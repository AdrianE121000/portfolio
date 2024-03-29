import { BsGithub, BsTerminalFill } from 'react-icons/bs';
import { ImGit, ImHtmlFive } from 'react-icons/im';
import {
  SiCss3,
  SiJavascript,
  SiMarkdown,
  SiNotion,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const Bio = {
  name: 'Adrian Pérez',
  github: 'https://github.com/adriane121000',
  linkedin: 'https://www.linkedin.com/in/adrian-p%C3%A9rez-441ba3264',
  twitter: 'https://twitter.com/AdrianE121000',
  insta: 'https://www.instagram.com/adri_perez1210/',
  telegram: 'https://t.me/AdrianE121000',
  cv: 'https://resume.io/r/YqbqbmAP1',
};

export const skills = [
  {
    title: {
      es: 'Tecnologías',
      en: 'Technologies',
    },
    skills: [
      {
        name: 'React Js',
        image: <SiReact color='#61dafb' />,
      },
      {
        name: 'Nextjs',
        image: <TbBrandNextjs />,
      },
      {
        name: 'HTML',
        image: <ImHtmlFive color='#e56027' />,
      },
      {
        name: 'CSS',
        image: <SiCss3 color='#2760e5' />,
      },
      {
        name: 'JavaScript',
        image: <SiJavascript color='#ead41c' />,
      },
      {
        name: 'Tailwindcss',
        image: <SiTailwindcss color='#38b2ac' />,
      },
    ],
  },
  {
    title: {
      es: 'Herramientas',
      en: 'Tools',
    },
    skills: [
      {
        name: 'Terminal',
        image: <BsTerminalFill color='#efefef' />,
      },
      {
        name: 'GitHub',
        image: <BsGithub color='#7e46d4' />,
      },
      {
        name: 'Git',
        image: <ImGit color='#f14e32' />,
      },
      {
        name: 'Notion',
        image: <SiNotion color='#efe' />,
      },
      {
        name: 'Markdown',
        image: <SiMarkdown color='#259fe9' />,
      },
      {
        name: 'VS Code',
        image: <SiVisualstudiocode color='#007acc' />,
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: 'learnDeals',
    description: {
      es: 'Blog donde se publican diferentes cursos con promociones de descuento de Udemy, el usuario puede filtrar por nombre y categoría, se utiliza una API para obtener los datos del curso.',
      en: 'Blog where different courses with Udemy discount promotions are posted, the user can filter by name and category, an API is used to obtain the course data.',
    },
    image:
      'https://github.com/AdrianE121000/portfolio/blob/master/public/learndDeals.jpg?raw=true',
    tags: ['React', 'API', 'Tailwind', 'Python'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
      {
        name: 'Enmanuel Torres',
        github: 'https://github.com/manu-tgz',
        img: 'https://unavatar.io/manu-tgz',
      },
    ],
    webapp: 'https://learndeals.netlify.app/',
  },
  {
    id: 1,
    title: 'Quiz App',
    description: {
      es: 'Aplicación web que permite a los usuarios hacer un quiz para medir sus habilidades en distintos lenguages de programacion (por ahora solo JavaScript y Python uqeda pendiente agregar otros) ',
      en: 'Web application that allows users to take a quiz to measure their skills in different programming languages ​​(for now only JavaScript and Python, others pending to be added)',
    },
    image: 'https://adriane121000.github.io/portfolio/quiz-app.jpg',
    tags: ['React', 'Zustand', 'MaterialUI', 'State'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/javascript-quizz',
  },
  {
    id: 2,
    title: 'User Manager',
    description: {
      es: 'Aplicación web que permite mostrar, agregar, eliminar y editar usuarios, así como tambíen obtener usuarios aleatorios de una API, guarda todos los usuarios en el localStorage, tambíen cuenta con una paginación y modo claro y oscuro para mejorar la experiencia del usuario.',
      en: 'Web application that allows you to show, add, delete and edit users, as well as obtain random users from an API, saves all users in the localStorage, also has pagination and light and dark mode to improve the user experience.',
    },
    image: 'https://adriane121000.github.io/portfolio/user-manager.jpg',
    tags: ['React', 'Zustand', 'Tailwind', 'Fetch'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/user-crud',
  },
  {
    id: 3,
    title: 'Todo App',
    description: {
      es: 'Aplicación web que permite a los usuarios agregar diferentes tareas, así como seleccionar aquellas que han sido completadas y filtrarlas según su estado (completadas o no completadas)',
      en: 'Web application that allows users to add different tasks, as well as select those that have been completed and filter them according to their status (completed or not completed) ',
    },
    image: 'https://adriane121000.github.io/portfolio/todo_app.jpg',
    tags: ['React', 'Tailwindcss', 'Context', 'State'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/todo-app',
  },
  {
    id: 4,
    title: 'Crypto Market',
    description: {
      es: 'Aplicación web que muestra un listado de los precios de las criptomonedas. Se utiliza la API de CoinGecko para obtener datos actualizados sobre los precios de las criptomonedas y se muestran en un formato fácil de entender para los usuarios.',
      en: 'Web application that shows a list of cryptocurrency prices. The CoinGecko API is used to obtain up-to-date data on cryptocurrency prices and display them in an easy-to-understand format for users.',
    },
    image: 'https://adriane121000.github.io/portfolio/crypto_market.jpg',
    tags: ['React', 'API', 'Material UI', 'State'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/crypto-market',
  },

  {
    id: 5,
    title: 'Tic Tac Toe',
    description: {
      es: 'Aplicacion web sencilla que te permite disfrutar del juego tres en raya desde tu navegador. Ademas, puedes guardar la partida en el localStorage para continuar mas tarde.(Pendiente modalidad 1 vs IA)',
      en: 'Simple web application that allows you to enjoy the game tic tac toe from your browser. Additionally, you can save the game in the localStorage to continue later. (Pending modality 1 vs AI)',
    },
    image: 'https://adriane121000.github.io/portfolio/tic-tac-toe.jpg',
    tags: ['React', 'localStorage', 'State'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/tic-tac-toe',
  },
  {
    id: 6,
    title: 'CountryInfo',
    description: {
      es: 'Aplicación web que permite a los usuarios buscar cualquier país y acceder instantáneamente a información detallada como población, capital, moneda y más. Simplemente ingresa el nombre del país en la barra de búsqueda, y nuestra aplicación obtendrá los datos de una API externa para proporcionarte todos los detalles relevantes. ¡Explora el mundo al alcance de tus dedos con CountryInfo!',
      en: 'Web application that allows users to search for any country and instantly access detailed information such as population, capital, currency and more. Simply enter the country name in the search bar, and our app will pull the data from an external API to provide you with all the relevant details. Explore the world at your fingertips with CountryInfo!',
    },
    image: 'https://adriane121000.github.io/portfolio/countries-world.jpg',
    tags: ['React', 'API', 'State', 'useRef'],
    member: [
      {
        name: 'Adrian Pérez',
        github: 'https://github.com/AdrianE121000',
        img: 'https://unavatar.io/AdrianE121000',
      },
    ],
    webapp: 'https://adriane121000.github.io/countries-world',
  },
];
