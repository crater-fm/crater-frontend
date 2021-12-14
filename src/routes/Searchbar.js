import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: '1em',
        width: '60vw',
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
            <Search>
                <form onSubmit={handleSubmit} action='/search'>
                    <StyledInputBase
                        placeholder="Search for artists, DJs, or radio shows…"
                        value={searchValue}
                        onChange={handleChange}
                        inputProps={{
                            'aria-label': 'search',
                        }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            textTransform: 'capitalize',
                            margin: 1,
                            padding: 1,
                            borderRadius: 1,
                            boxShadow: 0,
                        }}>
                        Search
                    </Button>
                </form>
            </Search>
        </Container>
    )
}