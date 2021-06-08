import '../style/MainTableStyle.css'
import '../style/App.css'
import '../style/HeaderStyle.css'
import MainTableRow from './MainTableRow'
import { useCallback, useState } from 'react';



function MainTable() {
    const [data,setData] = useState([]);
    const [text,setText] = useState('');

    const onDeleteClick = useCallback(n => {
        let array = data;

        for( let i = 0; i < array.length; i++ ){
            if( array[i]['name'] === n ){
                array.splice(i,1);
                i--;
            }
        }
        setData([...array]);
    });

    const handleSubmit = () =>{
        let arr = [...data];
        for( let i = 0; i < arr.length; i++ ){
            if(arr[i]['name'] === text ){
                alert("You already have this task");
                return;
            }
        }
        arr.push( {name:text,checked:false} );
        setData(arr);
        setText("");
    }

    return (
            <div id = "mainTableStyle" style ={{height: (180 + ( (40)*data.length ) ) +'px'}}>
                <div id = "mainTableHeaderStyle">
                    <div id = "mainTableCategoryStyle">
                        <div>
                            <h3>Name</h3>
                        </div>
                        <div>
                            <h3>Finished</h3>
                        </div>
                        <div>
                            <h3>Delete</h3>
                        </div>
                    </div>
                    <div id = "dividerStyle"></div>
                </div>
                {data.map(element => {
                return( <MainTableRow key = {element.name} name = {element.name} checked = {element.checked} onDeleteClick = {() => onDeleteClick(element.name)} ></MainTableRow> )
                })}
                <div style = {{marginTop:'125px',marginLeft:'30%'}}>
                    <span>
                        <label>
                            Task Name:
                        </label>
                            <input style={{marginRight:'10px'}} type="text" value={text} onChange = {(t) => setText(t.target.value)}/>
                        <button onClick={handleSubmit}  type="button">Create New Task</button>

                    </span>
                </div>
            </div>
    );
}

export default MainTable;
