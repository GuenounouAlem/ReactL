import { useState } from "react"


export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [ttitle, setTTitle] = useState("");
    const [ttext, setTText] = useState("");
   

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
 
  return (
    <div>
        <h1>List of todos</h1>
            <ul>
                {todos.map((todos, index) => <li key={index} onClick={() => delTodo(index)}>Title : {todos.title} <br /> {todos.text}</li> )}
            </ul>
        <input onChange={changeTitle} type="text" placeholder="Title of todo" value={ttitle} /> <br />
        <input onChange={changeText} type="text" placeholder="Text of todo" value={ttext} /> <br />
        <button id="addButton" onClick={addTodo}>Add</button>

    </div>
  )
}
