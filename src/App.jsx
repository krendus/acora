import { useState } from 'react'
import Nav from './components/Nav'
import Form from './pages/Form'

function App() {
  return (
    <div className='min-h-screen bg-black pt-[100px] h-full pb-10'>
      <Nav />
      <Form />
    </div>
  )
}

export default App
