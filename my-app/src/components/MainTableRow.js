import '../style/MainTableRow.css'
import {useState} from 'react';

function MainTableRow(props) {

    return (
        <div className="mainTableRow">
            <div>
                {props.name}
            </div>
            <div>
                <input 
                    data-index = {props.dataIndex}
                    type="checkbox" 
                    checked = {props.checked} 
                    onChange = {props.onCheckChange} ></input>
            </div>
            <div>
                <button data-index = {props.dataIndex} type="button" onClick={props.onDeleteClick} >Delete</button>
            </div>

        </div>
    );
}

export default MainTableRow;
