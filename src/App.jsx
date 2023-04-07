import './App.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

const taskList = [
  {name:"Task 1"},
  {name:"Task 2"}
]
function App() {

  return (
    <div className="App">
      <Header></Header>
      <TaskList initialList={taskList}></TaskList>
    </div>
  )
}

export default App
