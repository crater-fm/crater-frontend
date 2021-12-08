import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getDjDetails } from '../data.js'
import EpisodeResult from './EpisodeResult.js'
import ArtistResult from './ArtistResult.js'


const DjDetailsLists = (props) => {
    const episodeList = [];
    const artistList = [];
    let djName = '';

    Object.entries(props.djDetails).forEach((entry) => {
        const [key, value] = entry;
        if (key === 'dj') {
            djName = value.dj_name;
        }
        if (key === 'episodes') {
            value.forEach((element, index) => {
                episodeList[index] = <EpisodeResult key={index} value={element} />;
            })
        } else if (key === 'artists') {
            value.forEach((element, index) => {
                artistList[index] = 
                    <div>
                        <ArtistResult key={index} value={element} />
                        <h6>Play Count: {element.play_count}</h6>
                    </div>;
            })
        } else {
            console.log('Unrecognized data type')
        }
    })

    return (
        <div>
            <h3>Key Stats for {djName}</h3>
            <ul>
                <li>
                    Artists this DJ spins:
                    <ul className='artist-list'>{artistList}</ul>
                </li>
                <li> Episodes by this DJ:
                    <ul className='episode-list'>{episodeList}</ul>
                </li>
            </ul>
        </div>
    )
}

export default function DjPage(props) {
    let params = useParams();
    let djId = params.djId;
    let [djDetails, setDjDetails] = useState({});

    useEffect(() => {
        let mounted = true;
        getDjDetails(djId, setDjDetails, mounted);
        return () => {
            mounted = false;
        }
    }, [djId])

    return (
        <div className="dj-info">
            <DjDetailsLists djDetails={djDetails} />
        </div>
    )
}