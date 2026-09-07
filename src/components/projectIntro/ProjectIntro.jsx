import { Fragment } from 'react';
import './ProjectIntro.css';

const ProjectIntro = ({ title, href, openLabel, paragraphs = [], stack = [] }) => {
  return (
    <section className='projectIntro'>
      <div className='flex-column projectIntro-content'>
        <div className='flex-row projectIntro-titleRow'>
          <h2 className='projectIntro-title'>{title}</h2>
          {href && (
            <a
              className='projectIntro-link'
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/images/icons/arrow-right-up.svg'
                alt={openLabel || ''}
                width='10'
                height='10'
              />
            </a>
          )}
        </div>

        {paragraphs.length > 0 && (
          <div className='flex-column projectIntro-body'>
            {paragraphs.map(paragraph => (
              <p
                key={paragraph}
                className='body'
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {stack.length > 0 && (
          <div className='flex-row projectIntro-stack'>
            {stack.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && (
                  <span
                    className='divider vertical'
                    aria-hidden='true'
                  />
                )}
                <span className='body'>{item}</span>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectIntro;
