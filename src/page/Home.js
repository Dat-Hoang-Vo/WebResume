import { Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import TopBar from "../GlobalComponent/TopBar";

function Home() {
    return(
        <div>
            <TopBar />
            <Typography variant="h1" color="primary">Home Page</Typography>
            <Link to="/auth">
                <Typography color="primary">Auth Bar</Typography>
            </Link>
            
        </div>
    );
}

export default Home;