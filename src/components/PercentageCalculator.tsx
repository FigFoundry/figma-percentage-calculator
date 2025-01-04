import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B' | 'C'>('A');

  // State for "Find Percentage"
  const [findPercentageInput1, setFindPercentageInput1] = useState<number | null>(null);
  const [findPercentageInput2, setFindPercentageInput2] = useState<number | null>(null);
  const [findPercentageResult, setFindPercentageResult] = useState<number | null>(null);
  const [findPercentageValues, setFindPercentageValues] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  // State for "Find Rate"
  const [findRateInput1, setFindRateInput1] = useState<number | null>(null);
  const [findRateInput2, setFindRateInput2] = useState<number | null>(null);
  const [findRateResult, setFindRateResult] = useState<number | null>(null);
  const [findRateValues, setFindRateValues] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  // State for "Find Base"
  const [findBaseInput1, setFindBaseInput1] = useState<number | null>(null);
  const [findBaseInput2, setFindBaseInput2] = useState<number | null>(null);
  const [findBaseResult, setFindBaseResult] = useState<number | null>(null);
  const [findBaseValues, setFindBaseValues] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  // Helper function to check if inputs are valid
  const areInputsValid = (input1: number | null, input2: number | null): boolean => {
    return input1 !== null && input2 !== null;
  };

  const calculateFindPercentage = () => {
    if (findPercentageInput1 !== null && findPercentageInput2 !== null) {
      const result = (findPercentageInput1 / 100) * findPercentageInput2;
      setFindPercentageResult(result);
      setFindPercentageValues({ x: findPercentageInput1, y: findPercentageInput2 });
    }
  };

  const calculateFindRate = () => {
    if (findRateInput1 !== null && findRateInput2 !== null) {
      const result = (findRateInput1 / findRateInput2) * 100;
      setFindRateResult(result);
      setFindRateValues({ x: findRateInput1, y: findRateInput2 });
    }
  };

  const calculateFindBase = () => {
    if (findBaseInput1 !== null && findBaseInput2 !== null) {
      const result = (findBaseInput1 / findBaseInput2) * 100;
      setFindBaseResult(result);
      setFindBaseValues({ x: findBaseInput1, y: findBaseInput2 });
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
                  placeholder="32"
                  value={findPercentageInput1 ?? ''}
                  onChange={(e) => setFindPercentageInput1(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of</span>
              <input
                type="number"
                placeholder="52"
                value={findPercentageInput2 ?? ''}
                onChange={(e) => setFindPercentageInput2(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <button
                onClick={calculateFindPercentage}
                disabled={!areInputsValid(findPercentageInput1, findPercentageInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              {findPercentageResult !== null && (
                <>
                  <div>Result: {findPercentageResult.toFixed(2)}</div>
                  <div>
                    {findPercentageResult.toFixed(2)} is {findPercentageValues.x ?? 0}% of {findPercentageValues.y ?? 0}.
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'B' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                placeholder="32"
                value={findRateInput1 ?? ''}
                onChange={(e) => setFindRateInput1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is what</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  placeholder="52"
                  value={findRateInput2 ?? ''}
                  onChange={(e) => setFindRateInput2(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of</span>
              <button
                onClick={calculateFindRate}
                disabled={!areInputsValid(findRateInput1, findRateInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              {findRateResult !== null && (
                <>
                  <div>Result: {findRateResult.toFixed(2)}%</div>
                  <div>
                    {findRateValues.x ?? 0} is {findRateResult.toFixed(2)}% of {findRateValues.y ?? 0}.
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'C' && (
          <div className="section">
            <div className="input-group">
              <input
                type="number"
                placeholder="32"
                value={findBaseInput1 ?? ''}
                onChange={(e) => setFindBaseInput1(e.target.value ? parseFloat(e.target.value) : null)}
              />
              <span>is</span>
              <div className="input-with-suffix">
                <input
                  type="number"
                  placeholder="52"
                  value={findBaseInput2 ?? ''}
                  onChange={(e) => setFindBaseInput2(e.target.value ? parseFloat(e.target.value) : null)}
                />
                <span>%</span>
              </div>
              <span>of what</span>
              <button
                onClick={calculateFindBase}
                disabled={!areInputsValid(findBaseInput1, findBaseInput2)}
              >
                Calculate
              </button>
            </div>
            <div className="result">
              {findBaseResult !== null && (
                <>
                  <div>Result: {findBaseResult.toFixed(2)}</div>
                  <div>
                    {findBaseValues.x ?? 0} is {findBaseValues.y ?? 0}% of {findBaseResult.toFixed(2)}.
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageCalculator;