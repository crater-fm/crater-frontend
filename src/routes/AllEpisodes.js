import React, { useState, useEffect } from 'react';
import '../index.css';
import { getAllEpisodes } from '../data.js'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import dateToString from '../utils.js'

const AllEpisodesList = (props) => {
    let episodeList = [];
    let displayPage = props.displayPage;
    let allEpisodes = props.allEpisodes;

    allEpisodes.results.forEach((element, index) => {
        episodeList[index] =
            <ListItem key={element.episode_id}>
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

    // Concatenate results if rendered on the homepage
    if (displayPage === 'homepage') {
        episodeList = episodeList.slice(0, 5);
    }

    return (
        <Container sx={{
            bgcolor: '#C1A6FF',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
        }}>
            <Typography>Recent Episodes</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Episode</Typography>
                <Typography>Broadcast Date</Typography>
            </Box>
            <List>{episodeList}</List>
        </Container>
    )
}

export default function AllEpisodes(props) {
    let displayPage = props.displayPage
    let [allEpisodes, setAllEpisodes] = useState(null);

    useEffect(() => {
        let mounted = true;
        getAllEpisodes(setAllEpisodes, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    if (allEpisodes === null) {
        return null;
    }

    return (
        <AllEpisodesList allEpisodes={allEpisodes} displayPage={displayPage} />
    )
}