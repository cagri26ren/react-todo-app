import {
  useState, useEffect, React, useCallback,
} from 'react';
import '../style/FooterMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
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
          <input
            className="form-control"
            style={{ width: '250px', marginRight: '30px' }}
            name="textInput"
            type="text"
            value={text}
            placeholder="Enter Task Name"
            onChange={(t) => setText(t.target.value)}
            ref={(t) => { textInput = t; }}
          />
        </label>
        <Button onClick={handleSubmit} type="button" variant="outline-primary">Create New Task</Button>
      </span>
    </div>
  );
};
export default FooterMenu;
