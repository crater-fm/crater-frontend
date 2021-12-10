import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icons from '../Icons.js'

class ArtistResult extends Component {
    render () {
        const value = this.props.value;

        return (
            <li className='artist'>
                <div className='info'>
                    <Link to={`/artist/${value.artist_id}`} key={value.artist_id}>{value.artist_name}</Link>
                </div>
                <div className='links'>
                     <Icons value={value} />
                </div>
            </li>
        )
    }
}


export default ArtistResult