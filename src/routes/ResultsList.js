import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, Suspense } from 'react';
import getGlobalSearch from '../data';
import EpisodeResult from './EpisodeResult.js'
import Loading from './Loading.js'

const ListHeader = (props) => {
    const searchResults = props.searchResults;
    const searchValue = props.searchValue;
    var resultsLength = 0;
    Object.entries(searchResults).forEach((entry) => {
        const [key, value] = entry;
        resultsLength = resultsLength + value.length
    })
    return (
        <h4 className='results-header'>{resultsLength} search results for {searchValue}</h4>
    )
}

const ListBody = (props) => {

    const resultsList = [];

    Object.entries(props.searchResults).forEach((entry) => {
        const [key, value] = entry;
        var subResults = [];
        if (key === 'artists') {
            value.forEach((element, index) => {
                subResults[index] =
                    <li className='artist-listitem'>
                        <h6>Artist</h6>
                        <Link to={`/artist/${element.artist_id}`} key={element.artist_id}>{element.artist_name}</Link>
                    </li>;
            })
        } else if (key === 'djs') {
            value.forEach((element, index) => {
                subResults[index] =
                    <li className='dj-listitem'>
                        <h6>DJ</h6>
                        <Link to={`/dj/${element.dj_id}`} key={element.dj_id}>{element.dj_name}</Link>
                    </li>;
            })
        } else if (key === 'episodes') {
            value.forEach((element, index) => {
                subResults[index] =
                    <li className='episode-listitem'>
                        <h6>Episode</h6>
                        <EpisodeResult key={index} value={element} />
                    </li>;
            })
        } else {
            console.log('Unrecognized data type')
        }

        if (subResults.length > 0) {
            resultsList.push(subResults);
        }

    })

    return (
        <div>
            <ul className='search-results'>{resultsList}</ul>
        </div>
    )
}

export default function ResultsList(props) {
    let params = useParams();
    let searchValue = params.searchValue;
    let [searchResults, setSearchResults] = useState({});

    useEffect(() => {
        let mounted = true;
        getGlobalSearch(searchValue, setSearchResults, mounted);
        return () => {
            mounted = false;
        }
    }, [searchValue])

    return (
        <div className="results">
            <ListHeader searchResults={searchResults} searchValue={searchValue} />
            <ListBody searchResults={searchResults} searchValue={searchValue} />
            <Suspense fallback={<div>Loading Component</div>}>
                {<Loading />}
            </Suspense>
        </div>
    )
}
