import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icons from '../Icons.js'

class SongArtistResult extends Component {
    render() {
        const value = this.props.value;

        return (
            <li className='song-artist'>
                <div className='info'>
                    <p>{value.song.song_name}</p>
                    <h6>Play Count: {value.play_count}</h6>
                </div>
            </li>
        )
    }
}

export default SongArtistResult