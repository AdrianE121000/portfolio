import { BsGithub, BsTerminalFill } from 'react-icons/bs';
import { ImGit, ImHtmlFive } from 'react-icons/im';
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
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
        image: <TbBrandNextjs size={24} />,
      },
      {
        name: 'Astro',
        image: (
          <svg
            viewBox='0 0 256 366'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            preserveAspectRatio='xMidYMid'>
            <path
              fill='#fff'
              d='M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z'
            />
            <path
              fill='#FF5D01'
              d='M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z'
            />
          </svg>
        ),
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
        name: 'TypeScript',
        image: <SiTypescript color='#007acc' />,
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
    image: '/learndDeals.webp',
    tags: ['React', 'Tailwind', 'Python'],
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
    image: '/quiz-app.webp',
    tags: ['React', 'Zustand', 'MaterialUI'],
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
    image: '/user-manager.webp',
    tags: ['React', 'Zustand', 'Tailwind'],
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
    image: '/todo_app.webp',
    tags: ['React', 'Tailwindcss'],
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
    image: '/crypto_market.webp',
    tags: ['React', 'Material UI'],
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
    image: '/tic-tac-toe.webp',
    tags: ['React'],
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
    image: '/countries-world.webp',
    tags: ['React'],
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
