import { useEffect, useState } from 'react';
import '../style/MainTableRow.css'

function MainTableRow(props) {
    const [clicked,setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(true);
        props.handleRowClicked(props.dataIndex);
    }

    const handleButtonClick = (event) =>{
        if( clicked ){
            setClicked(false);
            props.handleExitEditMode(props.dataIndex);
        }
        else{
            props.onDeleteClick(event);
        }
    }

    return (
        <div className="mainTableRow">
            <div className="nameText" style={(clicked) ? {display:'none'} : {display:'inline'}} onClick={()=>handleClick()}>
                {props.name}
            </div>
            <div className="nameTextField" style={(clicked) ? {display:'inline'} : {display:'none'}} onClick={()=>handleClick()}>
                <input 
                    data-index = {props.dataIndex}
                    type="text" 
                    value={props.name} 
                    onChange={props.onEditChange} />
            </div>
            <div style={{display:'inline', marginLeft:'420px', position:'absolute'}}>
                <input 
                    data-index = {props.dataIndex}
                    type="checkbox" 
                    checked = {props.checked} 
                    onChange = {props.onCheckChange} >
                </input>
            </div>
            <div style={{display:'inline', marginLeft:'700px',  position:'absolute'}}>
                <button data-index = {props.dataIndex} type="button" onClick={handleButtonClick} > {(clicked) ? "Exit Edit Mode" : "Delete"}</button>
            </div>

        </div>
    );
}

export default MainTableRow;
