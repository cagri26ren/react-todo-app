import { useState, useEffect } from "react";

function FooterMenu(props) {
    const[text,setText] = useState('');

    let textInput = null;

    const handleSubmit = () =>{
        props.handleCreate(text);
    };  

    useEffect(() => {
        console.log(props.clickedArr);
        if( props.clickedArr.length === 0){
            textInput.focus();
        }
        const onKeyDown = (e) => {
            if (e.keyCode === 13) {
                props.handleCreate(text);
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    },[props,text]);

    return (
        <div style = {{marginTop:'125px',marginLeft:'40%'}}>
            <span>
                <label>
                    Task Name:
                </label>
                <input style={{marginRight:'10px'}} type="text" value={text} onChange = {(t) => setText(t.target.value)} ref={(text)=>{textInput=text}}/>
                <button onClick={handleSubmit}  type="button">Create New Task</button>
            </span>
        </div>
    );
  }
  
  export default FooterMenu;