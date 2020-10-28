import React, { useState } from "react";
import ToDoitem from "./Todoitem.jsx";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handle(event) {
        const newval = event.target.value;
        setInputText(newval);
    }


    function addItem() {
        setItems(prevItem => {
            return [...prevItem, inputText];
        });
        setInputText("");
    }

    function deleteItem(id){
    //    console.log(id);
        setItems(prevItem =>{
            return prevItem.filter((item,index)=>
            {
                return index!==id;
            })
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handle} type="text" value={inputText} />
                <button onClick={addItem}><span>Add</span></button>
            </div>
            <div>
                <ul>
                    {items.map( (todoitem,index )=>
                        <ToDoitem
                            text={todoitem}
                            onChecked={deleteItem}
                            key={index}
                            id={index}
                        />)
                    }
                </ul>
            </div>

        </div>
    )
}

export default App;