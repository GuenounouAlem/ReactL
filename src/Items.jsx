import { useState } from "react";

export default function Items() {
  const [items, setItems] = useState(["Pc", "Mac"]);

  function addItem() {
    const newFood = document.getElementById("newFood").value;
    document.getElementById("newFood").value = "";
    setItems((prevItems) => [...prevItems, newFood]);
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="items-container">
      <h1 className="items-title">Items</h1>
      <ul className="items-list">
        {items.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}{" "}
          </li>
        ))}
      </ul>
      <br></br>

      <input
        id="newFood"
        className="input-container"
        type="text"
        placeholder="New Item"
      ></input>
      <button id="add-button" className="item-button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
