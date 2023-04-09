import { useEffect, useState } from "react";

export const Task = (props) =>{
    const {name,taskState} = props;
    const localStorageState = JSON.parse(localStorage.getItem("taskList")).filter(t => t.name === name);
    const [state,setState] = useState(localStorageState[0].state);
    
    
    const handleOnChange = ()=>{
        let newState = !state;
        setState(newState);
        let existing = localStorage.getItem("taskList");
        let parseExisting = JSON.parse(existing);
        parseExisting.map(t => {
            if(t.name === name){
                t.state = newState;
            }
        });
        localStorage.setItem("taskList",  JSON.stringify(parseExisting));
    }
    return <div>
        <label style={{textDecoration: state ? 'line-through': ''}}>
            <input checked={state} onChange={()=> {handleOnChange()}} type="checkbox" />
            {name}
        </label>
        
    </div>
}