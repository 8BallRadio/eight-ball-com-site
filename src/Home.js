import React from 'react';
import ZineFairs from './ZineFairs';
import Teams from './Teams';

function Home () {
    return(
        <div>
            <Teams />
            <ZineFairs />
            <h2>Merch</h2>
            <h2>Installations</h2>
            <h2>Events</h2>
            <h2>Headquarters</h2>
        </div>
    )
}

export default Home;