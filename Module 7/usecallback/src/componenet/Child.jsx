import React from 'react'
import { memo } from 'react';

function Child({learning}) {
    console.log('Child Mounted');
    
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
