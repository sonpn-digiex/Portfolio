import MainLayout from '@components/layout/MainLayout'
import { Outlet, useNavigate } from 'react-router-dom'
import PAGE_ROUTES from '@utils/constants'
import { useEffect } from 'react'
import createRootLink from '@utils/helpers'
import { useLocalStorage } from 'usehooks-ts'

function App() {
  const navigate = useNavigate()
  const [isDarkTheme] = useLocalStorage('darkTheme', true)

  useEffect(() => {
    navigate(createRootLink([PAGE_ROUTES.HOME.ROOT]))
  }, [navigate])

  return (
    <div
      className={`w-full min-h-screen ${
        isDarkTheme ? 'dark bg-dark-background' : 'light bg-light-background'
      } `}
    >
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  )
}

export default App
