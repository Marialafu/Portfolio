import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/LanguageContext';
import PreviewFan from '../previewFan/PreviewFan';
import './ProjectCard.css';

const ProjectCard = ({
  preview,
  title,
  description,
  stack = [],
  path
}) => {
  const { text } = useContext(LanguageContext);
  const Card = path ? Link : 'article';
  const cardProps = path ? { to: path } : {};

  return (
    <Card
      className='flex-column large-gap center projectCard'
      {...cardProps}
    >
      <PreviewFan
        left={preview.left}
        center={preview.center}
        right={preview.right}
        leftAlt={preview.leftAlt}
        centerAlt={preview.centerAlt}
        rightAlt={preview.rightAlt}
      />

      <div className='flex-column center projectCard-info'>
        <div className='flex-column center projectCard-copy'>
          <h3 className='subtitle-2'>{title}</h3>
          <p className='body'>{description}</p>
        </div>

        {stack.length > 0 && (
          <div className='flex-row center projectCard-stack'>
            {stack.map((icon, i) => (
              <Fragment key={icon.src}>
                {i > 0 && (
                  <span
                    className='divider vertical'
                    aria-hidden='true'
                  />
                )}
                <img
                  className='projectCard-icon'
                  src={icon.src}
                  alt={icon.alt || ''}
                />
              </Fragment>
            ))}
          </div>
        )}
      </div>

      <span className='button secondary'>{text.common.buttons.knowMore}</span>
    </Card>
  );
};

export default ProjectCard;
