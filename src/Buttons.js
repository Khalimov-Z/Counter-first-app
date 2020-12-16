import React from 'react';

function Buttons(props) {
    function handlePlus(){
        props.setCounterP(props.rcounter + 3);

    }
    function handleMinus() {
        if(props.rcounter > 1){
            props.setCounterP(props.rcounter - 2);
         }

        }

    function handleReset(){
         props.setCounterP(0);
    }

    return (
        <div className='buttons'>
            <button  className='btn btn1' onClick={handlePlus}>  Увеличить </button>
           <button className='btn btn2'  onClick={handleMinus}> Уменьшить </button>
          <button className='btn btn3' onClick={handleReset}> Сбросить </button>
        </div>
    );
}

export default Buttons;