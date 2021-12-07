import React, { Component } from 'react';

class EpisodeResult extends Component {
    render() {
        const value = this.props.value;
        // Strip time from ISO date
        let date = new Date(value.episode_date);
        let yearStr = date.getFullYear().toString();
        let month = date.getMonth() + 1;
        let monthStr = ''
        switch (month) {
            case 1:
                monthStr = 'Jan';
                break;
            case 2:
                monthStr = 'Feb';
                break;
            case 3:
                monthStr = 'Mar';
                break;
            case 4:
                monthStr = 'Apr';
                break;
            case 5:
                monthStr = 'May';
                break;
            case 6:
                monthStr = 'Jun';
                break;
            case 7:
                monthStr = 'Jul';
                break;
            case 8:
                monthStr = 'Aug';
                break;
            case 9:
                monthStr = 'Sep';
                break;
            case 10:
                monthStr = 'Oct';
                break;
            case 11:
                monthStr = 'Nov';
                break;
            case 12:
                monthStr = 'Dec';
                break;
            default:
                break;
        }

        let dateStr = date.getDate().toString();
        let shortYearStr = yearStr.slice(2)
        let dateString = `${dateStr}-${monthStr}-${shortYearStr}`

        return (
            <li className='episode'>
                <div className='info'>
                    <a href={value.episode_url} target="_blank" rel="noreferrer">{value.episode_name}</a>
                    <h6>Date: {dateString}</h6>
                </div>
            </li>
        )
    }
}

export default EpisodeResult