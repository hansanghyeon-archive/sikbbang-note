import React, { useEffect, useState } from 'react'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [doubleCount, setDoubleCount] = useState(0)

  useEffect(() => {
    setDoubleCount(count * 2)
  }, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <div>double count : {doubleCount}</div>
    </div>
  )
}

export default App