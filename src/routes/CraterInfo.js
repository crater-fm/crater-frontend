import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'




export default function CraterInfo() {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                    <Typography variant="h5" component="h5" sx={{ p: 1 }}>Crater is a portal for human-powered music discovery. It allows users to browse tracklist data from internet radio shows and DJ sets and discover connections between the best artists and curators.</Typography>
                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                    <Typography variant="h5" component="h5" sx={{ p: 1 }}> Crater is created by Drew Nollsch. You can contact him at the following links:</Typography>
                </Grid>
                <Grid item xs={4} md={4} xl={4} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button variant="contained" href="http://about.drewnollsch.com" target="_blank" rel="noreferrer">Website</Button>
                </Grid>
                <Grid item xs={4} md={4} xl={4} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button variant="contained" href="https://github.com/drex04" target="_blank" rel="noreferrer">Github</Button>
                </Grid>
                <Grid item xs={4} md={4} xl={4} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    <Button variant="contained" href="https://www.linkedin.com/in/drewnollsch" target="_blank" rel="noreferrer">LinkedIn</Button>
                </Grid>
            </Grid>
        </div>
    )
}