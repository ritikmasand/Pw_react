import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './componenet/Bio'
import Contact from './componenet/Contact'
import Experience from './componenet/Experience'
import Skills from './componenet/Skills'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Bio />
     <hr />
      <Contact />
      <hr />
      <Experience/>
      <hr />
      <Skills/>
    </div>
  );
}

export default App
