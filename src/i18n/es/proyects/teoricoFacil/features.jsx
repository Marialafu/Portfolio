const featuresSlides = [
  {
    key: 'start',
    title: 'Aprendizaje digital',
    img: '/images/teoricoFacil/features1.png',
    description: [
      <>
        Arquitectura visual y patrones de interacción:{' '}
        <strong>navegación</strong>, <strong>jerarquía</strong> y{' '}
        <strong>coherencia UI</strong>.
      </>,
      <>
        Desarrollo end-to-end: frontend <strong>React</strong>, backend{' '}
        <strong>Node</strong> + <strong>MongoDB</strong>, auth{' '}
        <strong>Firebase</strong>, pagos <strong>Stripe</strong>
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: Cómo estructurar un proyecto completo: modelos de datos,
        endpoints <strong>escalables</strong>, estado global conectado a backend
        y <strong>UI reusable</strong>.
      </>
    )
  },
  {
    key: 'medals',
    title: 'Mapa interactivo gamificado',
    img: '/images/teoricoFacil/features2.png',
    description: [
      <>
        Diseño: <strong>Flujo visual</strong> con paradas y estados claros,
        <strong>progreso visible</strong>.
      </>,
      <>
        Desarrollo: <strong>Lógica de desbloqueo</strong> con{' '}
        <strong>React + Context</strong> sincronizada con MongoDB.
      </>
    ],
    apprenticeship: (
      <>
        Gestionar <strong>estados dependientes</strong> (progreso →{' '}
        <strong>medallas</strong> → <strong>desbloqueos</strong>) con{' '}
        <strong>función centralizada</strong> evitando inconsistencias.
      </>
    )
  },
  {
    key: 'unlock',
    title: 'Sistema de gamificación',
    img: '/images/teoricoFacil/features3.png',
    description: [
      <>
        Diseño: sistema de tornillos que recompensa el{' '}
        <strong>rendimiento</strong> sin <strong>saturar</strong> al usuario.
      </>,
      <>
        Desarrollo: <strong>acumulación y desbloqueo</strong> con backend +{' '}
        <strong>actualización en tiempo real</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: crear <strong>reglas y validaciones robustas</strong>:
        evitar <strong>exploits</strong>, controlar condiciones y coordinar
        estados en <strong>varias pantallas</strong>.
      </>
    )
  },
  {
    key: 'test',
    title: 'Corrección inteligente de tests',
    img: '/images/teoricoFacil/features4.png',
    description: [
      <>
        Diseño: dos modos de corrección ( <strong>inmediata</strong> vs{' '}
        <strong>examen</strong>) según estilo de aprendizaje.
      </>,
      <>
        Desarrollo: módulo centralizado con <strong>Context</strong> que
        distribuye resultados a toda la app.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: evitar <strong>“spaghetti state”</strong> creando un{' '}
        <strong>único punto de control</strong> para toda la lógica de
        corrección.
      </>
    )
  },
  {
    key: 'responsive',
    title: 'Responsive 360º',
    img: '/images/teoricoFacil/features5.png',
    description: [
      <>
        Diseño: <strong>2 breakpoints</strong> adaptados, no solo escalados.
      </>,
      <>
        Desarrollo: componentes <strong>fluidos</strong> con Styled Components +
        media queries bien definidas.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: detectar y corregir{' '}
        <strong>problemas reales de responsividad</strong>, creando un sistema{' '}
        <strong>estable</strong> para cualquier tamaño.
      </>
    )
  },
  {
    key: 'theory',
    title: 'Teoría + Estadísticas por tema',
    img: '/images/teoricoFacil/features6.png',
    description: [
      <>
        Diseño: interfaz clara que muestra qué temas <strong>domina</strong> y
        cuáles <strong>reforzar</strong>.
      </>,
      <>
        Desarrollo: integración de <strong>datos dinámicos</strong> desde
        backend: progreso, aciertos, tiempo y nivel del usuario.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: transformar <strong>datos complejos</strong> en métricas
        útiles y renderizables sin afectar <strong>rendimiento</strong>.
      </>
    )
  },
  {
    key: 'design',
    title: 'Diseño limpio y centrado en el usuario',
    img: '/images/teoricoFacil/features7.png',
    description: [
      <>
        Diseño: interfaces <strong>claras</strong>, orden visual y componentes{' '}
        <strong>coherentes y reutilizables</strong>.
      </>,
      <>
        Desarrollo: arquitectura completa: wireframes → UI → componentes →
        lógica → backend → persistencia; módulos, hooks y{' '}
        <strong>funciones puras</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Aprendizaje: mantener código <strong>escalable</strong>: separar lógica
        de presentación, crear <strong>componentes desacoplados</strong> y
        organizar carpetas por <strong>funcionalidades</strong>.
      </>
    )
  }
];

export const features = {
  featuresSlides: featuresSlides,
  caption: 'Desliza para descubrir las cualidades de Teórico'
};
