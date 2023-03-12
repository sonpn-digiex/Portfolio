import App from '@pages/App'
import HomePage from '@pages/HomePage'
import PAGE_ROUTES from '@utils/constants'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter basename={PAGE_ROUTES.ROOT}>
      <Routes>
        <Route path={PAGE_ROUTES.ROOT} element={<App />}>
          <Route path={PAGE_ROUTES.HOME.ROOT} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
