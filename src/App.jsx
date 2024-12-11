import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 style={{ textAlign: 'center' }}>React Counter App</h1>
    <Counter start={10} step={2} />
    <Counter start={0} step={5} />
  </div>
);
}

export default App
