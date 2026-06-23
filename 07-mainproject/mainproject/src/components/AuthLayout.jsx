import React, { useEffect, useState } from "react"; 
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true) // loading state is used to show a loading message while the authentication status is being checked. It is initialized to true, and will be set to false once the authentication check is complete.
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoading(false);
    }, [authStatus, authentication, navigate]);

    return loading ? <h2>Loading...</h2> : <>{children}</>;
}

// this component is used to wrap the content of the page and provide a consistent layout.
// It checks the authentication status of the user and redirects them to the appropriate page based on whether 
// they are authenticated or not. The children prop allows any nested components or elements to be rendered inside the AuthLayout.