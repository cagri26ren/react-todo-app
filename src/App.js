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
    const newId = (data.length === 0) ? 0 : data[data.length - 1].id + 1;
    arr.push({ id: newId, name: text, checked: false });
    setData(arr);
  }, [data]);

  const handleDelete = useCallback((index) => {
    const arr = [...data];
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (arr[i].id == index) {
        arr.splice(i, 1);
        setData(arr);
      }
    }
  }, [data]);

  const handleCheckChange = useCallback((index) => {
    const arr = [...data];
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (arr[i].id == index) {
        const prevName = arr[i].name;
        const prevId = arr[i].id;
        const newChecked = !arr[i].checked;
        arr[i] = { id: prevId, name: prevName, checked: newChecked };
        setData(arr);
      }
    }
  }, [data]);

  const handleEditChange = useCallback((event) => {
    const index = event.target.getAttribute('data-index');
    const arr = [...data];
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (arr[i].id == index) {
        const prevId = data[i].id;
        const newName = event.target.value;
        arr[i] = { id: prevId, name: newName, checked: false };
        setData(arr);
      }
    }
  }, [data]);

  const handleRowClicked = useCallback((clickedIndex) => {
    const map = [...clickedArr];
    let found = false;
    for (let i = 0; i < map.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (map[i] == clickedIndex) {
        found = true;
      }
    }

    if (!found) {
      map.push(clickedIndex);
      setClickedArr(map);
    }
  }, [clickedArr]);

  const handleExitEditMode = useCallback((clickedIndex) => {
    const map = [...clickedArr];
    for (let i = 0; i < map.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (map[i] == clickedIndex) {
        map.splice(i, 1);
        setClickedArr(map);
      }
    }
  }, [clickedArr]);

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
