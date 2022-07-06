import React, { useState } from 'react'

export default function () {

    const[text,setText]=useState("");
    const[newText,setNewText]=useState("");
   // const[words,setWords]=useState(0);
   // const[chars,setChars]=useState(0);

    function handlerOnClickUp()
    {
        
        var newUpText=text.toUpperCase();
        setNewText(newUpText);
    }
    function handlerOnClickLow(){
        var newLowText=text.toLowerCase();
        setNewText(newLowText);
    }

    function handlerOnChange(e)
    {
        
        setText(e.target.value);
        
    }
    
    return (
        <div className='container my-4'>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter Text here..</label>
                <textarea onKeyUp={handlerOnChange}  className="form-control" id="myBox" rows="8"></textarea>
            </div>
            
            <div className='container my-4'>
                <button className="btn btn-primary mx-4" onClick={handlerOnClickUp} >Convert To ABCD</button>
                <button className="btn btn-primary mx-4" onClick={handlerOnClickLow} >Convert To abcd</button>
            </div>
            <div className="container">
                <h4>Text Summery</h4>
                <p>words:-{text.length==0?0:text.split(" ").length}  and  characters:- {text.length}</p>
            </div>
            <div className='container-fluid'>
                <h3 className='my-4'>Preview Here</h3>
                <div className="bg-dark text-light p-3 border-1">{newText}</div>
            </div>
           
        </div>
    )
}
