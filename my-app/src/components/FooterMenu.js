import { useState, useEffect } from "react";

function FooterMenu(props) {
    const[text,setText] = useState('');

    const handleSubmit = () =>{
        props.handleCreate(text);
    };  

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.keyCode === 13) {
                props.handleCreate(text);
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    });

    return (
        <div style = {{marginTop:'125px',marginLeft:'30%'}}>
            <span>
                <label>
                    Task Name:
                </label>
                <input style={{marginRight:'10px'}} type="text" value={text} onChange = {(t) => setText(t.target.value)}/>
                <button onClick={handleSubmit}  type="button">Create New Task</button>
            </span>
        </div>
    );
  }
  
  export default FooterMenu;