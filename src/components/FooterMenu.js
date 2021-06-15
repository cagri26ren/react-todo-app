import { useState, useEffect, React } from 'react';
import '../style/FooterMenu.css';
import { useDispatch } from 'react-redux';
import { getClickedArr } from '../selectors';
import { addTODO } from '../actions/todoActions';

const FooterMenu = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const clickedArr = getClickedArr();

  let textInput = null;

  const handleSubmit = () => {
    dispatch(addTODO(text));
    setText('');
  };

  useEffect(() => {
    if (clickedArr?.length === 0) {
      textInput.focus();
    }
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        dispatch(addTODO(text));
        setText('');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [clickedArr, dispatch, text, textInput]);

  return (
    <div className="footerMenu">
      <span>
        <label htmlFor="textInput">
          Task Name:
          <input className="textInput" name="textInput" type="text" value={text} onChange={(t) => setText(t.target.value)} ref={(t) => { textInput = t; }} />
        </label>
        <button onClick={handleSubmit} type="button">Create New Task</button>
      </span>
    </div>
  );
};

export default FooterMenu;
