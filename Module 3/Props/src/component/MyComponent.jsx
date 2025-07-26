import React from 'react'

function MyComponent(props) {
  return (
    <div>
      <h1>This is MyComponent</h1>
      {props.array}
    </div>
  );
}

export default MyComponent
