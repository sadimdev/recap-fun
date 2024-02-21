import React from 'react'
import Home from './components/Home'
import CodePen from './components/CodePen'

const App = () => {
  return (
    <div>
      <Home />
      {/* pen animation */}
      <CodePen />
      <Home />
    </div>
  )
}

export default App