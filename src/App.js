import './style/App.css';
import React from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';

function App() {
  return (
    <>
      <Header />
      <MainTable />
      <FooterMenu />
    </>
  );
}

export default App;
