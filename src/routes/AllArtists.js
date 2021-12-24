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
import Pagination from '../Pagination.js'
import { useLocation } from 'react-router-dom';


const AllArtistsList = (props) => {
    let artistList = [];
    let displayPage = props.displayPage;
    let allArtists = props.allArtists;

    allArtists.results.forEach((element, index) => {
        artistList[index] =
            <ListItem key={element.artist_id} >
                <ListItemButton component="a" href={`/artist/${element.artist_id}`} dense>
                    <ListItemText>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>{element.artist_name}</Typography>
                            <Typography>{element.play_count}</Typography>
                        </Box>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
    })

    // Concatenate results if rendered on the homepage
    if (displayPage === 'homepage') {
        artistList = artistList.slice(0, 5);
    }

    return (
        <Container sx={{
            bgcolor: '#8BFFDC',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
        }}>
            <Typography>Top Artists</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Artist</Typography>
                <Typography>Play Count</Typography>
            </Box>
            <List>{artistList}</List>
        </Container>
    )
}

export default function AllArtists(props) {
    let displayPage = props.displayPage;
    let [allArtists, setAllArtists] = useState(null);
    const location = useLocation();
 

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 20);
        let mounted = true;
        getAllArtists(setAllArtists, page, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    if (allArtists === null) {
        return null;
    }

    return (
        <Box>
        <AllArtistsList allArtists={allArtists} displayPage={displayPage} />
        <Pagination /> 
        </Box>
    )
}