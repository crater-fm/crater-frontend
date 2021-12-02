import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import Icons from '../Icons.js'

class ArtistResult extends Component {
    render () {
        const value = this.props.value;

        return (
            <li className='artist'>
                <div className='info'>
                    <h6>Artist</h6>
                    <Link to={`/artists/${value.artist_id}`} key={value.artist_id}>{value.artist_name}</Link>
                </div>
                <div className='links'>
                     <Icons value={value} />
                </div>
            </li>
        )
    }
}


export default ArtistResult