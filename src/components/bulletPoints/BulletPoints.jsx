import { v4 } from 'uuid';
import './BulletPoints.css';

const BulletPoints = ({ title, bulletPoints }) => {
  return (
    <div className='bullets-container'>
      <h3 className='body-highlights'>{title}</h3>
      <ul className='bullets-wrapper'>
        {bulletPoints.map(item => (
          <li
            key={v4()}
            className='body'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
