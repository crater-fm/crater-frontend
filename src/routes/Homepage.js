import React, { useState } from 'react';
import ntsLogo from "../img/nts_icon.png"
// import dublabLogo from '../img/dublab-logo-transparent.png'
// import kxluLogo from '../img/KXLU-Black.png'
import Searchbar from './Searchbar.js'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AllArtists from './AllArtists.js'
import AllDjs from './AllDjs.js'
import AllEpisodes from './AllEpisodes.js'

// 

function TabPanel(props) {
    let value = props.value;

    if (value === '0') {
        return <AllArtists displayPage='homepage' />;
    } else if (value === '1') {
        return <AllDjs displayPage='homepage' />;
    } else if (value === '2') {
        return <AllEpisodes displayPage='homepage' />;
    } else {
        return null;
    }
}

export default function Homepage(props) {

    // For Searchbar
    const searchValue = props.searchValue;
    const handleSearchValueChange = props.handleSearchValueChange;
    const handleSearchValueSubmit = props.handleSearchValueSubmit;

    // For mobile display Tabs
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                    <Typography variant="h5" component="h5" sx={{p: 1}}>Discover new music with Crater</Typography>
                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                    <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit} />
                </Grid>
                <Grid item md={4} xl={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <AllArtists displayPage='homepage' />
                </Grid>
                <Grid item md={4} xl={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <AllDjs displayPage='homepage' />
                </Grid>
                <Grid item md={4} xl={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <AllEpisodes displayPage='homepage' />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="homepage tabs"
                    >
                        <Tab value='0' label="Artists" />
                        <Tab value='1' label="DJs" />
                        <Tab value='2' label="Episodes" />
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box></Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h6" sx={{ p: 1 }}>Our data comes from the following curators:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Container sx={{
                        display: 'flex',
                        width: 100,
                        justifyContent: 'center',
                        gap: '25px',
                    }}>
                        <a href="https://www.nts.live/" target="_blank" rel="noreferrer">
                            <Box
                                component="img"
                                alt="NTS Radio"
                                src={ntsLogo}
                                sx={{ width: 'auto', height: 200 }}
                            />
                        </a>
                    </Container>
                </Grid>
            </Grid>

        </div>
    )
}