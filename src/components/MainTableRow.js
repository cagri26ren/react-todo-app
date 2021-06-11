/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, React } from 'react';
import '../style/MainTableRow.css';
import PropTypes from 'prop-types';

const MainTableRow = ({
  name,
  checked,
  dataIndex,
  onDeleteClick,
  onCheckChange,
  onEditChange,
  handleRowClicked,
  handleExitEditMode,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    handleRowClicked(dataIndex);
  };

  const handleButtonClick = (event) => {
    if (clicked) {
      setClicked(false);
      handleExitEditMode(dataIndex);
    } else {
      onDeleteClick(event);
    }
  };

  return (
    <div className="MainTableRow">
      <div className={(clicked) ? 'NameText_display_none' : 'NameText_display_inline'} onClick={() => handleClick()}>
        {name}
      </div>
      <div className={(clicked) ? 'NameText_display_inline' : 'NameText_display_none'} onClick={() => handleClick()}>
        <input
          data-index={dataIndex}
          type="text"
          value={name}
          onChange={onEditChange}
        />
      </div>
      <div className="RowCheckbox">
        <input
          data-index={dataIndex}
          type="checkbox"
          checked={checked}
          onChange={onCheckChange}
        />
      </div>
      <div className="RowButton">
        <button data-index={dataIndex} type="button" onClick={handleButtonClick}>{(clicked) ? 'Exit Edit Mode' : 'Delete'}</button>
      </div>
    </div>
  );
};

MainTableRow.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  dataIndex: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCheckChange: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  handleExitEditMode: PropTypes.func.isRequired,
  handleRowClicked: PropTypes.func.isRequired,
};

MainTableRow.defaultProps = {
  name: '',
  checked: false,
};

export default MainTableRow;
