import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../store/auth' ;

const PrivateRoute = ({ children }:{children:React.ReactNode}) => {

    const loggedIn = useAuthStore((state:any) => state.isLoggedIn)();

    return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
