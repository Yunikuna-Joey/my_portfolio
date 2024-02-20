import React, { useState, useEffect } from 'react'; 

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Tachometer = () => {
  const [progress, setProgress] = useState(0);
  const [increment, setIncrement] = useState(2);

  // achieve the bouncing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // If progress is less than 100%, increment normally
        if (prevProgress < 90) {
          return prevProgress + increment;
        }
        // If progress is 100%, reverse the increment to create a bouncing effect
        setIncrement(-increment);
        return prevProgress + increment;
      });
    }, 100); // Adjust interval as needed

    return () => clearInterval(interval);
  }, [increment]);
  
  return (
    <div className='custom-prog-bar'>
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={10}
        styles={buildStyles({
          textSize: '30px',
          pathTransitionDuration: 0.3,
          textColor: '#FF5733',
          pathColor: '#7852A9',
          trailColor: '#f3f3f3',
        })}
      >
        <div style={{ fontSize: 30, marginTop: -5 }}>{`${progress}%`}</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Tachometer;