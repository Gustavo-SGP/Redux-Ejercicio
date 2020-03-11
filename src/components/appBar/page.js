import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Page = (props) => {
    return (
        <AppBar position="static">
            <ToolBar className="appbar">
                <Typography variant="h6" color="inherit">
                    Barra de Búsqueda
                </Typography>

                <AccountCircle />
            </ToolBar>
        </AppBar>
    );
};

export default Page;