import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getArtistDetails } from '../data.js'
import Loading from './Loading.js'

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
            <p>Artist ID: {artistId}</p>
            <p>Artist Name: {artistDetails.artist_name}</p>
        </div>
    )
}