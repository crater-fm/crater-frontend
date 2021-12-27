import React, { useState, useEffect } from 'react';
import '../index.css';
import { getAllDjs } from '../data.js'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import PaginationLink from '../PaginationLink.js'
import { useLocation, Link } from 'react-router-dom';


const AllDjsList = (props) => {
    let djList = [];
    let displayPage = props.displayPage;
    let allDjs = props.allDjs;

    allDjs.results.forEach((element, index) => {
        djList[index] =
            <div>
                <ListItem key={element.dj_id}>
                    <ListItemButton component="a" href={`/dj/${element.dj_id}`} dense>
                        <ListItemText>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>{element.dj_name}</Typography>
                                <Typography>{element.episode_count}</Typography>
                            </Box>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </div>

    })

    // Concatenate results if rendered on the homepage
    if (displayPage === 'homepage') {
        djList = djList.slice(0, 5);
    }

    return (
        <Container sx={{
            bgcolor: '#FFB68C',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
        }}>
            <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                <Link to="/dj">
                    Top DJs
                </Link>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>DJ</Typography>
                <Typography>Episode Count</Typography>
            </Box>
            <List>{djList}</List>
        </Container>
    )
}

export default function AllDjs(props) {
    let displayPage = props.displayPage
    let [allDjs, setAllDjs] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 20);

    useEffect(() => {
        let mounted = true;
        getAllDjs(setAllDjs, page, mounted);
        return () => {
            mounted = false;
        }
    }, [page, setAllDjs]);

    if (allDjs === null) {
        return null;
    }

    if (displayPage === 'homepage') {
        return (
            <AllDjsList allDjs={allDjs} displayPage={displayPage} />
        )
    }

    return (
        <Box>
            <AllDjsList allDjs={allDjs} displayPage={displayPage} />
            <PaginationLink />
        </Box>
    )
}