import React from 'react';
import TextField from '@mui/material/TextField'

export default function Searchbar(props) {
    const searchValue = props.searchValue

    function handleChange(event) {
        props.onSearchValueChange(event.target.value);
    }

    function handleSubmit(event) {
        props.onSearchValueSubmit(event)
    }

    return (
            <form onSubmit={handleSubmit} action='/search'>
                <input
                    className="searchbar"
                    type="search"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search for an Artist, DJ, or Episode"
                />
            </form>
    )

}