import './style/App.css';
import React, { useState, useCallback } from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';

function App() {
  const [data,setData] = useState([]);

  const handleCreate = useCallback(text => {
    let arr = [...data];
    arr.push({name:text, checked: false});
    setData(arr);
  });

  const handleDelete = useCallback( index =>{
  
    let arr = [...data];
    console.log(data);
    arr.splice(index,1);
    setData([...arr]);
  },[data]);

  const handleCheckChange = useCallback( index =>{
    console.log(index);
    let arr = [...data];
    const prevName = arr[index]['name'];
    const newChecked = !arr[index]['checked'];
    arr[index] = {name:prevName, checked:newChecked}
    console.log(arr);
    setData(arr);
  },[data]);

  return (
    <div>
      <Header />
      <MainTable handleDelete={handleDelete} handleCheckChange={handleCheckChange} data={data}/>
      <FooterMenu handleCreate={handleCreate} />
    </div>
  );
}

export default App;
