import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Text(props) {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    if (!text.length) return props.showAlert("No text found", "danger");
    setText(text.toUpperCase());
    props.showAlert("Text Converted to UPPERCASE", "success");
  };
  const handelLoClick = () => {
    if (!text.length) return props.showAlert("No text found", "danger");
    setText(text.toLowerCase());
    props.showAlert("Text Converted to lowercase", "success");
  };
  const handelClean = () => {
    if (!text.length) return props.showAlert("No text to clear", "danger");
    setText("");
    props.showAlert("Text Cleared", "warning");
  };

  const handelRevClick = () => {
    if (!text.length) return props.showAlert("No text found", "danger");
    setText(text.split("").reverse("").join(""));
    props.showAlert("Text Reversed", "success");
  };

  const first = (text) => {
    // let word = text.toLowerCase();
    let x = text.toLowerCase().split(" ");
    let str = "";
    x.forEach((e) => {
      let y = e.charAt(0).toUpperCase() + e.slice(1);
      str = str + y + " ";
      // return str;
    });
    str = str.trim();

    return str;
  };

  const handelOnlyfirstuppercase = () => {
    if (!text.length) return props.showAlert("No text found", "danger");
    setText(first(text));
    props.showAlert("First Letter converted to CAP's", "success");
  };

  const handleonChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="mb-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h4>
          <b>{props.tittle}</b>
        </h4>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="mybox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "dark" : "white",
          }}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handelUpClick}
        >
          Convert TO UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handelLoClick}
        >
          Convert TO LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handelRevClick}
        >
          Reverse
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={handelOnlyfirstuppercase}
        >
          First letter cap
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-2"
          onClick={handelClean}
        >
          Clear Text Area
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>
          <b>Text Summary</b>
        </h3>
        <p>
          {text.length === 0
            ? 0
            : text.split(" ").filter((e) => e.length !== 0).length}{" "}
          words, {text.split("").filter((e) => e !== " ").length} Charecters
        </p>
        <p>
          {text.length === 0
            ? 0
            : Number(0.008 * text.split(" ").length).toFixed(2)}{" "}
          Minutes,approx required to read this paragraph.
        </p>
        <div>
          <h4>
            <b>Preview</b>
          </h4>
          <p>{text.length === 0 ? "Type something for Preview" : text}</p>
        </div>
      </div>
    </>
  );
}

// Text.ProtoTypes = { tittle: PropTypes.string };
// Text.defaultProps = { tittle: "Kidly enter text here" };
