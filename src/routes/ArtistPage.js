import React from 'react';
import '../index.css';
import { useParams } from "react-router-dom";
import { getArtistDetail } from '../data.js'
import Loading from './Loading.js'

export default function ArtistPage() {
    let params = useParams();
    let artistData = getArtistDetail(params.artistId);

    return artistData ? (
        <div>
            <h2>Artist ID: {params.artistId}</h2>;
          {/*  <h2>DJ Name: {artistData.artist_name}</h2>; */}
        </div>
    ) :
        <Loading />
}