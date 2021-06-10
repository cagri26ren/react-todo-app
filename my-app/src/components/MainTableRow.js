import '../style/MainTableRow.css'
import {useMemo} from 'react';

function MainTableRow(props) {
    const extraMarginOffset = useMemo(() => 280 - 7.7 * props.name.length, [props.name.length]);

    return (
        <div className="mainTableRow">
            <div style={{display:'inline', marginLeft:'130px', position:'absolute'}}>
                {props.name}
            </div>
            <div style={{display:'inline', marginLeft:'420px', position:'absolute'}}>
                <input 
                    data-index = {props.dataIndex}
                    type="checkbox" 
                    checked = {props.checked} 
                    onChange = {props.onCheckChange} ></input>
            </div>
            <div style={{display:'inline', marginLeft:'700px',  position:'absolute'}}>
                <button data-index = {props.dataIndex} type="button" onClick={props.onDeleteClick} >Delete</button>
            </div>

        </div>
    );
}

export default MainTableRow;
