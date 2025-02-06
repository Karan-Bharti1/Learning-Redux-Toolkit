import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './features/posts/Posts'

function App() {
 

  return (
    <>
   <h1>My Social Media App</h1>
   <div>
    <Posts/>
   </div>
    </>
  )
}

export default App
