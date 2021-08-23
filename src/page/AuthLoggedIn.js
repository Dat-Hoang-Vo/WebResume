import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@material-ui/core";
import TopBar from "../GlobalComponent/TopBar";

function AuthLoggedIn() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return(
        isAuthenticated && (
            <div>
                <TopBar />
                <img src={user.picture} alt={user.name} />
                <Typography variant="h2">{user.name}</Typography>
                <Typography variant="h2">{user.email}</Typography>
            </div>
        )
    );
}
export default AuthLoggedIn;