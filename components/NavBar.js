import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    FitTrack
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/recorddata">Record Data</Button>
                <Button color="inherit" href="/trackprogress">Track Progress</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
