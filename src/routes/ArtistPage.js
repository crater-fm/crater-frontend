import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getArtistDetails } from '../data.js'
import EpisodeResult from './EpisodeResult.js'
import SongArtistResult from './SongArtistResult.js'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import dateToString from '../utils.js'

function TabPanel(props) {
    let value = props.value;

    if (value === '0') {
        return null;
    } else if (value === '1') {
        return null;
    } else if (value === '2') {
        return null;
    } else {
        return null;
    }
}


const ArtistDetailsLists = (props) => {
    const episodeList = [];
    const djList = [];
    const songArtistList = [];
    let artistName = '';

    Object.entries(props.artistDetails).forEach((entry) => {
        const [key, value] = entry;
        if (key === 'artist') {
            artistName = value.artist_name;
        }
        if (key === 'episodes') {
            value.forEach((element, index) => {
                episodeList[index] =
                    <ListItem key={element.episode_id} >
                        <ListItemButton component="a" href={element.episode_url} target="_blank" rel="noreferrer" dense>
                            <ListItemText>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>{element.episode_name}</Typography>
                                    <Typography>{dateToString(element.episode_date)}</Typography>
                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
            })
        } else if (key === 'djs') {
            value.forEach((element, index) => {
                djList[index] =
                    <ListItem key={element.dj_id} >
                        <ListItemButton component="a" href={`/dj/${element.dj_id}`} dense>
                            <ListItemText>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>{element.dj_name}</Typography>
                                    <Typography>{element.episode_count}</Typography>
                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>;
            })
        } else if (key === 'song_artists') {
            value.forEach((element, index) => {
                let ytLink = `https://www.youtube.com/results?search_query=${artistName}+${element.song.song_name}`
                songArtistList[index] =
                    <ListItem key={element.song_artist_id} >
                        <ListItemButton component="a" href={ytLink} target="_blank" rel="noreferrer" dense>
                            <ListItemText>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>{element.song.song_name}</Typography>
                                    <Typography>{element.play_count}</Typography>
                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>;
            })
        } else {
            console.log('Unrecognized data type')
        }
    })

    // For mobile display Tabs
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                    <Typography>Key Stats for {artistName}</Typography>
                </Grid>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Container sx={{
                        bgcolor: '#8BFFDC',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                    }}>
                        <h5>Top songs by this artist:</h5>
                        <List>{songArtistList}</List>
                    </Container>
                </Grid>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Container sx={{
                        bgcolor: '#FFB68C',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                    }}>
                        <h5>DJs who play this artist:</h5>
                        <List>{djList}</List>
                    </Container>
                </Grid>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Container sx={{
                        bgcolor: '#C1A6FF',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                    }}>
                        <h5>Episodes featuring this artist:</h5>
                        <List>{episodeList}</List>
                    </Container>
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
                        <Tab value='0' label="Songs" />
                        <Tab value='1' label="DJs" />
                        <Tab value='2' label="Episodes" />
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} />
                </Grid>
            </Grid>
        </div>



    )
}

export default function ArtistPage(props) {
    let params = useParams();
    let artistId = params.artistId;
    let [artistDetails, setArtistDetails] = useState({});

    useEffect(() => {
        let mounted = true;
        getArtistDetails(artistId, setArtistDetails, mounted);
        return () => {
            mounted = false;
        }
    }, [artistId])

    return (
        <div className="artist-info">
            <ArtistDetailsLists artistDetails={artistDetails} />
        </div>
    )
}