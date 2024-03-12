import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HelloWorld from './components/HelloWorld';
// import CounterApp from './components/CounterApp';
// import RealTimeInput from './components/RealTimeInput';
// import Lists from './components/Lists';
import ToggleSwitch from './components/ToggleSwitch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleSwitch />
  </React.StrictMode>
);

