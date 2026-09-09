import './TeoricoProgress.css';

const TeoricoProgress = ({ paragraphs = [] }) => {
  return (
    <section className='teoricoProgress'>
      <div className='flex-column teoricoProgress-content'>
        {paragraphs.map(paragraph => (
          <p key={paragraph} className='body'>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default TeoricoProgress;
