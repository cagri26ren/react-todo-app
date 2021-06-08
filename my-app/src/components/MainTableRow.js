import '../style/MainTableRow.css'
import {useState} from 'react';

function MainTableRow(props) {
    const [data,setData] = useState(props);

    return (
        <div class = "mainTableRow">
            <div>
                {data.name}
            </div>
            <div>
                <input 
                    type="checkbox" 
                    checked = {data.checked} 
                    onChange = {e => {setData( { name: data.name , checked: !data.checked } )}} ></input>
            </div>
            <div>
                <button data-index = {props.dataIndex} type="button" onClick={props.onDeleteClick} >Delete</button>
            </div>

        </div>
    );
}

export default MainTableRow;
