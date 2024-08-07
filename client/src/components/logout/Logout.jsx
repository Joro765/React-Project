import { useContext, useEffect } from "react";
import { logout } from "../../api/auth-api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";



export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler, accessToken } = useContext(AuthContext);



    useEffect(() => {
        async function logoutUser() {
            try {
                await logout(accessToken);
                logoutHandler();
                navigate("/");
            } catch (error) {
                console.log(error.message);
            }
        }

        logoutUser();
    }, []);

    return null;
}