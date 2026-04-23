export default {
  global: {
    Name: 'Interacción con clientes para el proceso de venta',
    Description:
      'El entorno digital ha propuesto nuevas maneras de desarrollar los procesos cotidianos y las ventas no son la excepción. Entender las dinámicas de interacción de los clientes para llevar a cabo el plan de acción más adecuado, desde la redacción de un texto de interés hasta la generación de una base de datos después de un proceso de fidelización, es todo un esquema que debe apreciarse para llevar a cabo una venta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Qué es una venta y tipos de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de venta ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Canales de venta ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<em>Social selling</em>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación asertiva con clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Redacción para medios de comunicación digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases para un plan de medios digitales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción al CRM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Fidelización y mantenimiento de servicio al cliente en las redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Implementación de bases de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Generación de una base de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Trazabilidad del servicio',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA5_124108_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  glosario: [
    {
      termino: '<em>E-commerce</em>',
      significado:
        'Método de compra y venta de productos a través de entornos digitales.',
    },
    {
      termino: 'Fidelización',
      significado: 'Proceso de generar lealtad y confianza.',
    },
    {
      termino: '<em>Lead</em>',
      significado: 'Cliente potencial.',
    },
    {
      termino: '<em>Social selling</em>',
      significado:
        'Uso de las redes sociales para atraer a los prospectos comerciales de una marca, con el fin de generar ventas con públicos objetivos.',
    },
    {
      termino: '<em>Target</em>',
      significado: 'Público objetivo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariño, J. (2018). <em>Ventas para emprendedores: Todo lo que necesitas saber.</em> ECOE.',
      link: '',
    },
    {
      referencia:
        'Ariza, F., y Ariza, J. (2014). <em>Comunicación empresarial y atención al cliente.</em> McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Contreras, N. (2019, 12 de marzo). <em>Social selling: La guía de ventas en redes sociales.</em> Hootsuite.',
      link:
        'https://blog.hootsuite.com/es/social-selling-venta-en-redes-sociales/#:%7E:text=El%20social%20selling%20es%20el,significativas%20con%20los%20clientes%20potenciales',
    },
    {
      referencia:
        'Creatiburón. (2016, 10 de octubre). <em>Fidelización de clientes: te doy la receta para conseguir clientes leales.</em>',
      link: 'https://www.creatiburon.com/fidelizacion-de-clientes/ ',
    },
    {
      referencia:
        'García, B., y Gutiérrez, A. (2013). <em>Marketing de fidelización</em> (1.ª ed.). Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Hotmart. (2021, 28 de abril). <em>Canales de venta: ¿cuáles son los más eficientes hoy en día?</em>',
      link:
        'https://blog.hotmart.com/es/canales-de-venta/#:%7E:text=Los%20canales%20de%20venta%20son,con%20el%20negocio%20que%20ofreces',
    },
    {
      referencia:
        'IMF Business School. (2020, 22 de junio). <em>Redacción en medios digitales: El reto para los Marketers.</em>',
      link: '',
    },
    {
      referencia:
        'Leadera Marketing Solutions. (2018, 19 de octubre). <em>Sistemas para mantener la trazabilidad de leads.</em>',
      link: '',
    },
    {
      referencia:
        'Muente, G. (2018, 22 de mayo). <em>Tipos de ventas: ¿cuáles existen y en qué se distinguen?</em> Rock Content.',
      link: 'https://rockcontent.com/es/blog/tipos-de-ventas/',
    },
    {
      referencia:
        'Pastrana, C. (2014, 10 de febrero). <em>Cómo escribir en Internet: técnicas de redacción periodística.</em> IEBS.',
      link:
        'https://www.iebschool.com/blog/redaccion-medios-online-comunicacion-digital/',
    },
    {
      referencia:
        'RD Station. (s.f.). <em>Ventas: estrategias, técnicas y todo lo que necesitas saber.</em>',
      link: '',
    },
    {
      referencia:
        'Soria, M. (2016). <em>Plan de medios de comunicación e Internet</em> (1.ª ed.). CEP.',
      link: '',
    },
    {
      referencia:
        'Tenebit. (2020, 7 de enero). <em>3 Pilares para implementar un CRM exitoso en tu empresa.</em>',
      link: '',
    },
    {
      referencia:
        'Zendesk. (2020, 29 de septiembre). <em>Conoce las 7 etapas del proceso de ventas.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Maria Camila Álvarez',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional - Antioquia',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional - Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Jessica Moreno Realpe',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
