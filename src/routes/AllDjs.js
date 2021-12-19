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


const AllDjsList = (props) => {
    let djList = [];
    let displayPage = props.displayPage;
    let allDjs = props.allDjs;

    allDjs.results.forEach((element, index) => {
        djList[index] =
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
            <Typography>Top DJs</Typography>
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

    useEffect(() => {
        let mounted = true;
        getAllDjs(setAllDjs, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    if (allDjs === null) {
        return null;
    }

    return (
        <AllDjsList allDjs={allDjs} displayPage={displayPage}/>
    )
}