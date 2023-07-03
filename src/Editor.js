import React, { useState } from "react"; 
import "./App.css"
function Editor() {
   
    const [words, setWords] = useState(0);
    const [letters, setLetters] = useState(0);
    const [text, setText] = useState('');
    const [numbers,setNumbers]=useState(0);
    const [fontFamily,setFontFamily]=useState('cursive');
    return (
        <>
            <div className="container"><div className="form-floating">
                <textarea  className="form-control"  value={text} onChange={(e) => {
                    setText(e.target.value);
                    setLetters(e.target.value.length);
                    setWords((e.target.value.split(' ')).length);
                    var numb=e.target.value.match(/\d/g);
                    numb? setNumbers(numb.length):setNumbers(0);
                }}
                    placeholder="Leave a comment here" id="TextBox" style={{ height:"200px", backgroundColor: "rgb(69,69,69)", color: "white", fontFamily:fontFamily,}}></textarea>
                <label htmlFor="floatingTextarea2" style={{ color: "white" }}>Text Here</label>
                <div className="buttons my-3" style={{ display: "flex", justifyContent: "space-around" }}>
                    <button className="btn btn-primary" onClick={()=>{
                        setText(text.toUpperCase());
                    }}> Uppercase</button>
                    <button className="btn btn-primary" onClick={()=>{
                        setText(text.toLowerCase());
                    }}> LowerCase</button>
                </div>
                <h6>Font family:</h6>
                <select value={fontFamily} id="fontFamily" onChange={(e) => setFontFamily(e.target.value)}>
                    <option value="Arial, sans-serif">Arial, sans-serif</option>
                    <option value="Verdana, sans-serif">Verdana, sans-serif</option>
                    <option value="Trebuchet MS, sans-serif">Trebuchet MS, sans-serif</option>
                    <option value="Gill sans">Gill sans</option>
                    <option value="Georgia, serif">Georgia, serif</option>
                    <option value="Times New Roman, serif">Times New Roman, serif</option>
                    <option value="monospace">monospace</option>
                    <option value="Lucida Sans Unicode, sans-serif">Lucida Sans Unicode, sans-serif</option>
                    <option value="Century Gothic, sans-serif">Century Gothic, sans-serif</option>
                    <option value="Palatino Linotype, serif">Palatino Linotype, serif</option>
                </select>
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