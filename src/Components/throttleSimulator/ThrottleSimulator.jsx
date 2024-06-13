import React, { useState } from 'react';
import './App.css';

function ThrottleSimulator() {
  const [throttle, setThrottle] = useState(0);

  const handleSliderChange = (event) => {
    setThrottle(event.target.value);
  };

  const needleStyle = {
    transform: `rotate(${throttle * 1.8 - 90}deg)`, // Convert 0-100 to -90 to 90 degrees
  };

  return (
    <div className="App">
      <h1>Throttle Simulator</h1>
      <div className="throttle-container">
        <label htmlFor="throttle-slider">Throttle</label>
        <input
          type="range"
          id="throttle-slider"
          min="0"
          max="100"
          value={throttle}
          onChange={handleSliderChange}
        />
      </div>
      <div className="speedometer-container">
        <svg viewBox="0 0 200 100" className="speedometer">
          <circle cx="100" cy="100" r="90" className="speedometer-bg" />
          <g className="speedometer-marks">
            {[...Array(11)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="20"
                transform={`rotate(${i * 18 - 90} 100 100)`}
              />
            ))}
          </g>
          <line x1="100" y1="100" x2="100" y2="20" className="needle" style={needleStyle} />
        </svg>
        <div className="speed-label">Speed: {throttle}</div>
      </div>
    </div>
  );
}

export default ThrottleSimulator;