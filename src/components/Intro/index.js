import React from 'react';

// Capitalized first character names refer to custom components
const Intro = props => (
    <p className="App-intro">
        {props.message}
    </p>
)

export default Intro;