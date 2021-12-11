import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
    NavLink
} from "react-router-dom";
import Searchbar from './routes/Searchbar.js'
import craterLogoImage from "./img/crater-logo-white-cropped.png"



const pages = ['Artists', 'DJs', 'Info', 'Account'];

export default function Header(props) {
    const searchValue = props.searchValue;
    const handleSearchValueChange = props.handleSearchValueChange;
    const handleSearchValueSubmit = props.handleSearchValueSubmit;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                            <IconButton
                                size="large"
                                aria-label="account of current user"
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
                                    display: { xs: 'block', md: 'none' },
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <NavLink to="/">
                                <img className='crater-logo' src={craterLogoImage} alt=""></img>
                            </NavLink>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key='artist'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to="artist">
                                    <Typography color="white" textAlign="center">Artists</Typography>
                                </NavLink>
                            </Button>
                            <Button
                                key='dj'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to="dj">
                                    <Typography color="white" textAlign="center">DJs</Typography>
                                </NavLink>
                            </Button>
                            <Button
                                key='info'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to="info">
                                    <Typography color="white" textAlign="center">Info</Typography>
                                </NavLink>
                            </Button>
                        </Box>
                        <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit}/>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}