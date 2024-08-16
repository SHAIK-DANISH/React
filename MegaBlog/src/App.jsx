import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' 
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header } from './components'
import { Footer } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> {setLoading(false)})
    .catch((error)=> {console.log(error)})
  },[])
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block bg-gray-800 text-white text-center p-4">
        <Header />
        <main>
        TOdo  {/* <Outlet /> */}

        </main>
        <Footer />
        </div>
    </div>
  ):(null)
}

export default App
