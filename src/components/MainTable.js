import '../style/MainTable.css';
import '../style/App.css';
import '../style/Header.css';
import { useCallback, useMemo, React } from 'react';
import PropTypes from 'prop-types';
import MainTableRow from './MainTableRow';

const MainTable = ({
  data,
  handleDelete,
  handleCheckChange,
  handleEditChange,
  handleExitEditMode,
  handleRowClicked,
}) => {
  const mainTableSize = useMemo(() => 180 + 40 * data?.length, [data?.length]);
  const onDeleteClick = useCallback((event) => {
    handleDelete(event.target.getAttribute('data-index'));
  }, [data]);

  const onCheckChange = useCallback((event) => {
    handleCheckChange(event.target.getAttribute('data-index'));
  }, [data]);

  const onEditChange = useCallback((event) => {
    handleEditChange(event);
  }, [data]);

  const onRowClick = useCallback((index) => {
    handleRowClicked(index);
  }, [data]);

  const onClickExitEditMode = useCallback((index) => {
    handleExitEditMode(index);
  }, [data]);

  return (
    <div id="mainTable" style={{ height: `${mainTableSize}px` }}>
      <div id="mainTableHeader">
        <div id="mainTableCategory">
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
        <div id="divider" />
      </div>
      {data.map((element) => (
        <MainTableRow
          key={element?.id}
          name={element?.name}
          checked={element?.checked}
          dataIndex={element?.id}
          onDeleteClick={onDeleteClick}
          onCheckChange={onCheckChange}
          onEditChange={onEditChange}
          handleRowClicked={onRowClick}
          handleExitEditMode={onClickExitEditMode}
        />
      ))}
    </div>
  );
};

MainTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    checked: PropTypes.checked,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  handleEditChange: PropTypes.func.isRequired,
  handleExitEditMode: PropTypes.func.isRequired,
  handleRowClicked: PropTypes.func.isRequired,
};

export default MainTable;
