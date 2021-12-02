import React from 'react';
import {
    Link,
    useSearchParams
} from "react-router-dom";
import '../index.css';

export default function Searchbar(props) {
    const searchValue = props.searchValue

    function handleChange(event) {
        props.onSearchValueChange(event.target.value);
    }

    function handleSubmit(event) {
        props.onSearchValueSubmit(event)
    }

    return (
        <Link to={`/search/${searchValue}`} id="link">
            <form onSubmit={handleSubmit} action='/search'>
                <input
                    className="searchbar"
                    type="search"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search for an Artist, DJ, Episode, Genre or Song"
                />
            </form>
        </Link>
    )

}