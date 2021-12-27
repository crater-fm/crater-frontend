import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getDjDetails } from '../data.js'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import dateToString from '../utils.js'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function TabPanel(props) {
    let value = props.value;

    if (value === '0') {
        return null;
    } else if (value === '1') {
        return null;
    } else {
        return null;
    }
}

const DjDetailsLists = (props) => {
    const episodeList = [];
    const artistList = [];
    let djName = '';

    Object.entries(props.djDetails).forEach((entry) => {
        const [key, value] = entry;
        if (key === 'dj') {
            djName = value.dj_name;
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
        } else if (key === 'artists') {
            value.forEach((element, index) => {
                artistList[index] =
                    <ListItem key={element.artist_id} >
                        <ListItemButton component="a" href={`/artist/${element.artist_id}`} target="_blank" rel="noreferrer" dense>
                            <ListItemText>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>{element.artist_name}</Typography>
                                    <Typography>{dateToString(element.play_count)}</Typography>
                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
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
                    <Typography variant="h5" component="h5" sx={{ p: 1 }}>Key Stats for {djName}</Typography>
                </Grid>
                <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Container sx={{
                        bgcolor: '#8BFFDC',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                    }}>
                        <Typography>Artists this DJ spins:</Typography>
                        <List>{artistList}</List>
                    </Container>
                </Grid>
                <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Container sx={{
                        bgcolor: '#C1A6FF',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                    }}>
                        <Typography>Episodes by this DJ:</Typography>
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
                        <Tab value='0' label="Artists" />
                        <Tab value='1' label="Episodes" />
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} />
                </Grid>
            </Grid>
        </div>

    )
}

export default function DjPage(props) {
    let params = useParams();
    let djId = params.djId;
    let [djDetails, setDjDetails] = useState({});

    useEffect(() => {
        let mounted = true;
        getDjDetails(djId, setDjDetails, mounted);
        return () => {
            mounted = false;
        }
    }, [djId])

    return (
        <div className="dj-info">
            <DjDetailsLists djDetails={djDetails} />
        </div>
    )
}