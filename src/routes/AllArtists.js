import React, { useState, useEffect, Suspense } from 'react';
import '../index.css';
import { getAllArtists } from '../data.js'
import ArtistResult from './ArtistResult.js'
import Loading from './Loading.js'

const AllArtistsList = (props) => {
    const list = [];
    Object.entries(props.allArtists).forEach((entry, index) => {
        const [key, value] = entry
        list[index] =
            <div>
                <ArtistResult key={value.artist_id} value={value} />
                <h6 key={index}>Play Count: {value.play_count}</h6>
            </div>;
    })
    return (
        <div>
            <h3>Top Artists on Crater</h3>
            <ul className='all-artists-list'>{list}</ul>
        </div>
    )
}

export default function AllArtists(props) {
    let [allArtists, setAllArtists] = useState({});

    useEffect(() => {
        let mounted = true;
        getAllArtists(setAllArtists, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <div className="all-artists">
            <AllArtistsList allArtists={allArtists} />
            <Suspense fallback={<div>Loading Component</div>}>
                {<Loading />}
            </Suspense>
        </div>
    )
}