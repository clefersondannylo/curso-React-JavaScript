import { useState } from 'react'
import List from './components/List'

export default function App() {
  const [showList, setShowList] = useState(true)
  useEffect(() => {
    async function setUserResponse() {
      await localStorage.setItem('user', JSON.stringify({}))
    }
    setUserResponse()
  }, [])

  return <>{showList && <List />}</>
}
