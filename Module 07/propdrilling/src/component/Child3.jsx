import React from 'react'
import Child4 from './Child4'

function Child3({data}) {
  return (
    <div>
       Child3 - {data}
      <Child4 data={data} />
    </div>
  )
}

export default Child3
