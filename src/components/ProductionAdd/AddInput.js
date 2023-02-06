import React from 'react';

export default function AddInput({ id, name }) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id}></input>
    </div>
  );
}
