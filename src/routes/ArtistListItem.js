import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ArtistListItem extends Component {
    render() {
        const value = this.props.value;
        return (
            <li className='artist'>
                <div>
                    <Link to={`/artist/${value.artist_id}`} key={value.artist_id}>{value.artist_name}</Link>
                    <h6>Play Count: {value.play_count}</h6>
                </div>
            </li>
        )
    }
}

export default ArtistListItem