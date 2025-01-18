import { useEffect, useState } from 'react'
import { loginDirectus } from './services/loginDirectus'
import Content from './components/Content'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // login to the directus so we can fetch the data
  const handleLogin = async () => {
    return await loginDirectus()
  }

  useEffect(() => {
    const login = async () => {
      const login = await handleLogin()
      setLoading(false)

      if (!login) {
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
      }
    }

    login()
  }, [])

  return (
    <>
      {loading ? (
        <p className="text-center">Please wait ...</p>
      ) : isLoggedIn ? (
        <Content />
      ) : (
        <button className="mx-auto" type="button" onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  )
}

export default App
