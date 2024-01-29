import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className='min-h-screen flex flex-col gap-3' data-theme={dark ? "dark" : "cupcake"}>
      <h1 className="text-3xl font-bold underline text-pink-700">
        Hello world!
      </h1>
      <input type="checkbox" className="toggle" checked={dark} onChange={e => { setDark(e.target.checked) }} />
      <hr />
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </div>
  )
}

export default App
