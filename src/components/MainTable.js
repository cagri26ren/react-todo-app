import '../style/MainTable.css';
import '../style/App.css';
import '../style/Header.css';
import { useMemo, React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskList } from '../selectors';
import MainTableRow from './MainTableRow';
import { getTasks } from '../actions/taskActions';

const MainTable = () => {
  const taskData = useSelector(getTaskList);
  const mainTableSize = useMemo(() => 180 + 51 * taskData?.length, [taskData?.length]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <div className="mainTable" style={{ height: `${mainTableSize}px` }}>
      <div className="mainTableHeader">
        <div className="mainTableCategory">
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
        <div className="divider" />
      </div>
      {taskData.map((element) => (
        <MainTableRow
          key={element?.id}
          name={element?.name}
          checked={element?.checked}
          dataIndex={element?.id}
        />
      ))}
    </div>
  );
};

export default MainTable;
