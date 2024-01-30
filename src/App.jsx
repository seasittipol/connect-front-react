import { useState } from 'react'
import useAuth from './hooks/useAuth'
import AppRouter from './routes/AppRouter'

function App() {
  const { user, setUser } = useAuth()
  const [dark, setDark] = useState(false)
  // console.log(user);
  return (
    <div className='min-h-screen flex flex-col gap-3' data-theme={dark ? "dark" : "cupcake"}>
      <AppRouter />
      <input type="checkbox" className="toggle" checked={dark} onChange={e => { setDark(e.target.checked) }} />
    </div>
  )
}

export default App
