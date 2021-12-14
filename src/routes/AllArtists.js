import React, { useState, useEffect } from 'react';
import '../index.css';
import { getAllArtists } from '../data.js'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


const AllArtistsList = (props) => {
    const list = [];
    Object.entries(props.allArtists).forEach((entry, index) => {
        const [key, value] = entry
        list[index] =
            <ListItem key={value.artist_id}>
                <ListItemButton component="a" href={`/artist/${value.artist_id}`} dense>
                        <ListItemText primary={value.artist_name} />
                        <ListItemText primary={value.play_count} /> 
                </ListItemButton>
            </ListItem>
    })
    return (
        <Container sx={{
            bgcolor: '#8BFFDC',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            }}>
            <Typography>Top Artists</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Artist</Typography>
                <Typography>Play Count</Typography>
            </Box>
            <List>{list}</List>
        </Container>
    )
}

export default function AllArtists(props) {
    let [allArtists, setAllArtists] = useState({});

    useEffect(() => {
        let mounted = true;
        getAllArtists(setAllArtists, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <Box className="all-artists">
            <AllArtistsList allArtists={allArtists} />
        </Box>
    )
}