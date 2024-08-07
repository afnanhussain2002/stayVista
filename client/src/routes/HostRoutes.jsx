import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";


const HostRoutes = ({children}) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <Loader/>
    if (role === 'host') return children
    return <Navigate to={'/dashboard'} replace={true}/>
};

export default HostRoutes;