import React from 'react'
import Home from './components/Home'
import CodePen from './components/CodePen'

const App = () => {
  return (
    <div>
      <Home />
      {/* pen animation */}
      <CodePen />
      <div className='w-[70vw] max-[1200px] mx-auto'>
      <Home />
      </div>
    </div>
  )
}

export default App