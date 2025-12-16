import './Marquee.css';
import { useEffect, useRef, useState } from 'react';

const Marquee = ({ stack }) => {
  const items = Object.values(stack);
  const loop = [...items, ...items];

  const contentRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const totalWidth = contentRef.current.scrollWidth;
    setDistance(totalWidth / 2);
  }, [items]);

  return (
    <div className='marquee-container'>
      <div
        className='marquee-content'
        ref={contentRef}
        style={{ '--marquee-distance': `-${distance}px` }}
      >
        {loop.map((item, i) => (
          <div
            className='stack-item'
            key={i}
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.name}
              />
            )}

            <span className='body'>{item.name}</span>
            {i < loop.length - 1 && <div className='divider' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
