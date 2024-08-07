import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Navigate } from "react-router-dom";


export default function UserGuard({ children }) {
    const { isAuthenticated } = useContext(AuthContext);


    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <>
            {children}
        </>
    )


}