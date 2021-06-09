import '../style/MainTable.css';
import '../style/App.css';
import '../style/Header.css';
import { useCallback, useMemo, useState, React } from 'react';
import MainTableRow from './MainTableRow';




function MainTable() {
    const [data, setData] = useState([]);
    const num = useMemo(() => 180 + 40 * data.length, [data.length]);


    const onDeleteClick = useCallback(event => {
        let array = data;
        array.splice(event.target.getAttribute('data-index'),1);
        setData([...array]);
    }, [data]);

    return (
      <div id="mainTable" style ={{height: num +'px'}}>
        <div id="mainTableHeader">
                    <div id = "mainTableCategory">
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
                    <div id = "divider"></div>
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
            </div>
    );
}

export default MainTable;
