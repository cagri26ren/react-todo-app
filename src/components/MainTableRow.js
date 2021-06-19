/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, React, useCallback } from 'react';
import '../style/MainTableRow.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { clickedAdd, clickedRemove } from '../actions/clickedActions';
import { checkTask, deleteTask, editTask } from '../actions/taskActions';

const MainTableRow = ({
  name,
  checked,
  dataIndex,
}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    setClicked(true);
    dispatch(clickedAdd(dataIndex));
  }, [dataIndex, dispatch]);

  const handleButtonClick = useCallback(() => {
    if (clicked) {
      if (name.length === 0) {
        // eslint-disable-next-line no-alert
        alert('Cannot add empty named task');
        return;
      }
      setClicked(false);
      dispatch(clickedRemove(dataIndex));
    } else {
      dispatch(deleteTask(dataIndex));
    }
  }, [clicked, dataIndex, dispatch, name]);

  const handleCheckChange = useCallback(() => {
    dispatch(checkTask(dataIndex));
  }, [dataIndex, dispatch]);

  const handleNameChange = useCallback((event) => {
    dispatch(editTask(dataIndex, event.target.value));
  }, [dataIndex, dispatch]);

  return (
    <div className="mainTableRow">
      <div className={(clicked) ? 'nameTextDisplayNone' : 'nameTextDisplayInline'} onClick={() => handleClick()}>
        {name}
      </div>
      <div className={(clicked) ? 'nameTextDisplayInline' : 'nameTextDisplayNone'} onClick={() => handleClick()}>
        <input
          data-index={dataIndex}
          className="form-control"
          type="text"
          value={name}
          placeholder="Enter Task Name"
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
        <Button
          data-index={dataIndex}
          variant="outline-danger"
          onClick={handleButtonClick}
        >
          {(clicked) ? 'Exit Edit Mode' : 'Delete'}
        </Button>
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
