import * as React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  function clearText() {
    setText("")
  }

  function handleCopy() {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  function handleExtraSpaces() {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }

  function firstLetterUp() {
    var words = text.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    setText(CapitalizedWords.join(' '))
  }

  const [text, setText] = React.useState("");
  let words = text.split(' ').filter((n) => { return n !== '' });
  // if (text.length === 0) words = [];
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#195d61', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <div id="buttons">
          <button
            type="button"
            className="btn btn-success mx-2 my-2"
            onClick={handleUpClick}
          >
            Convert Text To UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}
          >
            Convert Text To LowerCase
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-2 my-2"
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-warning mx-2 my-2"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
          <button
            type="button"
            className="btn btn-info mx-2 my-2"
            onClick={firstLetterUp}
          >
            Make the first word to UpperCase
          </button>
        </div>
      </div>

      <div className="container my-4" id="preview-waala">
        <h2>Your text summary</h2>
        <p>
          <b>{words.length} words</b> and <b>{text.length} charecters</b>
        </p>
        <p>
          Takes <b>{0.008 * words.length * 60} seconds</b> for an average reader
          to read this text
        </p>
      </div>
    </>
  );
}