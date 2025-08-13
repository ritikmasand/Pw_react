import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './component/Child1'
import { contextMain } from './context' 
import ChildA from './component/ChildA'

function App() {
  const [count, setCount] = useState(0)
  const data = 'Child E data'
  return (
    <>
     {/* <Child1 data={data} /> */}
    <contextMain.Provider value={data} >
      <ChildA/>
    </contextMain.Provider>
    </>
  )
}

export default App
