import React, { useState } from "react";
function Editor() {
   
    const [words, setWords] = useState(0);
    const [letters, setLetters] = useState(0);
    const [text, setText] = useState('');
    const [numbers,setNumbers]=useState(0);
    return (
        <>
            <div className="container"><div className="form-floating">
                <textarea className="form-control" value={text} onChange={(e) => {
                    setText(e.target.value);
                    setLetters(e.target.value.length);
                    setWords((e.target.value.split(' ')).length);
                    var numb=e.target.value.match(/\d/g);
                    numb? setNumbers(numb.length):setNumbers(0);
                }}
                    placeholder="Leave a comment here" id="TextBox" style={{ height: "100px", backgroundColor: "rgb(69,69,69)", color: "white" }}></textarea>
                <label htmlFor="floatingTextarea2" style={{ color: "white" }}>Text Here</label>
                <div className="buttons my-3" style={{ display: "flex", justifyContent: "space-around" }}>
                    <button className="btn btn-primary" onClick={()=>{
                        setText(text.toUpperCase());
                    }}> Uppercase</button>
                    <button className="btn btn-primary" onClick={()=>{
                        setText(text.toLowerCase());
                    }}> LowerCase</button>
                    
                </div>
                <div className="display" style={{width:window.innerWidth/2, backgroundColor:"rgb(69,69,69)", color:"white" }}>
                    words: {words} &nbsp; |&nbsp;
                    letters: {letters} &nbsp;|&nbsp;
                    numbers: {numbers}
                </div>
            </div></div>
        </>
    )
}
export default Editor;