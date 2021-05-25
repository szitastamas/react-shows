import React, { useEffect, useRef } from 'react';

interface IProps {
  summary: string;
}
const Summary: React.FC<IProps> = ({ summary }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML =
        !summary || summary.length === 0
          ? '<p style="font-style: italic;">No summary available</p>'
          : summary;
    }
  }, [descriptionRef]);
  return <div className='movie-description' ref={descriptionRef}></div>;
};

export default Summary;
