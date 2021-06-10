import '../style/MainTable.css';
import '../style/App.css';
import '../style/Header.css';
import { useCallback, useMemo, React } from 'react';
import MainTableRow from './MainTableRow';




function MainTable(props) {
    const num = useMemo(() => 180 + 40 * props.data.length, [props.data.length]);


    const onDeleteClick = useCallback(event => {
        props.handleDelete(event.target.getAttribute('data-index'));
    }, [props]);

    const onCheckChange = useCallback(event => {
        props.handleCheckChange(event.target.getAttribute('data-index'));
    }, [props]);

    const onEditChange = useCallback(event => {
        props.handleEditChange(event);
    }, [props]);

    const handleRowClicked = useCallback(index => {
        props.handleRowClicked(index);
    });

    const handleExitEditMode = useCallback(index => {
        props.handleExitEditMode(index);
    });

    

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
        {props.data.map((element,index) => {
                    return(
                        <MainTableRow 
                            key={index}
                            name={element.name}
                            checked={element.checked}
                            dataIndex={index}
                            onDeleteClick={onDeleteClick}
                            onCheckChange={onCheckChange}
                            onEditChange={onEditChange}
                            handleRowClicked={handleRowClicked}
                            handleExitEditMode={handleExitEditMode}
                        />
                    )
                })}
            </div>
    );
}

export default MainTable;
