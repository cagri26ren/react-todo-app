import './style/App.css';
import React, { useState, useCallback } from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';

function App() {
  const [data, setData] = useState([]);
  const [clickedArr, setClickedArr] = useState([]);

  const handleCreate = useCallback((text) => {
    const arr = [...data];
    arr.push({ name: text, checked: false });
    setData(arr);
  });

  const handleDelete = useCallback((index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setData([...arr]);
  }, [data]);

  const handleCheckChange = useCallback((index) => {
    const arr = [...data];
    const prevName = arr[index].name;
    const newChecked = !arr[index].checked;
    arr[index] = {name: prevName, checked: newChecked}
    setData(arr);
  }, [data]);

  const handleEditChange = useCallback((event) => {
    const index = event.target.getAttribute('data-index');
    const arr = [...data];
    const newName = event.target.value;
    arr[index] = { name: newName, checked: false };
    setData(arr);
  }, [data]);

  const handleRowClicked = useCallback((clickedIndex) => {
    const map = [...clickedArr];
    let found = false;

    for (let i = 0; i < map.length; i += 1) {
      if (map[i] === clickedIndex) {
        found = true;
      }
    }

    if (!found) {
      map.push(clickedIndex);
      setClickedArr(map);
    }
  });

  const handleExitEditMode = useCallback((clickedIndex) =>{
    const map = [...clickedArr];
    for (let i = 0; i < map.length; i += 1) {
      if (map[i] === clickedIndex) {
        map.splice(i, 1);
        setClickedArr(map);
      }
    }
  });

  return (
    <div>
      <Header />
      <MainTable 
        handleDelete={handleDelete} 
        handleCheckChange={handleCheckChange} 
        handleEditChange={handleEditChange} 
        data={data} 
        handleRowClicked={handleRowClicked}
        handleExitEditMode={handleExitEditMode}
      />
      <FooterMenu handleCreate={handleCreate} clickedArr={clickedArr} />
    </div>
  );
}

export default App;
