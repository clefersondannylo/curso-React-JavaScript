import { useState } from 'react'
import List from './components/List'
// import Button from './components/Button'

export default function App(props) {
  const [showList, setShowList] = useState(true)

  return <>{showList && <List />}</>
}
