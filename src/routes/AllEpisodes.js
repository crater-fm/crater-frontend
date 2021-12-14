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

export default function AllEpisodes(props) {
    let [allEpisodes, setAllEpisodes] = useState({});

    return(
        <Container sx={{
            bgcolor: '#8BAEFF',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
        }}>
            <Typography>Recent Episodes</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Episode</Typography>
                <Typography>Date</Typography>
            </Box>
            <List></List>
        </Container>
    )
}