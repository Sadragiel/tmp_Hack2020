import React from 'react';

import LyricsSearch from './search/Lyrics';
import HummingSearch from './search/Humming';
import SearchResults from './search/Results';

export default function App() {
    return (
        <div>
            <HummingSearch />
            <hr />
            <SearchResults />
        </div>
    )
} 