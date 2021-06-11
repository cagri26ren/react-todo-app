import { useState, useEffect, React } from 'react';
import PropTypes from 'prop-types';

const FooterMenu = ({
  handleCreate,
  clickedArr,
}) => {
  const [text, setText] = useState('');

  let textInput = null;

  const handleSubmit = () => {
    handleCreate(text);
  };

  useEffect(() => {
    if (clickedArr.length === 0) {
      textInput.focus();
    }
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        handleCreate(text);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [clickedArr, handleCreate, text]);

  return (
    <div style={{ marginTop: '125px', marginLeft: '40%' }}>
      <span>
        <label htmlFor="textInput">
          Task Name:
          <input name="textInput" style={{ marginRight: '10px' }} type="text" value={text} onChange={(t) => setText(t.target.value)} ref={(t) => { textInput = t; }} />
        </label>
        <button onClick={handleSubmit} type="button">Create New Task</button>
      </span>
    </div>
  );
};

FooterMenu.propTypes = {
  handleCreate: PropTypes.func.isRequired,
  clickedArr: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FooterMenu;
