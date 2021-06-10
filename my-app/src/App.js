import './style/App.css';
import React, { useState, useCallback } from 'react';
import MainTable from './components/MainTable';
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';

function App() {
  const [data,setData] = useState([]);
  const [clickedArr,setClickedArr] = useState([]);

  const handleCreate = useCallback(text => {
    let arr = [...data];
    arr.push({name:text, checked: false});
    setData(arr);
  });

  const handleDelete = useCallback( index =>{
  
    let arr = [...data];
    arr.splice(index,1);
    setData([...arr]);
  },[data]);

  const handleCheckChange = useCallback( index =>{
    let arr = [...data];
    const prevName = arr[index]['name'];
    const newChecked = !arr[index]['checked'];
    arr[index] = {name:prevName, checked:newChecked}
    setData(arr);
  },[data]);

  const handleEditChange = useCallback( event =>{
    let index = event.target.getAttribute('data-index');
    let arr = [...data];
    const newName = event.target.value;
    arr[index] = {name:newName, checked:false}
    setData(arr);
  },[data]);

  const handleRowClicked = useCallback( clickedIndex =>{
    let map = [...clickedArr];
    if( map[clickedIndex] === undefined ){
      map.push(clickedIndex);
      setClickedArr(map);
    }
  });

  const handleExitEditMode = useCallback( clickedIndex =>{
    let map = [...clickedArr];
    if( map[clickedIndex] !== undefined ){
      map.splice(clickedIndex,1);
      setClickedArr(map);
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
