import React, { useState } from 'react';
import '../index.css';
import Searchbar from './Searchbar'
import ResultsList from './ResultsList'
import axios from "axios";
import getGlobalSearch from '../data.js'

const dotenv = require('dotenv');
dotenv.config();

// TODO: figure out how to use React Native Safe Area Context

export default function SearchResults() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [loading, setLoading] = useState(true);


    function handleSearchValueChange(value) {
        setSearchValue(value);
    }


    function handleSearchValueSubmit(event) {
        event.preventDefault();
        setSearchResults(getGlobalSearch(searchValue))
    }

    return (
        <div className="container">
            <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit} />
            <div>
                <ResultsList searchResults={searchResults} searchValue={searchValue} />
            </div>
        </div>
    )
}