import { Fragment } from 'react';

export const dictionary = {
  es: {
    header: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      works: 'Proyectos',
      contact: 'Contáctame',
      gh: 'Perfil de Github',
      port: 'Portafolio',
    },
    home: {
      title: 'Hola, yo soy ',
      subtitle: 'Soy un',
      rol: 'Desarrollador Front End',
      cv: 'Revisa mi CV',
    },
    about: [
      <Fragment key={1}>
        Soy una persona <strong className='strong'>Motivada </strong> y{' '}
        <strong className='strong'> Versátil</strong>, siempre con ganas de
        afrontar nuevos retos. Me dedico a brindar resultados de alta calidad.
      </Fragment>,
      <Fragment key={2}>
        Con una <strong className='strong'>Actitud</strong> positiva y una
        mentalidad de crecimiento, estoy listo para hacer una contribución
        significativa y lograr grandes cosas.
      </Fragment>,
      <Fragment key={3}>
        Mi método de <strong className='strong'>Trabajo</strong> se basa en la
        cooperación y en la organización, sin dejar de lado la eficiencia.
      </Fragment>,
      <Fragment key={4}>
        Me gusta <strong className='strong'>Aprender</strong> cosas nuevas todos
        los días, para renovar mis maneras de trabajar y ser capaz de encontrar
        la mejor solución.
      </Fragment>,
    ],
    skill: {
      skills: 'Habilidades',
    },
    works: {
      title: 'Proyectos',
      view: 'Ver Proyecto',
    },
    contact: {
      email: 'Tu Email',
      name: 'Tu Nombre',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
      success: '¡Email enviado con éxito!',
    },
    footer: {
      copy: ' Todos los derechos reservados',
    },
  },
  en: {
    header: {
      about: 'About Me',
      skills: 'Skills',
      works: 'Projects',
      contact: 'Contact Me',
      gh: 'Github Profile',
      port: 'Portfolio',
    },
    home: {
      title: 'Hi, I am',
      subtitle: 'I am a',
      rol: 'Front End Developer',
      cv: 'Check my CV',
    },
    about: [
      <Fragment key={1}>
        I am a <strong className='strong'>motivated </strong> and{' '}
        <strong className='strong'> versatile</strong> person, always eager to
        face new challenges. I am dedicated to providing high quality results.
      </Fragment>,
      <Fragment key={2}>
        With a positive <strong className='strong'>attitude</strong> and growth
        mindset, I am ready to make a meaningful contribution and achieve great
        things.
      </Fragment>,
      <Fragment key={3}>
        My <strong className='strong'>work</strong> method is based on
        cooperation and organization, without neglecting efficiency.
      </Fragment>,
      <Fragment key={4}>
        I like to <strong className='strong'>learn</strong> new things every
        day, to renew my ways of working and be able to find the best solution.
      </Fragment>,
    ],
    skill: {
      skills: 'Skills',
    },
    works: {
      title: 'Projects',
      view: 'View Project',
    },
    contact: {
      email: 'Your Email',
      name: 'Your Name',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      success: 'Email sent successfully!',
    },
    footer: {
      copy: ' All rights reserved',
    },
  },
};
