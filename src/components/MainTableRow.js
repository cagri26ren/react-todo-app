/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, React } from 'react';
import '../style/MainTableRow.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clickedAdd, clickedRemove } from '../actions/clickedActions';
import { checkTODO, deleteTODO, editTODO } from '../actions/todoActions';

const MainTableRow = ({
  name,
  checked,
  dataIndex,
}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(true);
    dispatch(clickedAdd(dataIndex));
  };

  const handleButtonClick = () => {
    if (clicked) {
      setClicked(false);
      dispatch(clickedRemove(dataIndex));
    } else {
      dispatch(deleteTODO(dataIndex));
    }
  };

  const handleCheckChange = () => {
    dispatch(checkTODO(dataIndex));
  };

  const handleNameChange = (event) => {
    // eslint-disable-next-line no-console
    console.log(event.value);
    dispatch(editTODO(dataIndex, event.value));
  };

  return (
    <div className="mainTableRow">
      <div className={(clicked) ? 'nameTextDisplayNone' : 'nameTextDisplayInline'} onClick={() => handleClick()}>
        {name}
      </div>
      <div className={(clicked) ? 'nameTextDisplayInline' : 'nameTextDisplayNone'} onClick={() => handleClick()}>
        <input
          data-index={dataIndex}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="rowCheckbox">
        <input
          data-index={dataIndex}
          type="checkbox"
          checked={checked}
          onChange={handleCheckChange}
        />
      </div>
      <div className="rowButton">
        <button data-index={dataIndex} type="button" onClick={handleButtonClick}>{(clicked) ? 'Exit Edit Mode' : 'Delete'}</button>
      </div>
    </div>
  );
};

MainTableRow.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  dataIndex: PropTypes.number.isRequired,
};

MainTableRow.defaultProps = {
  name: '',
  checked: false,
};

export default MainTableRow;
