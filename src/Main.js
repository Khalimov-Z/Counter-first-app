
import Number from "./Number";
import Buttons from "./Buttons";
import {useState} from "react";
function Main(props) {
   const [counter, setCounter]=useState(0);
    return (
        <div>
            <Number rcounter={counter}/>
            <Buttons rcounter={counter} setCounterP={setCounter}/>
        </div>
    );
}

export default Main;