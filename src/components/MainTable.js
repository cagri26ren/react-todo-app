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
  }, [handleDelete]);

  const onCheckChange = useCallback((event) => {
    handleCheckChange(event.target.getAttribute('data-index'));
  }, [handleCheckChange]);

  const onEditChange = useCallback((event) => {
    handleEditChange(event);
  }, [handleEditChange]);

  const onRowClick = useCallback((index) => {
    handleRowClicked(index);
  }, [handleRowClicked]);

  const onClickExitEditMode = useCallback((index) => {
    handleExitEditMode(index);
  }, [handleExitEditMode]);

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
