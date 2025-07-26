import React from 'react'
import { forwardRef } from 'react'

function Test(_,ref) {
  return (
    <div ref={ref}>
      <button>ABCD</button>
      <h2>Test Component</h2>
    </div>
  );
}

export default forwardRef(Test)
