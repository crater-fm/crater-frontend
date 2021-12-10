import React, { Component } from 'react';

class SongArtistResult extends Component {
    render() {
        const value = this.props.value;
        let ytLink = `https://www.youtube.com/results?search_query=${this.props.artistName}+${value.song.song_name}`

        return (
            <div>
                <a href={ytLink} target="_blank" rel="noreferrer">{value.song.song_name}</a>
            </div>
        )
    }
}

export default SongArtistResult