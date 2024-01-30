import { useState } from 'react'
import useAuth from './hooks/useAuth'
import AppRouter from './routes/AppRouter'

function App() {
  const { loading } = useAuth()
  // const [dark, setDark] = useState(true)
  // console.log(user);

  // if (loading) {
  //   return (
  //     <div className="4xl text-red-500">Loading....</div>
  //   )
  // }

  return (
    <div className='min-h-screen flex flex-col gap-3' >
      {loading ? <span className="loading loading-bars loading-lg scale-150"></span> : <AppRouter />}
      {/* <input type="checkbox" className="toggle" checked={dark} onChange={e => { setDark(e.target.checked) }} /> */}
    </div >
  )
}

export default App
