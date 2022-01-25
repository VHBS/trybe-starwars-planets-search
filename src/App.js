import React from 'react';
import './App.css';
import Requisition from './components/Requisition';
import Table from './components/Table';
import StarProvider from './Context/StarProvider';

function App() {
  return (
    <StarProvider>
      <Requisition />
      <Table />
    </StarProvider>
  );
}

export default App;
