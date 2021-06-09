import { useState } from "react";

function FooterMenu(props) {
    let i = 0;
    const[text,setText] = useState('');

    const handleSubmit = () =>{
    };  

    const handleKeyDown = (e) =>{
        if( e.keyCode === 13 ){
            i++;
            console.log(i);
            handleSubmit();
        }
    }

    document.addEventListener("keydown",handleKeyDown);


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