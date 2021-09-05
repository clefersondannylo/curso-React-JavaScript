import { useState } from 'react'
import List from './components/List'
// import Button from './components/Button'

export default function App() {
  const [showList, setShowList] = useState(true)

  return (
    <>
      {showList && <List />}
      {/* <button onClick={() => setShowList(preventShowList => !preventShowList)}>
        {' '}
        Clique
      </button> */}
    </>
  )
}
