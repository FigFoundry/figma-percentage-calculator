import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [percentageOfValue1, setPercentageOfValue1] = useState<number | null>(null);
  const [percentageOfValue2, setPercentageOfValue2] = useState<number | null>(null);
  const [percentageOfResult, setPercentageOfResult] = useState<number | null>(null);

  const [whatIsValue1, setWhatIsValue1] = useState<number | null>(null);
  const [whatIsValue2, setWhatIsValue2] = useState<number | null>(null);
  const [whatIsResult, setWhatIsResult] = useState<number | null>(null);

  const [isWhatValue1, setIsWhatValue1] = useState<number | null>(null);
  const [isWhatValue2, setIsWhatValue2] = useState<number | null>(null);
  const [isWhatResult, setIsWhatResult] = useState<number | null>(null);

  const [isOfWhatValue1, setIsOfWhatValue1] = useState<number | null>(null);
  const [isOfWhatValue2, setIsOfWhatValue2] = useState<number | null>(null);
  const [isOfWhatResult, setIsOfWhatResult] = useState<number | null>(null);

  const [differenceValue1, setDifferenceValue1] = useState<number | null>(null);
  const [differenceValue2, setDifferenceValue2] = useState<number | null>(null);
  const [differenceResult, setDifferenceResult] = useState<number | null>(null);

  const [changeValue1, setChangeValue1] = useState<number | null>(null);
  const [changeValue2, setChangeValue2] = useState<number | null>(null);
  const [changeResult, setChangeResult] = useState<number | null>(null);
  const [isIncrease, setIsIncrease] = useState<boolean>(true);

  const calculatePercentageOf = () => {
    if (percentageOfValue1 !== null && percentageOfValue2 !== null) {
      setPercentageOfResult((percentageOfValue1 / 100) * percentageOfValue2);
    }
  };

  const calculateWhatIs = () => {
    if (whatIsValue1 !== null && whatIsValue2 !== null) {
      setWhatIsResult((whatIsValue1 / 100) * whatIsValue2);
    }
  };

  const calculateIsWhat = () => {
    if (isWhatValue1 !== null && isWhatValue2 !== null) {
      setIsWhatResult((isWhatValue1 / isWhatValue2) * 100);
    }
  };

  const calculateIsOfWhat = () => {
    if (isOfWhatValue1 !== null && isOfWhatValue2 !== null) {
      setIsOfWhatResult((isOfWhatValue1 / isOfWhatValue2) * 100);
    }
  };

  const calculateDifference = () => {
    if (differenceValue1 !== null && differenceValue2 !== null) {
      setDifferenceResult(((differenceValue2 - differenceValue1) / Math.abs(differenceValue1)) * 100);
    }
  };

  const calculateChange = () => {
    if (changeValue1 !== null && changeValue2 !== null) {
      setChangeResult(changeValue1 * (1 + (isIncrease ? changeValue2 : -changeValue2) / 100));
    }
  };

  const clearAll = () => {
    setPercentageOfValue1(null);
    setPercentageOfValue2(null);
    setPercentageOfResult(null);
    setWhatIsValue1(null);
    setWhatIsValue2(null);
    setWhatIsResult(null);
    setIsWhatValue1(null);
    setIsWhatValue2(null);
    setIsWhatResult(null);
    setIsOfWhatValue1(null);
    setIsOfWhatValue2(null);
    setIsOfWhatResult(null);
    setDifferenceValue1(null);
    setDifferenceValue2(null);
    setDifferenceResult(null);
    setChangeValue1(null);
    setChangeValue2(null);
    setChangeResult(null);
  };

  return (
    <div>
      <h2>Percentage Calculator</h2>
      <p>Please provide any two values below and click the "Calculate" button to get the third value.</p>
      <div>
        <input
          type="number"
          placeholder="%"
          value={percentageOfValue1 ?? ''}
          onChange={(e) => setPercentageOfValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <span>of</span>
        <input
          type="number"
          placeholder="Value"
          value={percentageOfValue2 ?? ''}
          onChange={(e) => setPercentageOfValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <button onClick={calculatePercentageOf}>Calculate</button>
        {percentageOfResult !== null && <span>Result: {percentageOfResult.toFixed(2)}</span>}
      </div>
      <button onClick={clearAll}>Clear</button>

      <h2>Percentage Calculator in Common Phrases</h2>
      <div>
        <p>What is</p>
        <input
          type="number"
          placeholder="%"
          value={whatIsValue1 ?? ''}
          onChange={(e) => setWhatIsValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <span>of</span>
        <input
          type="number"
          placeholder="Value"
          value={whatIsValue2 ?? ''}
          onChange={(e) => setWhatIsValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <button onClick={calculateWhatIs}>Calculate</button>
        {whatIsResult !== null && <span>Result: {whatIsResult.toFixed(2)}</span>}
      </div>
      <div>
        <input
          type="number"
          placeholder="Value"
          value={isWhatValue1 ?? ''}
          onChange={(e) => setIsWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <span>is what % of</span>
        <input
          type="number"
          placeholder="Value"
          value={isWhatValue2 ?? ''}
          onChange={(e) => setIsWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <button onClick={calculateIsWhat}>Calculate</button>
        {isWhatResult !== null && <span>Result: {isWhatResult.toFixed(2)}%</span>}
      </div>
      <div>
        <input
          type="number"
          placeholder="Value"
          value={isOfWhatValue1 ?? ''}
          onChange={(e) => setIsOfWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <span>is</span>
        <input
          type="number"
          placeholder="%"
          value={isOfWhatValue2 ?? ''}
          onChange={(e) => setIsOfWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <span>% of what</span>
        <button onClick={calculateIsOfWhat}>Calculate</button>
        {isOfWhatResult !== null && <span>Result: {isOfWhatResult.toFixed(2)}</span>}
      </div>

      <h2>Percentage Difference Calculator</h2>
      <div>
        <input
          type="number"
          placeholder="Value 1"
          value={differenceValue1 ?? ''}
          onChange={(e) => setDifferenceValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <input
          type="number"
          placeholder="Value 2"
          value={differenceValue2 ?? ''}
          onChange={(e) => setDifferenceValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <button onClick={calculateDifference}>Calculate</button>
        {differenceResult !== null && <span>Result: {differenceResult.toFixed(2)}%</span>}
      </div>
      <button onClick={clearAll}>Clear</button>

      <h2>Percentage Change Calculator</h2>
      <p>Please provide any two values below and click the "Calculate" button to get the third value.</p>
      <div>
        <input
          type="number"
          placeholder="Value"
          value={changeValue1 ?? ''}
          onChange={(e) => setChangeValue1(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <select value={isIncrease ? 'Increase' : 'Decrease'} onChange={(e) => setIsIncrease(e.target.value === 'Increase')}>
          <option value="Increase">Increase</option>
          <option value="Decrease">Decrease</option>
        </select>
        <input
          type="number"
          placeholder="%"
          value={changeValue2 ?? ''}
          onChange={(e) => setChangeValue2(e.target.value ? parseFloat(e.target.value) : null)}
        />
        <button onClick={calculateChange}>Calculate</button>
        {changeResult !== null && <span>Result: {changeResult.toFixed(2)}</span>}
      </div>
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default PercentageCalculator;