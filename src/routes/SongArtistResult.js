import React, { Component } from 'react';

class SongArtistResult extends Component {
    render() {
        const value = this.props.value;
        let ytLink = `https://www.youtube.com/results?search_query=${this.props.artistName}+${value.song.song_name}`

        return (
            <li className='song-artist'>
                <div className='info'>
                    <a href={ytLink} target="_blank" rel="noreferrer">{value.song.song_name}</a>
                    <h6>Play Count: {value.play_count}</h6>
                </div>
            </li>
        )
    }
}

export default SongArtistResult