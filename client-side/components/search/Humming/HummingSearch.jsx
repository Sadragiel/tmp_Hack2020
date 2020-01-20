import React from 'react';

import record from './service/audioRecorder';

export default ({ performSearch }) => {
    return (
        <div className="humming-search">
            <button className="humming-search__button" onClick={ () => record(performSearch, 5000) }> Start Record </button>
        </div>
    )
} 