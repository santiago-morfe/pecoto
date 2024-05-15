import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { lazy, Suspense } from 'react'
import { Loading } from './components/Loading/Loading'
import './App.css'
const LoginScreen = lazy(() => import('./views/LoginScreen/LoginScreen'))
const DashboardScreen = lazy(() => import('./views/DashboardScreen/DashboardScreen'))
const NotFoundScreen = lazy(() => import('./views/NotFoundScreen/NotFundScreen'))

function App () {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route element={<ProtectedRoute redirect='/' isAllowed={!token} />} >
            <Route path='/login' element={<LoginScreen />} />
          </Route>

          <Route element={<ProtectedRoute redirect='/login' isAllowed={!!token} />} >
            <Route path='/' element={<DashboardScreen />} />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
