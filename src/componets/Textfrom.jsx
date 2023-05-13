import React, { useState } from "react";


let Textform = ((props) => {
    let textarea = document.getElementsByClassName("form-control").value;
    const handleUpClick = () => {
        // setText("you have clicked on handleonClick"+text);
        let newText = text.toUpperCase();
        setText(newText);
        if (textarea != null) {
            props.ShowAlert("changed to UpperCase", "success");
        }
        else {
            props.ShowAlert("You have not written any Text plaese write and try", "danger");
        }
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("changed to LowerCase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleclear = () => {
        let newText = '';
        setText(newText);
        props.ShowAlert("Text is Cleared", "success");
    }
    const copyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Text is Coppied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert("Extra space has been removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="mt-5">{props.heading}</h1>
                <div className="mb-3 my-2">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#9a3838', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="6" placeholder="Enter Your text here..."></textarea>
                    <button type="button" onClick={handleUpClick} className="btn btn-primary my-2">Convert to upperCase</button>
                    <button type="button" onClick={handleDownClick} className="btn btn-secondary mx-2">Convert to LowerCase</button>
                    <button type="button" onClick={handleclear} className="btn btn-danger mx-2">clearText</button>
                    <button type="button" onClick={copyText} className="btn btn-success mx-2">copyText</button>
                    <button type="button" onClick={handleExtraSpaces} className="btn btn-info ">Remove Extra sapces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summary</h3>
                <p><b>{text.split(" ").filter((element)=>{return element.length!=0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter your text in Inbox to preview it here..."}</p>
            </div>

        </>
    )
});

export default Textform;