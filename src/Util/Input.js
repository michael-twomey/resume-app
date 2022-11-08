import React from 'react';

export default function Input(props) {
  return (
    <div className="label-input-container">
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
        <input
          autoComplete="off"
          id={props.id}
          name={props.varName}
          type={props.type}
          value={props.value}
          onChange={props.handleInputChange} />
    </div>
  );
}