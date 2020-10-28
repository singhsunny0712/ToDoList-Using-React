// import React, { useState } from "react";
import React from "react";


function Todoitem(prop) {
    // console.log(prop);
    // const [isDone, setIsDone] = useState(false);

    // function handleclick() {
    //     //    console.log("hello");
    //     setIsDone(preval => {
    //         return !preval;
    //     });
    // }

    // return (
    //     <div onClick={handleclick}>
    //         <li style={{ textDecoration: isDone?"Line-through":"none"}}>{prop.text}</li>
    //     </div>
    // );

    return (
    <div onClick={()=>{
        prop.onChecked(prop.id);
    }     
    }>
        <li>{prop.text}</li>
    </div>
    )
}

export default Todoitem;