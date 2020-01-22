import React, {useState} from 'react';

import Start from 'components/game/Start';
import HummingSearch from 'components/search/Humming';
import LyricsSearch from 'components/search/Lyrics';
import SearchResults from 'components/search/Results';

export default function() {
    

    const [step, setStep] = useState('Start');
    
    const Steps = {
        'Start': <Start callback={setStep}/>,
        'Humming': <HummingSearch/>,
        'Lyrics': <LyricsSearch/>,
        'results': <SearchResults/>,
    }

    return (
        <div>
            
        </div>
    )
} 