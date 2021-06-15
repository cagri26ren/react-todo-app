import '../style/MainTable.css';
import '../style/App.css';
import '../style/Header.css';
import { useMemo, React } from 'react';
import MainTableRow from './MainTableRow';
import { getTODOList } from '../selectors';

const MainTable = () => {
  const todoData = getTODOList();
  const mainTableSize = useMemo(() => 180 + 40 * todoData?.length, [todoData?.length]);

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
      {todoData.map((element) => (
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
