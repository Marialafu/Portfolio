const featuresSlides = [
  {
    key: 'start',
    title: 'Aprendizaje digital',
    img: '/images/teoricoFacil/features1.png',
    description: [
      <>
        Definición de <strong>arquitectura visual</strong> y
        <strong> patrones de interacción</strong> basados en una{' '}
        <strong>guía de diseño propia</strong>: navegación clara, jerarquía
        visual consistente y coherencia entre pantallas.
      </>,
      <>
        Frontend en <strong>React</strong>, backend en <strong>Node.js</strong>{' '}
        con <strong>MongoDB</strong>, autenticación con{' '}
        <strong>Firebase</strong> e integración de pagos mediante{' '}
        <strong>Stripe</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: estructuración de un <strong>producto completo</strong>,
        desde el modelado de datos y endpoints <strong>escalables</strong>
        hasta la conexión del estado global con backend y una{' '}
        <strong>UI reutilizable y mantenible</strong>.
      </>
    )
  },
  {
    key: 'medals',
    title: 'Mapa interactivo gamificado',
    img: '/images/teoricoFacil/features2.png',
    description: [
      <>
        Creación de un <strong>flujo visual guiado</strong>, con estados claros,
        hitos reconocibles y <strong>progreso siempre visible</strong> para el
        usuario.
      </>,
      <>
        Implementación de <strong>lógica de desbloqueo</strong>
        mediante <strong>React + Context</strong>, sincronizada en tiempo real
        con <strong>MongoDB</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Gestión de <strong>estados dependientes complejos</strong>
        (progreso → medallas → desbloqueos) a través de una{' '}
        <strong>función centralizada</strong>, evitando inconsistencias y
        duplicación de lógica.
      </>
    )
  },
  {
    key: 'unlock',
    title: 'Sistema de gamificación',
    img: '/images/teoricoFacil/features3.png',
    description: [
      <>
        Sistema de recompensas visuales que incentiva el{' '}
        <strong>rendimiento</strong> sin generar fricción ni{' '}
        <strong>saturación cognitiva</strong>.
      </>,
      <>
        Sistema de <strong>acumulación y desbloqueo</strong>
        conectado a backend, con <strong>actualización inmediata</strong>
        del estado del usuario.
      </>
    ],
    apprenticeship: (
      <>
        Definición de <strong>reglas y validaciones robustas</strong>:
        prevención de exploits, control de condiciones y coordinación de estados
        a través de <strong>múltiples vistas</strong>.
      </>
    )
  },
  {
    key: 'test',
    title: 'Corrección inteligente de tests',
    img: '/images/teoricoFacil/features4.png',
    description: [
      <>
        Dos modos de corrección diferenciados (
        <strong>feedback inmediato</strong> vs <strong>modo examen</strong>)
        adaptados a distintos estilos de aprendizaje.
      </>,
      <>
        Módulo de corrección centralizado mediante <strong>Context</strong>,
        distribuyendo resultados y estado a toda la aplicación.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje clave: evitar el <strong>“spaghetti state”</strong>
        creando un <strong>único punto de control</strong> para toda la lógica
        de evaluación.
      </>
    )
  },
  {
    key: 'responsive',
    title: 'Responsive 360º',
    img: '/images/teoricoFacil/features5.png',
    description: [
      <>
        Definición de <strong>breakpoints funcionales</strong>, adaptados al
        contenido y no simples escalados visuales.
      </>,
      <>
        Componentes <strong>fluidos y adaptativos</strong>
        con <strong>Styled Components</strong> y media queries claramente
        estructuradas.
      </>
    ],
    apprenticeship: (
      <>
        Detección y resolución de{' '}
        <strong>problemas reales de responsividad</strong>, construyendo un
        sistema <strong>estable y predecible</strong>
        para cualquier tamaño de pantalla.
      </>
    )
  },
  {
    key: 'theory',
    title: 'Teoría + Estadísticas por tema',
    img: '/images/teoricoFacil/features6.png',
    description: [
      <>
        Visualización clara del conocimiento del usuario, mostrando qué
        contenidos <strong>domina</strong> y cuáles debe{' '}
        <strong>reforzar</strong>.
      </>,
      <>
        Consumo de <strong>datos dinámicos</strong> desde backend: progreso,
        aciertos, tiempo invertido y nivel del usuario.
      </>
    ],
    apprenticeship: (
      <>
        Transformación de <strong>datos complejos</strong> en métricas útiles,
        renderizables y optimizadas sin comprometer <strong>rendimiento</strong>
        .
      </>
    )
  },
  {
    key: 'design',
    title: 'Diseño limpio y centrado en el usuario',
    img: '/images/teoricoFacil/features7.png',
    description: [
      <>
        Interfaces <strong>claras, accesibles y consistentes</strong>, basadas
        en una <strong>guía de diseño</strong> para garantizar coherencia visual
        y reutilización de componentes.
      </>,
      <>
        Arquitectura completa desde wireframes hasta backend: UI → componentes →
        lógica → persistencia, utilizando hooks, módulos y{' '}
        <strong>funciones puras</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: creación de código <strong>escalable y mantenible</strong>,
        separando lógica y presentación, con componentes{' '}
        <strong>desacoplados</strong> y organización por{' '}
        <strong>funcionalidades</strong>.
      </>
    )
  }
];

export const features = {
  featuresSlides: featuresSlides,
  caption: 'Desliza para descubrir las cualidades de Teórico'
};
