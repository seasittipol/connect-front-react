import { useState } from 'react'
import './App.css'
import RegisterForm from './layout/RegisterForm'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className='min-h-screen flex flex-col gap-3' data-theme={dark ? "dark" : "cupcake"}>
      <h1 className="text-3xl font-bold underline text-pink-700">
        Hello world!
      </h1>
      <input type="checkbox" className="toggle" checked={dark} onChange={e => { setDark(e.target.checked) }} />
      <hr />
      <RegisterForm />
    </div>
  )
}

export default App
