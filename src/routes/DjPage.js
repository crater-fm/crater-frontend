import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { getDjDetails } from '../data.js'
import EpisodeResult from './EpisodeResult.js'

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
                episodeList[index] = 
                    <li className='episode-listitem'>
                        <EpisodeResult key={index} value={element} />
                    </li>;
            })
        } else if (key === 'artists') {
            value.forEach((element, index) => {
                artistList[index] =
                    <li className='artist-listitem'>
                        <Link to={`/artist/${element.artist_id}`} key={element.artist_id}>{element.artist_name}</Link>
                        <h6>Play Count: {element.play_count}</h6>
                    </li>;
            })
        } else {
            console.log('Unrecognized data type')
        }
    })

    return (
        <div>
            <h3>Key Stats for {djName}</h3>
            <div className='statsColumnContainer'>
                <div>
                    <h5>Artists this DJ spins:</h5>
                    <ul className='artist-list'>{artistList}</ul>
                </div>
                <div>
                    <h5>Episodes by this DJ:</h5>
                    <ul className='episode-list'>{episodeList}</ul>
                </div>
            </div>
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