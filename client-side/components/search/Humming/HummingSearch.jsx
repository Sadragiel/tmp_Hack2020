import React from 'react';

import audio from 'utils/audio';



export default ({ performSearch, startHumming, isHumming }) => {
    const handleClick = () => {
        if(!isHumming) {
            startHumming();
            audio.record(performSearch, 10000);
        }
    }
    return (
        <div className="humming-search">
            <button 
                className="humming-search__button btn btn-info" 
                onClick={ handleClick }
                disabled={isHumming}
            >
                { isHumming ? 'Recording' : 'Start Record' } 
            </button>
        </div>
    )
} 