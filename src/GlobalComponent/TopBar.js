import HomeIcon from '@material-ui/icons/Home';
import { IconButton, AppBar, Toolbar } from '@material-ui/core';

import { Link } from 'react-router-dom';

function TopBar() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <IconButton edge="start" color="inherit" aria-label="home">
                            <HomeIcon />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;