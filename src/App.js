import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Requisition from './components/Requisition';
import Table from './components/Table';
import StarProvider from './Context/StarProvider';

function App() {
  return (
    <StarProvider>
      <Requisition />
      <Inputs />
      <Table />
    </StarProvider>
  );
}

export default App;
