import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(1),
    //     width: 'auto',
    // },
    //width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '1em',
    },
}));

export default function Searchbar(props) {
    const searchValue = props.searchValue

    function handleChange(event) {
        props.onSearchValueChange(event.target.value);
    }

    function handleSubmit(event) {
        props.onSearchValueSubmit(event)
    }

    return (
        <Container sx={{
            bgcolor: '#D9D7D5',
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            minWidth: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form onSubmit={handleSubmit} action='/search'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%', height: '100%'}}>
                    <Search>
                        <StyledInputBase
                            placeholder="Search for artists, DJs, or radio shows…"
                            value={searchValue}
                            onChange={handleChange}
                            inputProps={{
                                'aria-label': 'search',
                            }}
                        />
                    </Search>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: 1,
                            boxShadow: 0,
                            height: '100%',
                        }}>
                        Search
                    </Button>
                </Box>
            </form>
        </Container>
    )
}