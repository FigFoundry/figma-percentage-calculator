import React from 'react';
import { createRoot } from 'react-dom/client';
import PercentageCalculator from './components/PercentageCalculator';
import './styles/base.scss';

const container = document.getElementById('react-page');
if (container) {
  const root = createRoot(container);
  root.render(<PercentageCalculator />);
} else {
  console.error('Container element not found');
}