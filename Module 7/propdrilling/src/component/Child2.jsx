import React from 'react'
import Child3 from './Child3'

function Child2({data}) {
  return (
    <div>
      child 2 - {data}
      <Child3 data={data}/>
    </div>
  )
}

export default Child2
