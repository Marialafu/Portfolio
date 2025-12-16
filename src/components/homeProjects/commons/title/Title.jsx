import './Title.css';

const Title = ({ title, subtitle, status, statusKey }) => {
  return (
    <div className='title-container'>
      <div className='flex-row space-between'>
        {' '}
        <h2 className='heading-2'>{title}</h2>
        <div
          className='status-label-container'
          statuskey={statusKey}
        >
          <span className=' status-label'>{status}</span>
        </div>
      </div>

      <p className='subtitle-1'>{subtitle}</p>
    </div>
  );
};

export default Title;
