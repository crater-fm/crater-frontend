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
    const list = [];
    Object.entries(props.allDjs).forEach((entry, index) => {
        const [key, value] = entry
        list[index] =
                <ListItem key={value.dj_id}>
                <ListItemButton component="a" href={`/dj/${value.dj_id}`} dense>
                    <ListItemText primary={value.dj_name} />
                    <ListItemText primary={value.episode_count} />
                </ListItemButton>
                </ListItem>
    })
    return (
        <Container sx={{
            bgcolor: '#C1A6FF',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
        }}>
            <Typography>Top DJs</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>DJ</Typography>
                <Typography>Episode Count</Typography>
            </Box>
            <List>{list}</List>
        </Container>
    )
}

export default function AllDjs(props) {
    let [allDjs, setAllDjs] = useState({});

    useEffect(() => {
        let mounted = true;
        getAllDjs(setAllDjs, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    return (
            <AllDjsList allDjs={allDjs} />
    )
}