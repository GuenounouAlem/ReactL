import { useState } from "react"


export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [ttitle, setTTitle] = useState("");
    const [ttext, setTText] = useState("");
    const [checked, setChecked] = useState(false);
   

    function addTodo() {
        const newTodo = {
            title : ttitle,
            text : ttext,
            
        }
        setTodos((t) => ([...t, newTodo]));

        setTTitle("");
        setTText("");
        
    }
    function delTodo(index) {
        setTodos(todos.filter((_,i) => i != index))
    }
    function changeTitle (event) {
        setTTitle(event.target.value)
    }
    function changeText (event)
    {
        setTText(event.target.value)
    }
    function check (event) {
        setChecked(event.target.checked)
    }
    function delAll(index){
        setTodos(todos.filter((_,i) => i != index))
    }
 
  return (
    <div className="flex w-full">
        <h1 className="font-bold text-red-700 ">Todos List</h1>
            <ol>
                {todos.map((todos, index) =>  <li key={index}>
                                                   
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Title : {todos.title} <br />
                {todos.text}</div>
                                                                            
                                                                            <input className="checkbox checkbox-error" type="checkbox" onChange={() => check(index)}></input>
                                                                            <button className="btn btn-outline btn-error" onClick={() => delTodo(index)}>Delete</button>
                                                                            <button className="btn btn-outline btn-success">Up</button>
                                                                            <button className="btn btn-outline btn-warning">Down</button>
                                                                            </li> )
                                                                                              }
                                             
            </ol>
            <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
        <input className="input input-bordered input-primary w-full max-w-xs" onChange={changeTitle} type="text" placeholder="Title of task" value={ttitle} /> <br />
        <input className="input input-bordered input-primary w-full max-w-xs" onChange={changeText} type="text" placeholder="Text of task" value={ttext} /> <br />
        <button className="btn btn-outline btn-info" id="addButton" onClick={addTodo}>Add</button>
        <button className="btn btn-outline btn-error" >Delete Checked</button>
        </div>

    </div>
  )
}
