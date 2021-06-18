import {
  useState, useEffect, React, useCallback,
} from 'react';
import '../style/FooterMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { getClickedArr } from '../selectors';
import { addTask } from '../actions/taskActions';

const FooterMenu = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const clickedArr = useSelector(getClickedArr);

  let textInput = null;

  const handleSubmit = useCallback(() => {
    dispatch(addTask(text));
    setText('');
  }, [dispatch, text]);

  useEffect(() => {
    if (clickedArr?.length === 0) {
      textInput.focus();
    }
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        dispatch(addTask(text));
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
