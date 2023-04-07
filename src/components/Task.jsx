export const Task = (props) =>{

    const {name} = props;
    return <div>
        <label>
            <input type="checkbox" />
            {name}
        </label>
        
    </div>
}