import React, { useState } from 'react';

const WaterTankProblem = () => {
  const [input, setInput] = useState('');
  const [blocks, setBlocks] = useState([]);
  const [water, setWater] = useState([]);
  const [totalWater, setTotalWater] = useState(0);

  const calculateWater = () => {
    const heights = input.split(',').map(Number);
    const n = heights.length;
    const leftMax = Array(n).fill(0);
    const rightMax = Array(n).fill(0);
    const waterTrapped = Array(n).fill(0);

    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
      waterTrapped[i] = Math.max(0, Math.min(leftMax[i], rightMax[i]) - heights[i]);
      total += waterTrapped[i];
    }

    setBlocks(heights);
    setWater(waterTrapped);
    setTotalWater(total);
  };

  const maxHeight = Math.max(...blocks, ...water);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Water Tank Problem</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter block heights, e.g. 0,4,0,0,0,6"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={calculateWater} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Calculate
      </button>

      {blocks.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px', gap: '5px' }}>
            {blocks.map((block, i) => (
              <div key={i} style={{ position: 'relative', width: '20px' }}>
                <div
                  style={{
                    height: `${block * 20}px`,
                    backgroundColor: 'yellow',
                    width: '100%',
                    position: 'absolute',
                    bottom: '0',
                    zIndex: 2,
                  }}
                ></div>
                <div
                  style={{
                    height: `${water[i] * 20}px`,
                    backgroundColor: 'blue',
                    width: '100%',
                    position: 'absolute',
                    bottom: `${block * 20}px`,
                    zIndex: 1,
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>Total Water Stored: <strong>{totalWater}</strong> units</div>
        </div>
      )}
    </div>
  );
};

export default WaterTankProblem;
