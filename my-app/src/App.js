import './style/App.css';
import React from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <MainTable />
    </div>
  );
}

export default App;
