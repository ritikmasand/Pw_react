import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './components/CompA'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './components/Recipe'
import DemoList from './components/DemoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <CompA/>
     <Routes>
      <Route path='recipe/:id' element={<Recipe/>}/>
      <Route path='demo' element={<DemoList/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
