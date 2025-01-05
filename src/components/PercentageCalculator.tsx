import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A');

  const [percentageInput1, setPercentageInput1] = useState<number | null>(null);
  const [percentageInput2, setPercentageInput2] = useState<number | null>(null);
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  const [rateInput1, setRateInput1] = useState<number | null>(null);
  const [rateInput2, setRateInput2] = useState<number | null>(null);
  const [rateResult, setRateResult] = useState<number | null>(null);

  const [baseInput1, setBaseInput1] = useState<number | null>(null);
  const [baseInput2, setBaseInput2] = useState<number | null>(null);
  const [baseResult, setBaseResult] = useState<number | null>(null);

  const areInputsValid = (input1: number | null, input2: number | null): boolean => {
    return input1 !== null && input2 !== null;
  };

  // Percentage
  const calculatePercentage = () => {
    if (percentageInput1 !== null && percentageInput2 !== null) {
      const result = (percentageInput1 / 100) * percentageInput2;
      setPercentageResult(result);
    }
  };

  // Rate
  const calculateRate = () => {
    if (rateInput1 !== null && rateInput2 !== null) {
      const result = (rateInput1 / rateInput2) * 100;
      setRateResult(result);
    }
  };

  // Base
  const calculateBase = () => {
    if (baseInput1 !== null && baseInput2 !== null) {
      const result = (baseInput1 / baseInput2) * 100;
      setBaseResult(result);
    }
  };

  // Clear results
  const clearInputs = () => {
    setPercentageInput1(null);
    setPercentageInput2(null);
    setPercentageResult(null);
    setRateInput1(null);
    setRateInput2(null);
    setRateResult(null);
    setBaseInput1(null);
    setBaseInput2(null);
    setBaseResult(null);
  };

  return (
    <div className="percentage-calculator">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'A' ? 'active' : ''}
          onClick={() => setActiveTab('A')}
        >
          Percentage
        </button>
        <button
          className={activeTab === 'B' ? 'active' : ''}
          onClick={() => setActiveTab('B')}
        >
          Rate
        </button>
        <button
          className={activeTab === 'C' ? 'active' : ''}
          onClick={() => setActiveTab('C')}
        >
          Base
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
                  value={percentageInput1 ?? ''}
                  onChange={(e) => setPercentageInput1(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of</span>
              <input
                type="number"
                value={percentageInput2 ?? ''}
                onChange={(e) => setPercentageInput2(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <button
                onClick={calculatePercentage}
                disabled={!areInputsValid(percentageInput1, percentageInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              <div className="result-text">
                <div>
                  Result: <span className="result-value">{(percentageResult ?? 0).toFixed(2)}</span>
                </div>
                {percentageResult !== null && (
                  <div className="result-secondary-text">
                    {percentageResult.toFixed(2)} is {percentageInput1 ?? 0}% of {percentageInput2 ?? 0}.
                  </div>
                )}
              </div>
              {percentageResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M112,224a95.2,95.2,0,0,1-29-48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M192,152c0,31.67,13.31,59,40,72H61A103.65,103.65,0,0,1,32,152c0-28.21,11.23-50.89,29.47-69.64a8,8,0,0,1,8.67-1.81L95.52,90.83a16,16,0,0,0,20.82-9l21-53.11c4.15-10,15.47-15.32,25.63-11.53a20,20,0,0,1,11.51,26.4L153.13,96.69a16,16,0,0,0,8.93,20.76L187,127.29a8,8,0,0,1,5,7.43Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      x1="43.93"
                      y1="105.57"
                      x2="192.8"
                      y2="165.12"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'B' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                value={rateInput1 ?? ''}
                onChange={(e) => setRateInput1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is what % of</span>
              <input
                type="number"
                value={rateInput2 ?? ''}
                onChange={(e) => setRateInput2(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <button
                onClick={calculateRate}
                disabled={!areInputsValid(rateInput1, rateInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              <div className="result-text">
                <div>
                  Result: <span className="result-value">{(rateResult ?? 0).toFixed(2)}%</span>
                </div>
                {rateResult !== null && (
                  <div className="result-secondary-text">
                    {rateInput1 ?? 0} is {(rateResult ?? 0).toFixed(2)}% of {rateInput2 ?? 0}.
                  </div>
                )}
              </div>
              {rateResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M112,224a95.2,95.2,0,0,1-29-48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M192,152c0,31.67,13.31,59,40,72H61A103.65,103.65,0,0,1,32,152c0-28.21,11.23-50.89,29.47-69.64a8,8,0,0,1,8.67-1.81L95.52,90.83a16,16,0,0,0,20.82-9l21-53.11c4.15-10,15.47-15.32,25.63-11.53a20,20,0,0,1,11.51,26.4L153.13,96.69a16,16,0,0,0,8.93,20.76L187,127.29a8,8,0,0,1,5,7.43Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      x1="43.93"
                      y1="105.57"
                      x2="192.8"
                      y2="165.12"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'C' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                value={baseInput1 ?? ''}
                onChange={(e) => setBaseInput1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  value={baseInput2 ?? ''}
                  onChange={(e) => setBaseInput2(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of what</span>
              <button
                onClick={calculateBase}
                disabled={!areInputsValid(baseInput1, baseInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              <div className="result-text">
                <div>
                  Result: <span className="result-value">{(baseResult ?? 0).toFixed(2)}</span>
                </div>
                {baseResult !== null && (
                  <div className="result-secondary-text">
                    {baseInput1 ?? 0} is {baseInput2 ?? 0}% of {(baseResult ?? 0).toFixed(2)}.
                  </div>
                )}
              </div>
              {baseResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M112,224a95.2,95.2,0,0,1-29-48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M192,152c0,31.67,13.31,59,40,72H61A103.65,103.65,0,0,1,32,152c0-28.21,11.23-50.89,29.47-69.64a8,8,0,0,1,8.67-1.81L95.52,90.83a16,16,0,0,0,20.82-9l21-53.11c4.15-10,15.47-15.32,25.63-11.53a20,20,0,0,1,11.51,26.4L153.13,96.69a16,16,0,0,0,8.93,20.76L187,127.29a8,8,0,0,1,5,7.43Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      x1="43.93"
                      y1="105.57"
                      x2="192.8"
                      y2="165.12"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageCalculator;