import { PROYECT_LINKS } from '../../../../constants/informationLinks';

export const header = {
  title: 'TEÓRICO COCHE FÁCIL',
  subtitle: 'Be prepare for the driving theory exam',
  status: 'Active',
  statusKey: 'active',
  link: PROYECT_LINKS.teoricoFacil,

  bulletPoints: {
    title: 'PROJECT IMPACT',
    items: [
      <>
        <strong>Real platform</strong> used by over 1000 students.
      </>,
      <>
        <strong>Full architecture</strong> from design → frontend → backend →
        database.
      </>,
      <>
        <strong>Gamified map</strong> that enhances student motivation and
        progress.
      </>,
      <>
        <strong>Smart test system</strong> with real-time feedback or
        end-of-test corrections.
      </>,
      <>
        <strong>Scalable application</strong> built with React, Node, MongoDB,
        and Firebase.
      </>
    ]
  },

  description: (
    <>
      <strong>I designed and developed end-to-end</strong> a{' '}
      <strong>real educational platform</strong> for preparing the driving
      theory exam.
    </>
  ),
  goal: (
    <>
      <strong>The goal:</strong> to enhance student motivation and comprehension
      through gamification, microinteractions, and an interactive map.
    </>
  )
};
