import '../style/MainTableStyle.css'
import '../style/App.css'
import '../style/HeaderStyle.css'
import MainTableRow from './MainTableRow'
import { useCallback, useState } from 'react';

let todoData =[
    {
        name:'name1',
        checked: true
    },
    {
        name:'name2',
        checked: true
    },
    {
        name:'name3',
        checked: true
    },
    {
        name:'name4',
        checked: true
    },
    {
        name:'name5',
        checked: true
    }
];

function MainTable() {
    const [data,setData] = useState(todoData);

    const onDeleteClick = useCallback(n => {
        let array = data;

        for( let i = 0; i < array.length; i++ ){
            if( array[i]['name'] === n ){
                array.splice(i,1);
            }
        }
        todoData = null;
        setData([...array.sort((a,b) => (a.name - b.name))]);
    });

    return (
        <div id = "mainTableStyle">
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
        </div>
    );
}

export default MainTable;
