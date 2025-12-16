const featuresSlides = [
  {
    key: 'start',
    title: 'Digital learning',
    img: '/images/teoricoFacil/features1.png',
    description: [
      <>
        Definition of <strong>visual architecture</strong> and{' '}
        <strong>interaction patterns</strong> based on a{' '}
        <strong>custom design system</strong>: clear navigation, consistent
        visual hierarchy, and cross-screen coherence.
      </>,
      <>
        Frontend built with <strong>React</strong>, backend with{' '}
        <strong>Node.js</strong> and <strong>MongoDB</strong>, authentication
        via <strong>Firebase</strong>, and payment integration using{' '}
        <strong>Stripe</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Learning outcome: structuring a <strong>complete product</strong>, from
        data modeling and <strong>scalable endpoints</strong> to global state
        management connected to the backend and a{' '}
        <strong>reusable, maintainable UI</strong>.
      </>
    )
  },
  {
    key: 'medals',
    title: 'Gamified interactive map',
    img: '/images/teoricoFacil/features2.png',
    description: [
      <>
        Creation of a <strong>guided visual flow</strong> with clear states,
        recognizable milestones, and <strong>always-visible progress</strong>{' '}
        for the user.
      </>,
      <>
        Implementation of <strong>unlock logic</strong> using{' '}
        <strong>React + Context</strong>, synchronized in real time with{' '}
        <strong>MongoDB</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Management of <strong>complex dependent states</strong>
        (progress → medals → unlocks) through a{' '}
        <strong>centralized function</strong>, avoiding inconsistencies and
        duplicated logic.
      </>
    )
  },
  {
    key: 'unlock',
    title: 'Gamification system',
    img: '/images/teoricoFacil/features3.png',
    description: [
      <>
        Visual reward system that encourages <strong>performance</strong>{' '}
        without creating friction or <strong>cognitive overload</strong>.
      </>,
      <>
        <strong>Accumulation and unlock system</strong> connected to the
        backend, with <strong>immediate user state updates</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Definition of <strong>robust rules and validations</strong>: exploit
        prevention, condition control, and state coordination across{' '}
        <strong>multiple views</strong>.
      </>
    )
  },
  {
    key: 'test',
    title: 'Smart test correction',
    img: '/images/teoricoFacil/features4.png',
    description: [
      <>
        Two differentiated correction modes (<strong>immediate feedback</strong>{' '}
        vs <strong>exam mode</strong>), adapted to different learning styles.
      </>,
      <>
        Centralized correction module built with <strong>Context</strong>,
        distributing results and state across the entire application.
      </>
    ],
    apprenticeship: (
      <>
        Key learning: avoiding <strong>“spaghetti state”</strong> by creating a{' '}
        <strong>single source of truth</strong> for all evaluation logic.
      </>
    )
  },
  {
    key: 'responsive',
    title: '360º responsive design',
    img: '/images/teoricoFacil/features5.png',
    description: [
      <>
        Definition of <strong>functional breakpoints</strong>, adapted to
        content rather than simple visual scaling.
      </>,
      <>
        <strong>Fluid and adaptive components</strong> built with{' '}
        <strong>Styled Components</strong> and clearly structured media queries.
      </>
    ],
    apprenticeship: (
      <>
        Detection and resolution of{' '}
        <strong>real-world responsiveness issues</strong>, building a{' '}
        <strong>stable and predictable system</strong> for any screen size.
      </>
    )
  },
  {
    key: 'theory',
    title: 'Theory + topic-based statistics',
    img: '/images/teoricoFacil/features6.png',
    description: [
      <>
        Clear visualization of user knowledge, showing which topics the user{' '}
        <strong>masters</strong> and which ones need{' '}
        <strong>reinforcement</strong>.
      </>,
      <>
        Consumption of <strong>dynamic data</strong> from the backend: progress,
        accuracy, time spent, and user level.
      </>
    ],
    apprenticeship: (
      <>
        Transformation of <strong>complex data</strong> into useful, renderable,
        and optimized metrics without compromising <strong>performance</strong>.
      </>
    )
  },
  {
    key: 'design',
    title: 'Clean, user-centered design',
    img: '/images/teoricoFacil/features7.png',
    description: [
      <>
        <strong>Clear, accessible, and consistent interfaces</strong>, based on
        a <strong>design system</strong> to ensure visual coherence and
        component reusability.
      </>,
      <>
        End-to-end architecture from wireframes to backend: UI → components →
        logic → persistence, using hooks, modules, and{' '}
        <strong>pure functions</strong>.
      </>
    ],
    apprenticeship: (
      <>
        Learning outcome: building{' '}
        <strong>scalable and maintainable code</strong>, separating logic from
        presentation, with <strong>decoupled components</strong> and
        feature-based organization.
      </>
    )
  }
];

export const features = {
  featuresSlides: featuresSlides,
  caption: 'Swipe to discover Teórico’s key features'
};
