import { useState } from 'react'
import useAuth from './hooks/useAuth'
import AppRouter from './routes/AppRouter'

function App() {
  const { user, setUser } = useAuth()
  const [dark, setDark] = useState(false)
  // console.log(user);
  return (
    <div className='min-h-screen flex flex-col gap-3' data-theme={dark ? "dark" : "cupcake"}>
      <h1 className="text-3xl font-bold underline text-pink-700">
        Hello , {user?.firstname}
      </h1>
      <input type="checkbox" className="toggle" checked={dark} onChange={e => { setDark(e.target.checked) }} />
      <hr />

      <AppRouter />
    </div>
  )
}

export default App
