import React from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  accessToken: string | null;
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  accessToken,
  children,
}) => {
  return accessToken ? <>{children}</> : <Navigate to="/login" />;
};
export default ProtectedRoute;
