import { useSelector } from "react-redux"
import { Navigate } from "react-router"

const ProtectedRoute = ({ children, adminOnly }) => {
  const { isLoggedIn, isAdmin } = useSelector((state) => state.Auth)

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  if (adminOnly && !isAdmin) {
    return <h2>Access Denied</h2>
  }

  return children
}

export default ProtectedRoute