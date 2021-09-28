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
          flexDirection: 'column',
          border:'2px solid #0085ff',
          padding:'1rem',
          margin:'1rem',
          backgroundColor:'#223333',
          borderRadius:8
        }}
      >
        <div style={{border:'2px solid #0085ff',padding:'1rem',marginBottom:10,color:"#fff",
          borderRadius:8}}>{userData.name}</div>
        <div style={{border:'2px solid #0085ff',padding:'1rem',color:"#fff",
          borderRadius:8}}>{userData.bio}</div>
      </div>
    </>
  )
}
