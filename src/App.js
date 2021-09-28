import { useState, useEffect } from 'react'
import api from '../src/services/api'

export default function App() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState({})
  useEffect(() => {
    const localStorageUserData = localStorage.getItem(
      '@reactapp:githubUserData'
    )
    setUserData(JSON.parse(localStorageUserData) || {})
  }, [])

  async function getUserGithubData() {
    const { data } = await api.get(username)
    localStorage.setItem('@reactapp:githubUserData', JSON.stringify(data))
    setUserData(data)
  }

  // const [showList, setShowList] = useState(true)
  // useEffect(() => {
  //   async function setUserResponse() {
  //     await localStorage.setItem('user', JSON.stringify({}))
  //   }
  //   setUserResponse()
  // }, [])

  return (
    <>
      <input
        type="text"
        onChange={event => setUsername(event.target.value)}
        value={username}
      />
      <button onClick={getUserGithubData}>Pesquisar usuário</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div>{userData.name}</div>
        <div>{userData.bio}</div>
      </div>
    </>
  )
}
