import { useEffect, useRef, useState } from 'react';
import useIsDesktop from '../../../../hooks/responsive/responsive';
import './PreviewFan.css';

const MULTI_COLUMN_MIN = 800;

const PreviewFan = ({
  left,
  center,
  right,
  leftAlt = '',
  centerAlt = '',
  rightAlt = ''
}) => {
  const fanRef = useRef(null);
  const isMultiColumn = useIsDesktop(MULTI_COLUMN_MIN);
  const [isLifted, setIsLifted] = useState(false);

  useEffect(() => {
    if (isMultiColumn || !fanRef.current) {
      setIsLifted(false);
      return;
    }

    const node = fanRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsLifted(entry.isIntersecting),
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMultiColumn]);

  return (
    <div
      ref={fanRef}
      className={`previewFan${isLifted ? ' is-lifted' : ''}`}
    >
      <div
        className='previewFan-circle'
        aria-hidden='true'
      />
      <img
        className='previewFan-shot previewFan-shot--left'
        src={left}
        alt={leftAlt}
      />
      <img
        className='previewFan-shot previewFan-shot--right'
        src={right}
        alt={rightAlt}
      />
      <img
        className='previewFan-shot previewFan-shot--center'
        src={center}
        alt={centerAlt}
      />
    </div>
  );
};

export default PreviewFan;
