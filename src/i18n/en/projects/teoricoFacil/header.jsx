import { PROYECT_LINKS } from '../../../../constants/informationLinks';

export const header = {
  title: 'TEÓRICO COCHE FÁCIL',
  subtitle: 'Prepare for the driving theory exam',
  status: 'Active',
  statusKey: 'active',
  link: PROYECT_LINKS.teoricoFacil,

  bulletPoints: {
    title: 'PROJECT IMPACT',
    items: [
      <>
        <strong>Real user-centered platform</strong> used by +5000 students,
        <strong>enhancing the learning experience in this sector</strong>.
      </>,
      <>
        <strong>Complete information architecture</strong>
        <strong>with clear flows and intuitive hierarchy</strong> to make
        navigation easier.
      </>,
      <>
        <strong>Gamified map</strong> that motivates users and
        <strong>visualizes their progress</strong> interactively.
      </>,
      <>
        <strong>Smart testing system</strong> designed to provide immediate
        feedback and improve student comprehension.
      </>,
      <>
        <strong>Scalable and consistent design</strong> with responsive
        interfaces and reusable components, ensuring coherence across the
        application.
      </>
    ]
  },

  description: (
    <>
      <strong>
        Needs analysis → User flow → Design system creation → Wireframe design →
        Screen flows → Prototyping
      </strong>
    </>
  ),
  goal: (
    <>
      <strong>The goal:</strong> improve student motivation and understanding
      through gamification, microinteractions, and an interactive progress map.
    </>
  )
};
