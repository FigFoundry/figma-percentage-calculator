import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A');

  // State for "What is __% of __"
  const [whatIsValue1, setWhatIsValue1] = useState<number | null>(null);
  const [whatIsValue2, setWhatIsValue2] = useState<number | null>(null);
  const [whatIsResult, setWhatIsResult] = useState<number | null>(null);

  // State for "__ is what % of __"
  const [isWhatValue1, setIsWhatValue1] = useState<number | null>(null);
  const [isWhatValue2, setIsWhatValue2] = useState<number | null>(null);
  const [isWhatResult, setIsWhatResult] = useState<number | null>(null);

  // State for "__ is __% of what"
  const [isOfWhatValue1, setIsOfWhatValue1] = useState<number | null>(null);
  const [isOfWhatValue2, setIsOfWhatValue2] = useState<number | null>(null);
  const [isOfWhatResult, setIsOfWhatResult] = useState<number | null>(null);

  const calculateWhatIs = () => {
    if (whatIsValue1 !== null && whatIsValue2 !== null) {
      const result = (whatIsValue1 / 100) * whatIsValue2;
      setWhatIsResult(result);
    }
  };

  const calculateIsWhat = () => {
    if (isWhatValue1 !== null && isWhatValue2 !== null) {
      const result = (isWhatValue1 / isWhatValue2) * 100;
      setIsWhatResult(result);
    }
  };

  const calculateIsOfWhat = () => {
    if (isOfWhatValue1 !== null && isOfWhatValue2 !== null) {
      const result = (isOfWhatValue1 / isOfWhatValue2) * 100;
      setIsOfWhatResult(result);
    }
  };

  return (
    <div className="percentage-calculator">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'A' ? 'active' : ''}
          onClick={() => setActiveTab('A')}
        >
          What is __% of __
        </button>
        <button
          className={activeTab === 'B' ? 'active' : ''}
          onClick={() => setActiveTab('B')}
        >
          __ is what % of __
        </button>
        <button
          className={activeTab === 'C' ? 'active' : ''}
          onClick={() => setActiveTab('C')}
        >
          __ is __% of what
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'A' && (
          <div className="section">
            <div className="input-group">
              <span>What is</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  placeholder=""
                  value={whatIsValue1 ?? ''}
                  onChange={(e) => setWhatIsValue1(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of</span>
              <input
                type="number"
                placeholder=""
                value={whatIsValue2 ?? ''}
                onChange={(e) => setWhatIsValue2(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <button onClick={calculateWhatIs}>Calc</button>
            </div>
            <div className="result">
              <div>Result: {(whatIsResult ?? 0).toFixed(2)}</div>
              <div>
                {(whatIsResult ?? 0).toFixed(2)} is {whatIsValue1 ?? 0}% of {whatIsValue2 ?? 0}.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'B' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                placeholder=""
                value={isWhatValue1 ?? ''}
                onChange={(e) => setIsWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is what</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  placeholder=""
                  value={isWhatValue2 ?? ''}
                  onChange={(e) => setIsWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of</span>
              <button onClick={calculateIsWhat}>Calc</button>
            </div>
            <div className="result">
              <div>Result: {(isWhatResult ?? 0).toFixed(2)}%</div>
              <div>
                {isWhatValue1 ?? 0} is {(isWhatResult ?? 0).toFixed(2)}% of {isWhatValue2 ?? 0}.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'C' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                placeholder=""
                value={isOfWhatValue1 ?? ''}
                onChange={(e) => setIsOfWhatValue1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  placeholder=""
                  value={isOfWhatValue2 ?? ''}
                  onChange={(e) => setIsOfWhatValue2(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of what</span>
              <button onClick={calculateIsOfWhat}>Calc</button>
            </div>
            <div className="result">
              <div>Result: {(isOfWhatResult ?? 0).toFixed(2)}</div>
              <div>
                {isOfWhatValue1 ?? 0} is {isOfWhatValue2 ?? 0}% of {(isOfWhatResult ?? 0).toFixed(2)}.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageCalculator;