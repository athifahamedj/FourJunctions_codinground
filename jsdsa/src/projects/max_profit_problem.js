import React, { useState } from 'react';

const buildings = [
  { name: 'T', time: 5, rate: 1500 },   
  { name: 'P', time: 4, rate: 1000 },   
  { name: 'C', time: 10, rate: 3000 }  
];

const MaxProfitCalculator = () => {
  const [inputTime, setInputTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateMaxProfit = () => {
    let maxProfit = 0;
    let bestCombo = [];

  
    const explore = (currentTime, totalTime, combo, finishTimes) => {
      let canBuild = false;

      for (let b of buildings) {
        if (currentTime + b.time <= totalTime) {
          canBuild = true;

          combo.push(b.name);
          finishTimes.push(currentTime + b.time);

          explore(currentTime + b.time, totalTime, combo, finishTimes);

          combo.pop();
          finishTimes.pop();
        }
      }

      if (!canBuild) {
        let earnings = 0;
        for (let i = 0; i < combo.length; i++) {
          const b = buildings.find(x => x.name === combo[i]);
          const activeTime = totalTime - finishTimes[i];
          earnings += activeTime * b.rate;
        }

        if (earnings > maxProfit) {
          maxProfit = earnings;
          bestCombo = [...combo];
        }
      }
    };

    const totalTime = parseInt(inputTime, 10);
    if (!isNaN(totalTime) && totalTime > 0) {
      explore(0, totalTime, [], []);
      const counts = { T: 0, P: 0, C: 0 };
      bestCombo.forEach(b => counts[b]++);
      setResult({
        T: counts.T,
        P: counts.P,
        C: counts.C,
        profit: maxProfit
      });
    } else {
      setResult(null);
    }
    if (totalTime > 50) {
        alert("Value too high! Try a number under 50.");
        return;
      }
      

  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem', maxWidth: '400px' }}>
      <h2>Pro Profit Planner</h2>
      <input
        type="number"
        placeholder="Enter total time"
        value={inputTime}
        onChange={e => setInputTime(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
    <button
    onClick={calculateMaxProfit}
    style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: '#2e7d32', 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}
    >
    Buy & Build
    </button>


      {result && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Best Combo:</strong></p>
          <p>Theatres (T): {result.T}</p>
          <p>Pubs (P): {result.P}</p>
          <p>Commercial Parks (C): {result.C}</p>
          <p><strong>Total Profit:</strong> ${result.profit}</p>
        </div>
      )}
    </div>
  );
};

export default MaxProfitCalculator;
