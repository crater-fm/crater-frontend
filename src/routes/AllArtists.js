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
import PaginationLink from '../PaginationLink.js'
import { useLocation, Link } from 'react-router-dom';


const AllArtistsList = (props) => {
    let artistList = [];
    let displayPage = props.displayPage;
    let allArtists = props.allArtists;

    allArtists.results.forEach((element, index) => {
        artistList[index] =
            <div>
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
            </div>

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
            <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                <Link to="/artist">
                    Top Artists
                </Link>
            </Typography>
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
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 20);

    useEffect(() => {
        let mounted = true;
        getAllArtists(setAllArtists, page, mounted);
        return () => {
            mounted = false;
        }
    }, [page, setAllArtists]);

    if (allArtists === null) {
        return null;
    }

    if (displayPage === 'homepage') {
        return (
            <AllArtistsList allArtists={allArtists} displayPage={displayPage} />
        )
    }

    return (
        <Box>
            <AllArtistsList allArtists={allArtists} displayPage={displayPage} />
            <PaginationLink displayPage={displayPage} />
        </Box>
    )
}