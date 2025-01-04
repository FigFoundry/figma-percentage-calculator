import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [whatIsValue1, setWhatIsValue1] = useState<number | null>(null);
  const [whatIsValue2, setWhatIsValue2] = useState<number | null>(null);
  const [whatIsResult, setWhatIsResult] = useState<number | null>(null);

  const [isWhatValue1, setIsWhatValue1] = useState<number | null>(null);
  const [isWhatValue2, setIsWhatValue2] = useState<number | null>(null);
  const [isWhatResult, setIsWhatResult] = useState<number | null>(null);

  const [isOfWhatValue1, setIsOfWhatValue1] = useState<number | null>(null);
  const [isOfWhatValue2, setIsOfWhatValue2] = useState<number | null>(null);
  const [isOfWhatResult, setIsOfWhatResult] = useState<number | null>(null);

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

  return (
    <div className="percentage-calculator">
      {/* Section 1: What is __% of __ */}
      <div className="section">
        <div className="input-group">
          <span>What is</span>
          <div className="input-with-prefix">
            <span>%</span>
            <input
              type="number"
              placeholder=""
              value={whatIsValue1 ?? ''}
              onChange={(e) => setWhatIsValue1(e.target.value ? parseFloat(e.target.value) : null)}
            />
          </div>
          <span>of</span>
          <input
            type="number"
            placeholder=""
            value={whatIsValue2 ?? ''}
            onChange={(e) => setWhatIsValue2(e.target.value ? parseFloat(e.target.value) : null)}
          />
        </div>
        <button onClick={calculateWhatIs}>Calculate</button>
        {whatIsResult !== null && <div className="result">Result: {whatIsResult.toFixed(2)}</div>}
      </div>

      {/* Section 2: __ is what % of __ */}
      <div className="section">
        <div className="input-group">
          <input
            type="number"
            placeholder=""
            value={isWhatValue1 ?? ''}
            onChange={(e) => setIsWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
          />
          <span>is what % of</span>
          <input
            type="number"
            placeholder=""
            value={isWhatValue2 ?? ''}
            onChange={(e) => setIsWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
          />
        </div>
        <button onClick={calculateIsWhat}>Calculate</button>
        {isWhatResult !== null && <div className="result">Result: {isWhatResult.toFixed(2)}%</div>}
      </div>

      {/* Section 3: __ is __% of what */}
      <div className="section">
        <div className="input-group">
          <input
            type="number"
            placeholder=""
            value={isOfWhatValue1 ?? ''}
            onChange={(e) => setIsOfWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
          />
          <span>is</span>
          <div className="input-with-prefix">
            <span>%</span>
            <input
              type="number"
              placeholder=""
              value={isOfWhatValue2 ?? ''}
              onChange={(e) => setIsOfWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
            />
          </div>
          <span>of what</span>
        </div>
        <button onClick={calculateIsOfWhat}>Calculate</button>
        {isOfWhatResult !== null && <div className="result">Result: {isOfWhatResult.toFixed(2)}</div>}
      </div>
    </div>
  );
};

export default PercentageCalculator;