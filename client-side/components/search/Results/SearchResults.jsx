import React from 'react';

export default ({ formattedResult }) => {
    return (
        <div className="search-results">
            <h2 className="search-results__title"> Search results </h2>
            <p className="search-results__report">{ formattedResult }</p>
        </div>
    )
} 