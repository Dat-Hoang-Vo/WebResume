import { Typography } from "@material-ui/core";

import AuthLoginButton from "../AuthComponent/AuthLoginButton";
import AuthLogoutButton from "../AuthComponent/AuthLogoutButton";

import TopBar from "../GlobalComponent/TopBar";

function Auth() {
    return(
        <div>
            <TopBar />
            <Typography variant="h1">Auth Page</Typography>
            <AuthLoginButton />
            <AuthLogoutButton />
        </div>
    );
}

export default Auth;