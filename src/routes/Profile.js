import { authService } from "fbase";
import React, { useHistory } from "react";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => { 
        authService.signOut() 
        history.push("/");
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
};