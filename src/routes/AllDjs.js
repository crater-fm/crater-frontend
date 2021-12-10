import React, { useState, useEffect, Suspense } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import { getAllDjs } from '../data.js'
import Loading from './Loading.js'

const AllDjsList = (props) => {
    const list = [];
    Object.entries(props.allDjs).forEach((entry, index) => {
        const [key, value] = entry
        list[index] =
                <li className="dj-listitem">
                    <Link to={`/dj/${value.dj_id}`} key={value.dj_id}>{value.dj_name}</Link>
                    <h6 key={index}>Episode Count: {value.episode_count}</h6>
                </li>;
    })
    return (
        <div>
            <h3>Top DJs on Crater</h3>
            <ul className='all-djs-list'>{list}</ul>
        </div>
    )
}

export default function AllDjs(props) {
    let [allDjs, setAllDjs] = useState({});

    useEffect(() => {
        let mounted = true;
        getAllDjs(setAllDjs, mounted);
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <div className="all-djs">
            <AllDjsList allDjs={allDjs} />
            <Suspense fallback={<div>Loading Component</div>}>
                {<Loading />}
            </Suspense>
        </div>
    )
}