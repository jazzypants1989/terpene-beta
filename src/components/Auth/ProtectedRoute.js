import { Navigate, Outlet, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
