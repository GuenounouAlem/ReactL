import { useState } from "react"


export default function Form() {

    const [text, setText] = useState();
    const [tiri, setTiri] = useState();

    const changeText = (e) => {
        setText(e.target.value)
    }

    const changeTiri = (e) => {
        setTiri(e.target.value);
    }
  return (
    <div>Form
        <br />
        <label>
            <input type="text" onChange={changeText} />
            <p>{text}</p>
        </label>
        <br />
        <label>
            <input type="radio" value="tiri brk" checked={tiri === "tiri brk"} onChange={changeTiri} />
            tiri brk
        </label>
        <label>
            <input type="radio" value="matiriche" checked={tiri === "matiriche"} onChange={changeTiri}/>
            matiriche
        </label>
        
    </div>
  )
}
