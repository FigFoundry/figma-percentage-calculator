import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A');

  // State for "Percentage"
  const [percentageInput1, setPercentageInput1] = useState<number | null>(null);
  const [percentageInput2, setPercentageInput2] = useState<number | null>(null);
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  // State for "Rate"
  const [rateInput1, setRateInput1] = useState<number | null>(null);
  const [rateInput2, setRateInput2] = useState<number | null>(null);
  const [rateResult, setRateResult] = useState<number | null>(null);

  // State for "Base"
  const [baseInput1, setBaseInput1] = useState<number | null>(null);
  const [baseInput2, setBaseInput2] = useState<number | null>(null);
  const [baseResult, setBaseResult] = useState<number | null>(null);

  // Helper function to check if inputs are valid
  const areInputsValid = (input1: number | null, input2: number | null): boolean => {
    return input1 !== null && input2 !== null;
  };

  // Calculate Percentage
  const calculatePercentage = () => {
    if (percentageInput1 !== null && percentageInput2 !== null) {
      const result = (percentageInput1 / 100) * percentageInput2;
      setPercentageResult(result);
    }
  };

  // Calculate Rate
  const calculateRate = () => {
    if (rateInput1 !== null && rateInput2 !== null) {
      const result = (rateInput1 / rateInput2) * 100;
      setRateResult(result);
    }
  };

  // Calculate Base
  const calculateBase = () => {
    if (baseInput1 !== null && baseInput2 !== null) {
      const result = (baseInput1 / baseInput2) * 100;
      setBaseResult(result);
    }
  };

  // Clear inputs and results
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
                Calc
              </button>
            </div>
            <div className="result">
              <div>Result: {(percentageResult ?? 0).toFixed(2)}</div>
              {percentageResult !== null && (
                <div>
                  {percentageResult.toFixed(2)} is {percentageInput1 ?? 0}% of {percentageInput2 ?? 0}.
                </div>
              )}
              {percentageResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  Clear
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
                Calc
              </button>
            </div>
            <div className="result">
              <div>Result: {(rateResult ?? 0).toFixed(2)}%</div>
              {rateResult !== null && (
                <div>
                  {rateInput1 ?? 0} is {(rateResult ?? 0).toFixed(2)}% of {rateInput2 ?? 0}.
                </div>
              )}
              {rateResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  Clear
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
                Calc
              </button>
            </div>
            <div className="result">
              <div>Result: {(baseResult ?? 0).toFixed(2)}</div>
              {baseResult !== null && (
                <div>
                  {baseInput1 ?? 0} is {baseInput2 ?? 0}% of {(baseResult ?? 0).toFixed(2)}.
                </div>
              )}
              {baseResult !== null && (
                <button className="clear-button" onClick={clearInputs}>
                  Clear
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