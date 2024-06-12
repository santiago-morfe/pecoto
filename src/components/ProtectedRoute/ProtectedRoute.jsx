import { Navigate, Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function ProtectedRoute ({ redirect, isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirect} />
  }

  return <Outlet />
}
