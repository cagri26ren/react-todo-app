import '../style/MainTableStyle.css'
import '../style/App.css'
import '../style/HeaderStyle.css'
import MainTableRow from './MainTableRow'
import { useCallback, useMemo, useState } from 'react';



function MainTable() {
    const [data,setData] = useState([]);
    const [text,setText] = useState('');
    const num = useMemo(()=> 180 + 40 * data.length, [data.length]);

    const onDeleteClick = useCallback(event => {
        let array = data;
        array.splice(event.target.getAttribute('data-index'),1);
        setData([...array]);
    }, [data]);
    
    const handleSubmit = () =>{
        let arr = [...data];
        for( let i = 0; i < arr.length; i++){
            if(arr[i]['name'] === text ){
                alert("You already have this task");
                return;
            }
        }
        arr.push( {name:text,checked:false} );
        setData(arr);
        setText("");
    };

    return (
            <div id = "mainTableStyle" style ={{height: num +'px'}}>
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
                {data.map((element,index) => {
                    return(
                        <MainTableRow 
                            key={index}
                            name={element.name}
                            checked={element.checked}
                            dataIndex={index}
                            onDeleteClick={onDeleteClick}
                        />
                    )
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
