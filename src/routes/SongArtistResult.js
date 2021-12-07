import React, { Component } from 'react';

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