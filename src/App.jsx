import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { lazy, Suspense } from 'react'
import { Loading } from './components/Loading/Loading'
import { isAuthenticated } from './services/session'
import './App.css'
const LoginScreen = lazy(() => import('./views/LoginScreen/LoginScreen'))
const HomeDashboard = lazy(() => import('./views/HomeScreen/HomeScreen'))
const NotFoundScreen = lazy(() => import('./views/NotFoundScreen/NotFundScreen'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route element={<ProtectedRoute redirect='/' isAllowed={!isAuthenticated()} />} >
            <Route path='/login' element={<LoginScreen />} />
          </Route>

          <Route element={<ProtectedRoute redirect='/login' isAllowed={isAuthenticated()} />} >
            <Route path='/' element={<HomeDashboard />} />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
