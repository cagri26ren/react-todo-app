import '../style/MainTableRowStyle.css'
import {useState} from 'react';

function MainTableRow(props) {
    const [data,setData] = useState(props);
    const [arr, setArr] = useState(props.arr);

    const onDeleteClick = () => {
        let array = arr;

        for( let i = 0; i < array.length; i++ ){
            if( array[i]['name'] === data.name ){
                array.splice(i,1);
            }
        }
        setArr(array);
        console.log(array);
    }

    return (
        <div id = "mainTableRowStyle">
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
                <button type="button" onClick={props.onDeleteClick} >Click Me!</button>
            </div>

        </div>
    );
}

export default MainTableRow;
