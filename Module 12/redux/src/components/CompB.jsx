import React from 'react'
import { useSelector } from 'react-redux'

function CompB() {
   const count = useSelector(state=>state.counter.value)
   const auth = useSelector(state=>state.auth.isLoggedIn)
  return (
    <div>
      {count}
      {auth}
    </div>
  )
}

export default CompB
