import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {
    NavLink
} from "react-router-dom";
import craterLogoImage from "./img/crater-logo-white-cropped.png"

export default function Header(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
            <AppBar color="secondary" position="static">
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <NavLink to="/">
                            <Box
                                component="img"
                                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                                alt="Home"
                                src={craterLogoImage}
                                className='crater-logo'
                            />
                        </NavLink>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <NavLink to="/">
                                <img className='crater-logo' src={craterLogoImage} alt=""></img>
                            </NavLink>
                        </Box>
                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="Crater Menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            <MenuItem key='artist' onClick={handleCloseNavMenu}>
                                <NavLink to="artist">
                                    <Typography textAlign="center">Artists</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem key='dj' onClick={handleCloseNavMenu}>
                                <NavLink to="dj">
                                    <Typography textAlign="center">DJs</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem key='info' onClick={handleCloseNavMenu}>
                                <NavLink to="info">
                                    <Typography textAlign="center">Info</Typography>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}