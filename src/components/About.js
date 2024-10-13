import React from "react";

function About(props) {
  return (
    <div
      className={`container my-3 text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h1>
        <b>About This App</b>
      </h1>
      <div style={{ marginTop: "50px" }}>
        <h4>
          <b>Welcome to Text Utiles</b>
        </h4>

        <p>
          This innovative app, developed by Prashant on October 10, 2024, allows
          you to effortlessly convert text into your desired format with just a
          click of a button. Whether you need to change text styles, formats, or
          even languages, our user-friendly interface makes it simple and
          efficient.
        </p>

        <h6>
          <b>Key Features:</b>
        </h6>

        <ul>
          <li>Easy-to-use button for quick conversions</li>
          <li>Supports multiple text formats</li>
          <li>Fast and reliable processing</li>
          <li>User-friendly design for seamless navigation</li>
        </ul>
        <h6>
          <b>How to Use:</b>
        </h6>
        <li>Enter or paste your text into the designated area.</li>
        <li>Select your desired format from the available options.</li>
        <li> Click the button to convert your text instantly!.</li>

        <p>
          {" "}
          Feedback: We love hearing from our users! If you have any suggestions
          or issues, please reach out to us at prashantfarzidevloper@123.com.
        </p>

        <p>
          Thank you for using Text Utils We hope it makes your text conversion
          tasks easier and more enjoyable.
        </p>
      </div>{" "}
    </div>
  );
}

export default About;
