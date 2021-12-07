import React, { Component } from 'react';
import { Link } from "react-router-dom";


class DjListItem extends Component {
    render() {
        const value = this.props.value;
        return (
            <li className='dj'>
                <div className='info'>
                    <Link to={`/djs/${value.dj_id}`} key={value.dj_id}>{value.dj_name}</Link>
                    <h6>Play Count: {value.episode_count}</h6>
                </div>
            </li>
        )
    }
}

export default DjListItem