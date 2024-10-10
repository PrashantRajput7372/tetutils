import React from "react";
import PropTypes from "prop-types";

export default function Text(props = "Kindly enter text") {
  return (
    <div className="mb-3">
      <label htmlFor="mybox" className="form-label">
        <h4>
          <b>{props.tittle}</b>
        </h4>
      </label>

      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
    </div>
  );
}
Text.ProtoTypes = { tittle: PropTypes.string };
Text.defaultProps = { tittle: "Kidly enter text here" };
