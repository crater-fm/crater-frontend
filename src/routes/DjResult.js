import React, { Component } from 'react';
import Icons from '../Icons.js'
import { Link } from "react-router-dom";


class DjResult extends Component {
    render() {
        const value = this.props.value;
        return (
            <li className='dj'>
                <div className='info'>
                    <Link to={`/dj/${value.dj_id}`} key={value.dj_id}>{value.dj_name}</Link>
                </div>
                <div className='links'>
                     <Icons value={value} />
                </div>
            </li>
        )
    }
}

export default DjResult