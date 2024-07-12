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
 
  return (
    <div>
        <h1>Todos List</h1>
            <ol>
                {todos.map((todos, index) =>  <li key={index}>
                                                                            Title : {todos.title} <br />
                                                                            {todos.text}
                                                                            <input type="checkbox" onChange={() => check(index)}></input>
                                                                            <button onClick={() => delTodo(index)}>Delete</button>
                                                                            <button>Up</button>
                                                                            <button>Down</button></li> )
                                                                                              }
                                             
            </ol>
            
        <input onChange={changeTitle} type="text" placeholder="Title of task" value={ttitle} /> <br />
        <input onChange={changeText} type="text" placeholder="Text of task" value={ttext} /> <br />
        <button id="addButton" onClick={addTodo}>Add</button>

    </div>
  )
}
