import React from 'react';

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
                    className="search-icon search-input"
                    type="search"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search"
                />
            </form>
    )
}