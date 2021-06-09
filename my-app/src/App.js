import './style/App.css';
import React, { useState, useCallback } from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';

function App() {
  const [data,setData] = useState([]);

  const handleCreate = (text) => {
    let arr = [...data];
    arr.push({name:text, checked: false});
    setData(arr);
  }

  const handleDelete = useCallback( index =>{
    let arr = [...data];
    arr.splice(index,1);
    setData(arr);
  },[data]);

  return (
    <div>
      <Header />
      <MainTable handleDelete={handleDelete} data={data}/>
      <FooterMenu handleCreate={handleCreate} />
    </div>
  );
}

export default App;
