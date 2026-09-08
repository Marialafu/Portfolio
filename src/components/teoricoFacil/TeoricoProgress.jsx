import './TeoricoProgress.css';

const TeoricoProgress = ({ paragraphs = [], goals = [], closing = [] }) => {
  return (
    <section className='teoricoProgress'>
      <div className='flex-column teoricoProgress-content'>
        <div className='flex-column teoricoProgress-body'>
          {paragraphs.map(paragraph => (
            <p key={paragraph} className='body'>
              {paragraph}
            </p>
          ))}
          <ul className='flex-column teoricoProgress-goals'>
            {goals.map(goal => (
              <li key={goal} className='body'>
                {goal}
              </li>
            ))}
          </ul>
          {closing.map(paragraph => (
            <p key={paragraph} className='body'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeoricoProgress;
