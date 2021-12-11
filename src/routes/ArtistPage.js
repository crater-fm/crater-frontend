import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getArtistDetails } from '../data.js'
import EpisodeResult from './EpisodeResult.js'
import SongArtistResult from './SongArtistResult.js'


const ArtistDetailsLists = (props) => {
    const episodeList = [];
    const djList = [];
    const songArtistList = [];
    let artistName = '';

    Object.entries(props.artistDetails).forEach((entry) => {
        const [key, value] = entry;
        if (key === 'artist') {
            artistName = value.artist_name;
        }
        if (key === 'episodes') {
            value.forEach((element, index) => {
                episodeList[index] = 
                <li className = 'episode-listitem'>
                        <EpisodeResult key={element.episode_id} value={element} />
                </li>;
            })
        } else if (key === 'djs') {
            value.forEach((element, index) => {
                djList[index] = 
                    <li className='dj-listitem'>
                        <Link to={`/dj/${element.dj_id}`} key={element.dj_id}>{element.dj_name}</Link>
                        <h6>Play Count: {element.episode_count}</h6>
                    </li>;
                })
        } else if (key === 'song_artists') {
            value.forEach((element, index) => {
                songArtistList[index] =                 
                    <li className='songartist-listitem'>
                        <SongArtistResult artistName={artistName} key={index} value={element} />
                        <h6>Play Count: {element.play_count}</h6>
                    </li>;
            })
        } else {
        console.log('Unrecognized data type')
    }
    })

    return (
        <div>
            <h3>Key Stats for {artistName}</h3>
            <div className='statsColumnContainer'>
                <div>
                    <h5>Top songs by this artist:</h5>
                    <ul className='song-artist-list'>{songArtistList}</ul>
                </div>
                <div>
                    <h5>DJs who play this artist:</h5>
                    <ul className='dj-list'>{djList}</ul>
                </div>
                <div> 
                    <h5>Episodes featuring this artist:</h5>
                    <ul className='episode-list'>{episodeList}</ul>
                </div>
            </div> 
        </div>      
    ) 
}

export default function ArtistPage(props) {
    let params = useParams();
    let artistId = params.artistId;
    let [artistDetails, setArtistDetails] = useState({});
        
    useEffect(() => {
        let mounted = true;
            getArtistDetails(artistId, setArtistDetails, mounted);
            return () => {
                mounted = false;
                }
    }, [artistId])
            
    return (
        <div className="artist-info">
            <ArtistDetailsLists artistDetails={artistDetails}/>
        </div>
    )
}