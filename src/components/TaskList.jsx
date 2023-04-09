import { useState } from "react"
import { Task } from "./Task"
import { useEffect } from "react"


export const TaskList = ({initialList})=>{
    const [list, SetList] = useState([])
    


    console.log(list);
    useEffect(() =>{
        const localStorageData = localStorage.getItem("taskList");
        const storedTaskList = JSON.parse(localStorageData);
        if(storedTaskList !== null ){
            SetList(storedTaskList);
        }else{
            SetList([]);
        }   
    },[])
    const addTaskToList = (task) => {
        let newList = [...list]
        newList = [...list,{name:task, state:false}];
        SetList(newList);
        localStorage.setItem("taskList",JSON.stringify(newList));
    }
    return <div>
        <div>
            <input id="inputId" type="Text"/>
            <button onClick={() => {
                addTaskToList(document.getElementById("inputId").value);
            }
                
                }>Add Task</button>
        </div>
        
        {
            list.map(task =><Task name={task.name}/>)
        }
    </div>
}